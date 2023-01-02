import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

interface DeleteTodo {
    id: number;
    todos: any[];
    setTodos: React.Dispatch<React.SetStateAction<any[]>>;
}

const DeleteTodo = ({ id, todos, setTodos }: DeleteTodo) => {
    const handleDelete = async (tdid: any) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SITE_URL}/${tdid}` || `http://localhost:5000/todos/${tdid}`, {
                method: 'DELETE',
            });
            setTodos(todos.filter((todo) => todo.todo_id !== id));
        } catch (error) {
            console.error((error as Error).message);
        }
    };

    return (
        <button onClick={() => handleDelete(id)}>
            <FaRegTrashAlt></FaRegTrashAlt>
        </button>
    );
};

export default DeleteTodo;
