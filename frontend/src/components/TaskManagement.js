import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';

function TaskManagement(userDetails) {
    const [taskDetails, setTaskDetails] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [colDefs, setColDefs] = useState([
        { field: "field name", editable: true },
        { field: "field description", editable: true }
      ]);

    useEffect (() => {
        try {
            taskDetails = axios.get("http://localhost:8000/core/task", userDetails.username)
        } catch {
            console.log("Couldn't retrive task details")
        }
        
    }, [] )

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/core/task", {taskName: taskName, taskDescription: taskDescription})
        } catch (error) {
            console.log(error)
        }
    }

    const handleSaveChanges = () => {

    }

    const handleDelete = () => {
        
    }

    return (
        <div className='h-full w-full flex flex-col gap-5'>
            <form className='flex flex-row gap-2 ' onSubmit={handleSubmit}>
                <TextField id='taskName' name="taskName" label="Task Name" value={taskName} />
                <TextField id='taskDescription' name="taskDescription" label="Task Description" value={taskDescription}/>
                <Button variant="contained" type="submit">Submit</Button>
            </form>
            <Button variant='contained' onClick={handleSaveChanges}>Save Modified Changes</Button>
            <Button variant='contained' onClick={handleDelete}>Delete Selected Rows</Button>
            <AgGridReact
                rowData={taskDetails}
                columnDefs={colDefs}
            />
        </div>
    )
}

export default TaskManagement;