import React, { useEffect, useState } from 'react';
import DeleteTodo from './DeleteTodo';
import EditTodo from './EditTodo';

interface Todos {
    todo_id: number;
    description: string;
}

const TodoList = () => {
    const [todos, setTodos] = useState<Array<Todos>>([]);

    const getTodos = async () => {
        try {
            const response = await fetch(import.meta.env.API_URL || 'http://localhost:5000/todos');
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className="overflow-y-auto">
            <table className="w-full border-separate border-spacing-2">
                <tbody>
                    <tr className="border-rounded border border-solid border-gray-400">
                        <th className="w-3/4 text-left">ToDo</th>
                        <th className="text-right">Edit</th>
                        <th className="text-right">Delete</th>
                    </tr>
                    {todos.map((todo) => {
                        return (
                            <tr key={todo.todo_id} className="text-left">
                                <td className="pb-2">{todo.description}</td>
                                <td className=" pb-2 text-end">
                                    <EditTodo todo={todo}></EditTodo>
                                </td>
                                <td className=" pb-2 text-end">
                                    <DeleteTodo id={todo.todo_id} todos={todos} setTodos={setTodos}></DeleteTodo>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
