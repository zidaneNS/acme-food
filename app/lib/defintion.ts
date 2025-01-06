export type FoodCategory = 'dessert' | 'food' | 'drink';

export type RolesType = 'ADMIN' | 'USER';

export type StatusType = 'PENDING' | 'SUCCESS';

interface ColumnType {
    id: number,
    createdAt: string
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
    user_id: number,
    food_id: number,
    amount: number,
}

export interface NoteType extends ColumnType {
    status: StatusType,
    totalPrice: number,
    user_id: number
}

export type Note_Cart = {
    cart_id: number,
    note_id: number
}

export type FoodByCategory = {
    id: number,
    name: string,
    price: number,
    img_url: string
}

export type DisplayCartType = {
    name: string,
    price: number,
    img_url: string,
    amount: number,
    totalPrice: number
}