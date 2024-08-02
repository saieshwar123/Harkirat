// import { Client } from 'pg'

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


import { Client } from 'pg';

// Async function to insert data into a table
async function insertData(username:string,email:string,password:string) {
  const client = new Client({
    // host: 'localhost',
    // port: 5432,
    // database: 'test',
    // user: 'test_owner',
    // password: 'X6ap3FRnZstY',
     connectionString:"postgresql://test_owner:X6ap3FRnZstY@ep-white-morning-a54o6ios.us-east-2.aws.neon.tech/test?sslmode=require"
  });
    console.log(username);
    console.log(email);
    console.log(password);
  try {
    await client.connect(); // Ensure client connection is established
    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1,$2,$3)"
    const values=[username,email,password]
    const res = await client.query(insertQuery,values);
    console.log('Insertion success:', res); // Output insertion result
  } catch (err) {
    console.error('Error during the insertion:', err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// insertData("vishal","v@gmail.com","123");


async function getdata(email:string) {
    const client = new Client({
        // host: 'localhost',
        // port: 5432,
        // database: 'test',
        // user: 'test_owner',
        // password: 'X6ap3FRnZstY',
         connectionString:"postgresql://test_owner:X6ap3FRnZstY@ep-white-morning-a54o6ios.us-east-2.aws.neon.tech/test?sslmode=require"
      });
    try{
        await client.connect();
        const query="SELECT * FROM USERS WHERE email=$1"
        const values=[email]
        const res=await client.query(query,values);
        if(res.rows.length>0)
        {
            console.log('user found',res.rows[0])
            return res.rows[0];
        }
        else
        {
            console.log("User not found");
            return null;
        }
    }
    catch(err)
    {
        console.log("Error",err)
    }

}

getdata('v@gmail.com')