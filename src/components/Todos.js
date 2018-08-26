import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    return(
        <div>
            <button className="btn btn-block btn-outline-success mb-3 btn-lg random-btn" onClick={props.handleRandomSelectTodo}>
                What Should I Do First?
            </button>
            <button className="btn btn-outline-danger btn-lg btn-block mb-3 remove-all-btn" onClick={props.handleRemoveAllTodos}>Remove All</button>
            <div className="list-group list-group-flush">
            {
                props.todos.map(todo => (
                    <Todo 
                        todo={todo} 
                        key={todo} 
                        handleRemoveTodo={props.handleRemoveTodo}
                    />
                ))
            }
            </div>
        </div>
    );    
};

export default Todos;