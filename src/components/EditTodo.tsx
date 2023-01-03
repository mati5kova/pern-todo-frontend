import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import EditModal from './EditModal';

const EditTodo = (todo: any) => {
    const [opened, setOpened] = useState(false);

    const handleEditClick = () => {
        setOpened((opened) => !opened);
    };

    return (
        <>
            <button onClick={() => handleEditClick()}>
                <AiOutlineEdit></AiOutlineEdit>
            </button>
            {opened ? <EditModal setOpened={setOpened} todo={todo.todo}></EditModal> : null}
        </>
    );
};

export default EditTodo;
