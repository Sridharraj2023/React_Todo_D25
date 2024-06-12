import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from 'react-bootstrap/Button';

function Adduser() {
    const [allTodo, setTodo] = useState([]);
    const [name, setName] = useState("");
    const [des, setDes] = useState("");
    const [filter, setFilter] = useState('All');
    const [editIndex, setEditIndex] = useState(null);
    const [editName, setEditName] = useState("");
    const [editDes, setEditDes] = useState("");

    const handleSubmit = () => {
        let newTodoItem = {
            id: allTodo.length + 1, // Unique ID for each item
            title: name,
            description: des,
            status: 'Not Completed', // Initialize with 'Not Completed' status
        };

        let updatedArr = [...allTodo]; // Deep copy the array data
        updatedArr.push(newTodoItem); // Push the new item into the array
        setTodo(updatedArr);

        setName("");
        setDes("");
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditName(allTodo[index].title);
        setEditDes(allTodo[index].description);
    };

    const handleUpdate = () => {
        let updatedArr = [...allTodo];
        updatedArr[editIndex] = {
            ...updatedArr[editIndex],
            title: editName,
            description: editDes,
        };
        setTodo(updatedArr);
        setEditIndex(null);
        setEditName("");
        setEditDes("");
    };

    const handleDelete = (index) => {
        const updatedArr = allTodo.filter((_, i) => i !== index);
        setTodo(updatedArr);
    };

    const handleStatusChange = (index, status) => {
        const updatedArr = allTodo.map((todo, i) =>
            i === index ? { ...todo, status } : todo
        );
        setTodo(updatedArr);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filterTodos = () => {
        switch (filter) {
            case 'Completed':
                return allTodo.filter((todo) => todo.status === 'Completed');
            case 'Not Completed':
                return allTodo.filter((todo) => todo.status === 'Not Completed');
            default:
                return allTodo;
        }
    };

    return (
        <>
            <h1>My Todo App</h1>
            <label htmlFor="todoName">ToDo Name</label>
            <input
                id="todoName"
                placeholder='ToDo Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

                &nbsp; &nbsp;

            <input
                id="todoDes"
                placeholder='ToDo Description'
                value={des}
                onChange={(e) => setDes(e.target.value)}
            />

            &nbsp; &nbsp;

            <Button variant="success" type='button' onClick={handleSubmit}>Create ToDo</Button>

            <div>
                Filter: &nbsp;
                <select value={filter} name='filter' onChange={handleFilterChange}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Not Completed">Not Completed</option>
                </select>
            </div>

            <div className='container'>
                {filterTodos().map((item, index) => (
                    <div className='card' key={item.id}>
                        {editIndex === index ? (
                            <>
                                <h5>Edit Name:</h5>
                                <input
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                />
                                <h5>Edit Description:</h5>
                                <input
                                    value={editDes}
                                    onChange={(e) => setEditDes(e.target.value)}
                                />
                                <Button variant="primary" onClick={handleUpdate}>Update</Button>
                                <Button variant="secondary" onClick={() => setEditIndex(null)}>Cancel</Button>
                            </>
                        ) : (
                            <>
                                <h5>Name: {item.title}</h5>
                                <p>Description: {item.description}</p>
                                <select
                                    value={item.status}
                                    onChange={(e) => handleStatusChange(index, e.target.value)}
                                >
                                    <option value="Completed">Completed</option>
                                    <option value="Not Completed">Not Completed</option>
                                </select>
                                <Button variant="primary" onClick={() => handleEdit(index)}>Edit</Button>
                                <Button variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Adduser;
