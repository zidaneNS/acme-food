'use server';

import { redirect } from "next/navigation";
import { LoginFormSchema, LoginFormState, RegisterFormSchema, RegisterFormState, UserType } from "../defintion";
import { fetchUserByEmail } from "../data";
import bcrypt from "bcrypt";
import { createSession, deleteSession } from "./session";
import { sql } from "@vercel/postgres";

export async function register(prevState: RegisterFormState, formData: FormData) {
    const validatedFields = RegisterFormSchema.safeParse({
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
    });

    if (!validatedFields.success) return { errors: validatedFields.error.flatten().fieldErrors }

    const { username, email, password, password_confirmation} = validatedFields.data;

    if (!username) return { errors: { username: 'Username field cannot empty' }};

    if (password !== password_confirmation) return { errors: { password_confirmation: 'Password confirmation should have same value as password', password: 'Password confirmation should have same value as password' }}

    const foundUser = await fetchUserByEmail(email);

    if (foundUser) return { errors: { email: 'Email already exists' }};

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await sql`INSERT INTO users (name, email, password, roles) VALUES (${username}, ${email}, ${hashedPassword}, 'USER');`
    } catch (err) {
        console.error(err);
        return { errors: { username: 'Register Failed' }};
    }

    return redirect('/auth/login');
}

export async function login(prevState: LoginFormState, formData: FormData) {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    });

    
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    const { email, password } = validatedFields.data;

    const foundUser: UserType | undefined = await fetchUserByEmail(email);

    if (!foundUser) {
        return {
            errors: {
                email: 'email invalid',
                password: undefined
            }
        }
    }

    const matched = await bcrypt.compare(password.toString(), foundUser.password);

    if (!matched) {
        return {
            errors: {
                email: undefined,
                password: 'password invalid'
            }
        }
    }

    await createSession(foundUser.id.toString());

    redirect('/home?category=food-drink-dessert');
}

export async function logout() {
    await deleteSession();
    redirect('/');
}