import { createAction, handleAction } from 'redux-actions'
import produce from 'immer';
// 액션 타입 정의하기
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 Todo를 등록함
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함


export const changeInput = createAction(CHANGE_INPUT,input=>input);
// export const changeInput= input => ({
//     type:CHANGE_INPUT,
//     input
// });
let id =3; // insert가 호출될 때 마다 1씩 더해집니다. (사전에 todo 객체 두 개를 미리 넣어 둘 것임)
export const insert= createAction(INSERT, text=>({
    id: id++,
    text,
    done:false
}));
// export const insert = text=> ({
//     type:INSERT,
//     todo:{
//         id:id++,
//         text,
//         done:false
//     }
// });
export const toggle = createAction(TOGGLE,id=>id);
// export const toggle = id => ({
//     type:TOGGLE,
//     id
// })
export const remove = createAction(REMOVE, id=>id);
// export const remove = id => ({
//     type:REMOVE,
//     id
// })

const initialState= {
    input:'',
    todos:[
        {
            id:1,
            text:'리덕스 기초 배우기',
            done:false
        },
        {
            id:2,
            text:'리액트와 리덕스 사용하기',
            done:false
        }
    ]
};

const todos = handleAction(
    {
        [CHANGE_INPUT]:(state,{payload:input})=>produce(state,draft => {
            draft.input= input;
        }),
        [INSERT]:(state,{payload: todo})=>produce(state,draft =>{
            draft.todos.push(todo);
        }),
        [TOGGLE]:(state,{payload:id})=>produce(state,draft=>{
            const todo =draft.todos.find(todo=> todo.id===id);
            todo.done=!todo.done;
        }),
        [REMOVE]:(state,{payload:id})=>produce(state,draft=>{
            const index = draft.todos.findIndex(todo=> todo.id === id);
            draft.todos.splice(index, 1);
        }),
    },
    initialState,
);
// function todos(state=initialState,action){
//     switch (action.type){
//         case CHANGE_INPUT:
//             return{
//                 ...state,
//                 input:action.input
//             };
//         case INSERT:
//             return{
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             }
//         case TOGGLE:
//             return{
//                 ...state,
//                 todos:state.todos.map(todo=>
//                     todo.id === action.id ? {...todo, done: !todo.done}:todo
//                     )
//             }
//         case REMOVE:
//             return{
//                 ...state,
//                 todos:state.todos.filter(todo=> todo.id !== action.id)
//             }
//         default:
//             return state;
//     }
// }

export default todos;