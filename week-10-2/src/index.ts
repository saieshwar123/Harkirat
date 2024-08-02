
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//   const res=await prisma.user.create({
//     data:{
//         email:username,
//         password,
//         firstName,
//         lastName
//     },

//     select:{
//         id:true,
//         password:true
//     }
//   })

//   console.log(res);
// }

// insertUser("vish","123","sai","eshwar")

interface UpdateParams
{
      firstName:string
      lastName:string
}


async function UpdateUser(username:string,{firstName,lastName}:UpdateParams)
{
    const res=await prisma.user.update({where:{email:username},data:{firstName,lastName},select:{firstName:true,lastName:true}})
    console.log(res);
}

UpdateUser("vish",{firstName:"vish",lastName:"eshwar"})