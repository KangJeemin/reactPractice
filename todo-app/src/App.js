import React , {useState, useRef, useCallback,useReducer} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


function createBulkTodos(){
  const array=[];
  for(let i =1;i<=2500;i++){
    array.push({
      id:i,
      text:`할 일 ${i}`,
      checked:false

    })
  }
  return array;
}

function todoReducer(todos,action) {
  switch(action.type){
    case 'INSERT' :
      return todos.concat(action.todo)
    case 'REMOVE' :
      return todos.filter(todos=>todos.id !== action.id); 
    case 'TOGLE' :
      return todos.map(todo=>
        todo.id===action.id ? {...todo ,checked:!todo.checked}:todo,
        );
  default:
    return todos;
  }
}
function App() {

  const [todos,dispatch] = useReducer(todoReducer,undefined,createBulkTodos) 

  const nextId = useRef(2501);

  const onInsert = useCallback(text=>{
    const todo = {
      id: nextId.current,
      text,
      checked:false,
    };
    dispatch({type:"INSERT",todo})
    nextId.current +=1 ;
  },
  [])
  
  const onRemove = useCallback(id=>{
    dispatch({type:'REMOVE'},id)
  },[])

  const onToggle = useCallback(id=>{
    dispatch({type:'TOGGLE',id});
  },[])
  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
}

export default App;