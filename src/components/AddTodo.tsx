import React, { FormEvent, useState } from 'react';

const AddTodo = () => {
    const [lastTodo, setLastTodo] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLastTodo(description);
        if (description.length !== 0) {
            try {
                const body = { description };
                const x = JSON.stringify(body);
                console.log(`type: ${typeof x}, body: ${x}`);

                const response = await fetch(import.meta.env.VITE_SITE_URL || 'http://localhost:5000/todos', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                });
                setDescription('');
                const win: Window = window;
                win.location = '/';
            } catch (error) {
                alert('Error');
                console.error((error as Error).message);
            }
        }
    };

    return (
        <div className="mb-4">
            <form
                className="flex max-h-8 justify-between"
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <input
                    type="text"
                    placeholder="Add To-Do"
                    className=" h-8 w-11/12 rounded border border-gray-500 pl-2 outline-none hover:border-gray-700"
                    autoFocus
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    value={description}
                ></input>
                <button type="submit" className="ml-4 h-8 rounded bg-green-600  px-4 font-bold text-white hover:bg-green-700">
                    Submit
                </button>
            </form>
        </div>
    );
};
export default AddTodo;
