import React, { useEffect, useState } from "react";
import { Gantt } from "gantt-task-react";
import styled from "styled-components";
import "gantt-task-react/dist/index.css";

const LoadingTasks = styled.p`
    margin: 30px auto;
`;

const GanttChart = ({ view }) => {
    const [tasks, setTasks] = useState([]);
    const [columnWidth, setColumnWidth] = useState("90")
    const updateTask = async (task, type) => {
        await fetch('/api/tasks', {
            method: 'POST',
            body: JSON.stringify({ task, type }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    // this useEffect fetch the data
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch('/api/tasks');
            const data = await response.json();

            setTasks(data);
        }

        fetchTasks();
    }, []);

    // depending of the size screen, it will disable or not the column width of the gantt chart
    useEffect(() => {
        const toggleColumnWidth = () => {
            if (window.innerWidth >= 1000)
                setColumnWidth("150px");
            else if (window.innerWidth >= 640)
                setColumnWidth("75px");
            else
                setColumnWidth("");
        }

        toggleColumnWidth();
        window.addEventListener('resize', toggleColumnWidth);

        return () => window.removeEventListener('resize', toggleColumnWidth);
    }, []);

    tasks.length && tasks.map(t => {
        t.start = new Date(t.start);
        t.end = new Date(t.end);
    })
    
    return (
        <>
            {tasks.length ? (
                <Gantt 
                    tasks={tasks}
                    viewMode={view}
                    onProgressChange={(task) => updateTask(task, "updateProgress")}
                    onDateChange={(task) => updateTask(task, "updateDate")}
                    rowHeight={40}
                    fontSize={12}
                    listCellWidth={columnWidth}
                />
            ) : (
                <LoadingTasks>Loading tasks...</LoadingTasks>
            )}
        </>
    )
}

export default GanttChart;