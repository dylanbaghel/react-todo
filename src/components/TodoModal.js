import React from 'react';
import Modal from 'react-modal';

const TodoModal = (props) => {
    return (
        <Modal
            isOpen={!!props.isSelected}
            contentLabel="Selected Todo"
            onRequestClose={props.handleClearSelectedTodo}
            ariaHideApp={false}
        >
            <div>
                <h1>Selected Todo</h1>
                {props.isSelected && <p className="text-capitalize">{props.isSelected}</p>}
                <button onClick={props.handleClearSelectedTodo}>Okay</button>
            </div>

        </Modal>
    );
};

export default TodoModal;
