"use strict";
// import { Client } from 'pg'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// const client=new Client({
//     connectionString:"postgresql://test_owner:X6ap3FRnZstY@ep-white-morning-a54o6ios.us-east-2.aws.neon.tech/test?sslmode=require"
// })
// console.log("hi");
// async function createuserstable()
// {
//     // await  client.connect()
//     const result = await client.query(`create table users(
//         id SERIAL PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         )`)
//     console.log(result);
// } 
// async function insertintotable() {
//     await client.connect()
//     const result=await client.query(`insert into users (username,email,password) values ("esh","sai@gamil.com","123")`)
//     console.log(result)
// }
// // createuserstable();
// insertintotable();
const pg_1 = require("pg");
// Async function to insert data into a table
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            // host: 'localhost',
            // port: 5432,
            // database: 'test',
            // user: 'test_owner',
            // password: 'X6ap3FRnZstY',
            connectionString: "postgresql://test_owner:X6ap3FRnZstY@ep-white-morning-a54o6ios.us-east-2.aws.neon.tech/test?sslmode=require"
        });
        console.log(username);
        console.log(email);
        console.log(password);
        try {
            yield client.connect(); // Ensure client connection is established
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1,$2,$3)";
            const values = [username, email, password];
            const res = yield client.query(insertQuery, values);
            console.log('Insertion success:', res); // Output insertion result
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end(); // Close the client connection
        }
    });
}
// insertData("vishal","v@gmail.com","123");
function getdata(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            // host: 'localhost',
            // port: 5432,
            // database: 'test',
            // user: 'test_owner',
            // password: 'X6ap3FRnZstY',
            connectionString: "postgresql://test_owner:X6ap3FRnZstY@ep-white-morning-a54o6ios.us-east-2.aws.neon.tech/test?sslmode=require"
        });
        try {
            yield client.connect();
            const query = "SELECT * FROM USERS WHERE email=$1";
            const values = [email];
            const res = yield client.query(query, values);
            if (res.rows.length > 0) {
                console.log('user found', res.rows[0]);
                return res.rows[0];
            }
            else {
                console.log("User not found");
                return null;
            }
        }
        catch (err) {
            console.log("Error", err);
        }
    });
}
getdata('v@gmail.com');
