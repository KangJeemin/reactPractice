import React from 'react';
import './styles/TodoInsert.scss';
import { MdAdd } from 'react-icons/md';
import { useState, useCallback } from 'react';
function TodoInsert({onInsert}) {
    const [value, setValue] = useState('');
    
    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[])

    const onSubmit = useCallback(e=>{
        onInsert(value);
        setValue('');
        e.preventDefault() // submit 이벤트는 브라우저에서 새로 고침을 발생 시키는데, 이를 방지하기 위해 이 함수를 호출.
    },[onInsert,value])
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder='할 일을 입력하세요' value={value} onChange={onChange}/>
                <button Type="submit">
                    <MdAdd></MdAdd>
                </button>
            
        </form>
    );
}

export default TodoInsert;