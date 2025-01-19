import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";
import { carts, foods, note_cart, notes, users } from "../lib/data-placeholder";

const client = await db.connect();

async function seedUsers() {
    try {
        await client.sql`CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password TEXT NOT NULL,
            roles VARCHAR(255) NOT NULL,
            img_url VARCHAR(255),
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );`;
    } catch (err) {
        console.log(err, 'error create table users')
    }

    const insertedUsers = await Promise.all(
        users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            return client.sql`INSERT INTO users (name, email, password, roles, img_url) VALUES (${user.name}, ${user.email}, ${hashedPassword}, ${user.roles}, ${user.img_url});`;
        })
    );

    return insertedUsers;
}

async function seedFoods() {
    await client.sql`CREATE TABLE IF NOT EXISTS foods (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        img_url VARCHAR(255),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

    const insertedFoods = await Promise.all(
        foods.map(async (food) => client.sql`INSERT INTO foods (name, category, price, img_url) VALUES (${food.name}, ${food.category}, ${food.price}, ${food.img_url});`)
    );

    return insertedFoods;
}

async function seedCarts() {
    await client.sql`CREATE TABLE IF NOT EXISTS carts (
        id SERIAL PRIMARY KEY,
        user_id INT NOT NULL,
        food_id INT NOT NULL,
        amount INT NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (food_id) REFERENCES foods(id)
    );`;

    const insertedCarts = await Promise.all(
        carts.map(async (cart) => client.sql`INSERT INTO carts (user_id, food_id, amount) VALUES (${cart.user_id}, ${cart.food_id}, ${cart.amount});`)
    );

    return insertedCarts;
}

async function seedNotes() {
    await client.sql`CREATE TABLE IF NOT EXISTS notes (
        id SERIAL PRIMARY KEY,
        status VARCHAR(255) NOT NULL,
        totalPrice INT NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        user_id INT NOT NULL,
        FOREIGN KEY (user_id)  REFERENCES users(id)
    );`;

    const insertedNotes = await Promise.all(
        notes.map(async (note) => client.sql`INSERT INTO notes (status, totalprice, user_id) VALUES (${note.status}, ${note.totalprice}, ${note.user_id});`)
    );

    return insertedNotes;
}

async function seedNote_Cart() {
    await client.sql`CREATE TABLE IF NOT EXISTS note_cart (
        cart_id INT NOT NULL,
        note_id INT NOT NULL,
        FOREIGN KEY (cart_id) REFERENCES carts(id),
        FOREIGN KEY (note_id) REFERENCES notes(id)
    );`;

    const insertedNote_Cart = await Promise.all(
        note_cart.map(async (item) => client.sql`INSERT INTO note_cart (cart_id, note_id) VALUES (${item.cart_id}, ${item.note_id});`)
    );

    return insertedNote_Cart;
}

export async function GET() {
    try {
        await client.sql`BEGIN`;
        await seedUsers();
        await seedFoods();
        await seedCarts();
        await seedNotes();
        await seedNote_Cart();
        await client.sql`COMMIT`;

        return Response.json({ message: 'Database seeded successfully' });
    } catch (err) {
        await client.sql`ROLLBACK`;
        return Response.json({ error: err }, { status: 500 })
    }
}