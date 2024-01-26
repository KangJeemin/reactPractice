import React from 'react';
import TodoListitem from './TodoListitem';
import './styles/TodoList.scss';

function TodoList({todos,onRemove,onToggle}) {
    return (
        <div className='TodoList'>
            {todos.map(todo=>(
                <TodoListitem todo={todo} key={todo.id} onRemove={onRemove} onToogle={onToggle}/>
            ))}
            
        </div>
    );
}

export default TodoList;