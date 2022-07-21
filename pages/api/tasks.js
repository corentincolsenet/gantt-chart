import { tasks } from "../../data/tasks";

export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(tasks);
    } else if (req.method === "POST") {
        const { task, type } = req.body;
        const taskIndex = tasks.findIndex((t) => t.id === task.id);

        // if the taskIndex is found
        if (taskIndex !== -1) {
            switch(type) {
                case "updateProgress":
                    tasks[taskIndex].progress = task.progress;
                    break;
                case "updateDate":
                    tasks[taskIndex].start = task.start;
                    tasks[taskIndex].end = task.end;
                    break;
                default:
                    break;
            }
        }
        res.status(201).json(tasks)
    }
}
  