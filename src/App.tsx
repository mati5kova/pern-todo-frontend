import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="min-w-full overflow-y-hidden">
            <h1 className="mt-8 flex h-12 items-center justify-center text-4xl font-bold">PERN To-Do Aplication</h1>
            <div className="mt-8 px-96 text-center">
                <AddTodo></AddTodo>
                <TodoList></TodoList>
            </div>
        </div>
    );
}

export default App;
