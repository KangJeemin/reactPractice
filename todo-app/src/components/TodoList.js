import React, { useCallback } from 'react';
import TodoListitem from './TodoListitem';
import './styles/TodoList.scss';
import { List } from 'react-virtualized';

function TodoList({todos,onRemove,onToggle}) {
    
    const rowRenderer = useCallback(
        ({index,key,style})=>{
            const todo = todos[index];
            return(
                <TodoListitem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                />
            )
        },[onRemove,onToggle,todos])


    return (
        <List
            className="TodoList"
            width={512} // 전체크기
            height={513} // 전체높이
            rowCount={todos.length} //항목계수
            rowHeight={57} //항목높이
            rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수 
            list={todos} // 배열
            style={{ outline : 'none'}} // List에 기본 적용되는 outline 스타일 제거
        />

    );
}

export default React.memo(TodoList);