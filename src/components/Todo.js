import React, {useContext,memo} from 'react';
import {ToDoContext} from './TodoList';

const Todo =({children, id})=>{
    const { todoStateHanlder , todoRemoveHandler } = useContext(ToDoContext);

    return(
        <div>
            {children}
            <input type="checkbox" id={id} name="check" onChange={todoStateHanlder} value={children} />
            <button onClick={todoRemoveHandler}>X</button>
        </div>
    );
}

export default memo(Todo);