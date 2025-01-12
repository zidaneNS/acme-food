'use server';

import { redirect } from "next/navigation";
import { LoginFormSchema, UserType } from "../defintion";
import { fetchUserByEmail } from "../data";
import bcrypt from "bcrypt";
import { createSession, deleteSession } from "./session";

export async function login(formData: FormData) {
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

    redirect('/home?categories=food-drink-dessert');
}

export async function logout() {
    await deleteSession();
    redirect('/');
}