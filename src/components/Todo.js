import React from 'react';

const Todo = (props) => {
    return(
        <div className="list-group-item todo-item mb-2 d-flex justify-content-between ">
            <p className="text-capitalize todo-item__text text-monospace">{props.todo}
            </p>
            <button className="btn btn-danger todo-item__btn" onClick={props.handleRemoveTodo.bind(this, props.todo)}>Remove</button>
            
        </div>
    );
};

export default Todo;