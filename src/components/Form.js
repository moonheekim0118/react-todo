import React ,{useContext, memo} from 'react';
import {ToDoContext} from './TodoList';

const Form =()=>{
    const {addNewTodoHandler} = useContext(ToDoContext);
    return(
        <>
            <form onSubmit={addNewTodoHandler}>
                <input type="text" placeholder="new to do" name="todo"></input>
                <button type="submit">등록</button>
            </form>
        </>
    );
};

export default memo(Form);