import React from 'react';


const Header = () => {
    return(
        <nav className="navbar navbar-dark bg-dark mb-3">
           <div className="container">
            <div className="navbar-brand">
                    <h1>Todo App</h1>
                    <p>Take Todos, Make Todos</p>
            </div>
           </div>
        </nav>
    );
};

export default Header;