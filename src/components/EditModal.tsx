import React, { useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';

interface EditModalTodo {
    setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    todo: any;
}

const EditModal = ({ setOpened, todo }: EditModalTodo) => {
    const [description, setDescription] = useState(todo.description);

    const handleEditSubmit = async (e: any) => {
        try {
            //`http://localhost:5000/todos/${todo.todo_id}`
            const body = { description };
            const newDescription = await fetch(`https://pern-todo-backend.up.railway.app/todos/${todo.todo_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            setOpened((opened) => !opened);
            window.location.href = '/';
        } catch (error) {
            console.log((error as Error).message);
        }
    };

    return (
        <div className="absolute top-1/3 left-1/2 w-2/4 -translate-y-1/3 -translate-x-2/4" aria-modal="true" role="dialog">
            <div className="pointer-events-none relative w-auto">
                <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-2xl outline-none ">
                    <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
                        <h5 className="text-xl font-medium leading-normal text-gray-800">Edit</h5>
                        <button
                            type="button"
                            className="box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                            aria-label="Close"
                            onClick={() => setOpened(false)}
                        >
                            <VscChromeClose></VscChromeClose>
                        </button>
                    </div>
                    <div className="relative p-4">
                        <form onSubmit={(e) => handleEditSubmit(e)}>
                            <input
                                type="text"
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                                className="h-8 min-w-full rounded-sm border border-gray-400 pl-2 outline-none focus:border-gray-600"
                                autoFocus
                                contentEditable
                            />
                        </form>
                    </div>
                    <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4">
                        <button
                            type="button"
                            className="inline-block rounded bg-red-500 px-6 py-2.5 text-xs font-medium leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-600 active:shadow-lg"
                            onClick={() => setOpened(false)}
                        >
                            CANCEL
                        </button>
                        <form onSubmit={(e) => handleEditSubmit(e)}>
                            <button
                                type="submit"
                                className="ml-1 inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                            >
                                SAVE CHANGES
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
