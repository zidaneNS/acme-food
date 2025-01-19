import { CartType, FoodType, NoteType, Note_Cart, UserType } from "./defintion";

export const users: UserType[] = [
    {
        id: 1,
        name: 'zidane',
        email: 'zidane@example.com',
        password: 'password',
        roles: 'USER',
        img_url: '',
        createdat: new Date()
    },
    {
        id: 2,
        name: 'jotaro',
        email: 'jotaro@example.com',
        password: 'password',
        roles: 'USER',
        img_url: '',
        createdat: new Date()
    },
    {
        id: 3,
        name: 'admin',
        email: 'admin@example.com',
        password: 'password',
        roles: 'ADMIN',
        img_url: '',
        createdat: new Date()
    },
];

export const foods: FoodType[] = [
    {
        id: 1,
        name: 'Fried Rice',
        category: 'food',
        price: 10000,
        img_url: '/img/fried-rice.jpg',
        createdat: new Date()
    },
    {
        id: 2,
        name: 'Pizza',
        category: 'food',
        price: 15000,
        img_url: '/img/pizza.jpg',
        createdat: new Date()
    },
    {
        id: 3,
        name: 'Ice Tea',
        category: 'drink',
        price: 5000,
        img_url: '/img/ice-tea.jpg',
        createdat: new Date()
    }
];

export const carts: CartType[] = [
    {
        id: 1,
        food_id: 1,
        user_id: 1,
        amount: 2,
        createdat: new Date()
    },
    {
        id: 2,
        food_id: 2,
        user_id: 1,
        amount: 2,
        createdat: new Date()
    },
    {
        id: 3,
        food_id: 2,
        user_id: 2,
        amount: 1,
        createdat: new Date()
    },
    {
        id: 4,
        food_id: 3,
        user_id: 2,
        amount: 2,
        createdat: new Date()
    }
];

export const notes: NoteType[] = [
    {
        id: 1,
        status: 'SUCCESS',
        totalprice: 50000,
        createdat: new Date(),
        user_id: 1
    },
    {
        id: 2,
        status: 'PENDING',
        totalprice: 25000,
        createdat: new Date(),
        user_id: 2
    }
];

export const note_cart: Note_Cart[] = [
    {
        cart_id: 1,
        note_id: 1
    },
    {
        cart_id: 2,
        note_id: 1
    },
    {
        cart_id: 3,
        note_id: 2
    },
    {
        cart_id: 4,
        note_id: 2
    }
];