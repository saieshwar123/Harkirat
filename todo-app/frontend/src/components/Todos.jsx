export function Todos({ todos }) {
  return (
    <div>
      
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button onClick=
            {function (){

              fetch("http://localhost:3000/completed",{
                method:"POST",
                body: JSON.stringify({
                  id:todo._id
                 }),
                 headers: {
                   "Content-type": "application/json",
                 }
              })
            }}>
              {todo.completed == true ? "Completed" : "Mark as Done!"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
