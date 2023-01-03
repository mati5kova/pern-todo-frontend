import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import EditModal from './EditModal';

const EditTodo = (todo: any) => {
    const [lastEdit, setLastEdit] = useState({});
    const [opened, setOpened] = useState(false);

    const handleEditClick = () => {
        setOpened((opened) => !opened);
    };

    return (
        <>
            <button onClick={() => handleEditClick()}>
                <AiOutlineEdit></AiOutlineEdit>
            </button>
            {opened ? <EditModal setOpened={setOpened} todo={todo.todo} setLastEdit={setLastEdit}></EditModal> : null}
            <div className="hidden">{JSON.stringify(lastEdit)}</div>
        </>
    );
};

export default EditTodo;
