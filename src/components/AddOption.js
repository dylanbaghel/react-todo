import React from 'react';

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddTodo(e) {
        e.preventDefault();
        const newTodo = e.target.elements.newTodo.value.trim().toLowerCase();
        const error = this.props.handleAddTodo(newTodo);
        this.setState(() => ({
            error: error
        }));
        e.target.elements.newTodo.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="lead text-muted">{this.state.error}</p>}
                <form onSubmit={this.handleAddTodo}>
                    <div className="form-group d-flex">
                        <input className="form-control"type="text" name="newTodo"/>
                        <button className="btn btn-primary ml-2">Add Option</button>
                    </div>
                </form>
            </div>
        );
    }


}

export default AddOption;