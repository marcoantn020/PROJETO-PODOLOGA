import React, { useCallback, useEffect, useState } from 'react';
import { DataTasks } from '../../services/Interfaces';
import api from '../../services/api';

import styles from './dashboard.module.css';

const TasksHome: React.FC = () => {
    const [tasks, setTasks] = useState<DataTasks[]>([] as DataTasks[]);

    const showTask = useCallback(async () => {
        await api.get("/tasks")
            .then(response => setTasks(response.data))
            .catch(console.log)
    }, []);

    const FinishTask = useCallback(async (id: number) => {
        await api.delete(`/tasks/${id}`)
            .then(() => console.log("Tarefa finalizada"))
            .catch(() => console.log("deu merda!"))
        showTask();
    }, [showTask]);

    useEffect(() => {
        showTask()
    }, [showTask]);

    return (
        <>
            <div className={styles.containerHome__tasks}>
                <h4>Tarefas do dia | 23/05</h4>
                <span>Concluir</span>

                <ol>
                    {tasks.map((tasks) => (
                        <li key={tasks.id}>
                            {tasks.tasks ? tasks.tasks : `Não há tarefas para hoje.`}
                            <input
                                key={tasks.id}
                                onClick={() => FinishTask(tasks.id)}
                                type="checkbox" />
                        </li>
                    ))}

                </ol>
            </div>
        </>
    )
}

export default TasksHome;
