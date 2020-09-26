import React, {memo} from 'react';

const Todo =memo(({children})=>{
    return(
        <div>
            {children}
            <input type="checkbox" id="done" />
            <button>X</button>
        </div>
    );
})

export default Todo;