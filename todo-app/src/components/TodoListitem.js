import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md'
import cn from 'classnames';
import './styles/TodoListitem.scss'


function TodoListitem({todo,onRemove,onToggle}) {
    const {text, checked,id } = todo;
    
    return (
        <div className="TodoListItem">
            <div className={cn('checkbox',{ checked})} onClick={()=>{onToggle(id)}}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={()=>onRemove(id)}>
                <MdRemoveCircleOutline/>    
            </div>            
        </div>
    );
}

export default TodoListitem;