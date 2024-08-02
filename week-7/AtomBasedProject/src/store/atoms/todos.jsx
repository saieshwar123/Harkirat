import {atom, selector} from "recoil"

export const todosState=atom({
 key:"todosState",
 default:[{
        title:"gym",
        description:"going to gym"
 },]
})

// export const filteredtodosState=selector({
//     key:"filteredtodos",
//     get:({get})=>{
//         const todos=get(todos);

//     }
// })