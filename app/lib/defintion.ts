import { z } from "zod";

export type FoodCategory = 'dessert' | 'food' | 'drink';

export type RolesType = 'ADMIN' | 'USER';

export type StatusType = 'PENDING' | 'SUCCESS';

interface ColumnType {
    id: number | string,
    createdat: Date
}

export interface FoodType extends ColumnType {
    name: string,
    category: FoodCategory,
    price: number,
    img_url: string,
}

export interface UserType extends ColumnType {
    name: string,
    email: string,
    password: string,
    roles: RolesType,
    img_url: string,
}

export interface CartType extends ColumnType {
    user_id: number | string,
    food_id: number | string,
    amount: number,
}

export interface NoteType extends ColumnType {
    status: StatusType,
    totalprice: number,
    user_id: number | string
}

export type Note_Cart = {
    cart_id: number,
    note_id: number | string
}

export type FoodByCategory = {
    id: number | string,
    name: string,
    price: number,
    img_url: string
}

export type DisplayCartType = {
    id: string | number,
    name: string,
    price: number,
    img_url: string,
    amount: number
}

export type UserDisplayType = {
    name: string,
    roles: RolesType,
    img_url: string,
    id: number | string,
    email: string
}

export type NoteDisplayType = {
    status: StatusType,
    totalprice: number,
    createdat: Date,
    user_id: string | number
}

export const LoginFormSchema = z.object({
    email: z.string({ invalid_type_error: 'Email field cannot empty'}).email({ message: 'Please enter valid email' }).trim(),
    password: z.string({ invalid_type_error: 'Password field cannot empty' })
});

export type LoginFormState = {
    errors: {
        email?: string[] | undefined;
        password?: string[] | undefined;
    };
} | {
    errors: {
        email: string;
        password: undefined;
    };
} | {
    errors: {
        email: undefined;
        password: string;
    };
} | undefined