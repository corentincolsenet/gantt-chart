import React from "react";
import styled from "styled-components";

const ViewsList = styled.ul`
    display: flex;
    position: relative;
    flex-wrap: wrap;
    row-gap: 20px;
    margin: 0 0 40px;
    justify-content: center;
`;

const ViewElement = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 2rem;
    border: solid;
    border-width: 2px;
    border-radius: 0.75rem;
    border-color: rgb(79 70 229);
    cursor: pointer;
    margin: 0 16px;
    padding: 0 4px;
    list-style: none;

    &:hover {
        background-color: rgb(79 70 229);
        color: rgb(255 255 255);
    }
`;

const Pagination = ({ currentView, setView }) => {
    const views = [
        "Quarter Day",
        "Half Day",
        "Day",
        "Week",
        "Month"
    ];

    return (
        <ViewsList>
            {views.map((view, viewIndex) => (
                <ViewElement
                    key={viewIndex}
                    onClick={() => setView(view)}
                    style={currentView === view ? {backgroundColor: 'rgb(79 70 229)', color: 'rgb(255 255 255)'} : {}}
                >
                    {view}
                </ViewElement>
            ))}
        </ViewsList>
    )
}

export default Pagination;