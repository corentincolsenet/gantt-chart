import React, { useState } from "react";
import styled from "styled-components";
import GanttChart from "../components/GanttChart";
import Pagination from "../components/Pagination";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: space-between;
    overflow: hidden;
`;

const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-weight: 300px;
    margin: 20px 0 0 0;
    color: rgb(79 70 229);
    font-size: calc(3vw + 3vh + 2vmin);
`;

const Home = () => {
    const [view, setView] = useState('Day')

    return (
        <Container>
            <Title>Gantt Project</Title>
            <GanttChart view={view} />
            <Pagination 
                currentView={view}
                setView={(view) => setView(view)}
            />
        </Container>
    )
}

export default Home;
