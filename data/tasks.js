export const tasks = [
    {
        start: new Date(2022, 6, 18),
        end: new Date(2022, 6, 23),
        name: 'Task 1',
        id: 'Task 1',
        type:'task',
        progress: 45,
        styles: { progressColor: 'rgb(79 70 229)', progressSelectedColor: 'rgb(79 70 229)' },
    },
    {
        start: new Date(2022, 6, 20),
        end: new Date(2022, 6, 22),
        name: 'Task 2',
        id: 'Task 2',
        type:'task',
        progress: 20,
        styles: { progressColor: 'rgb(79 70 229)', progressSelectedColor: 'rgb(79 70 229)' },
        dependencies: ["Task 1"]
    },
    {
        start: new Date(2022, 6, 21),
        end: new Date(2022, 6, 23),
        name: 'Task 3',
        id: 'Task 3',
        type:'task',
        progress: 70,
        styles: { progressColor: 'rgb(79 70 229)', progressSelectedColor: 'rgb(79 70 229)' },
        dependencies: ["Task 1"]
    },
];