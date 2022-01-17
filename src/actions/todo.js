const todoAdd = (todoToAdd)=>({type:"todo_add", todo: todoToAdd});
const todoDelete =(indexToDelete)=>({type:"todo_delete", indexToDelete: indexToDelete});

export {todoAdd, todoDelete};