import React, { useCallback, useEffect, useState } from 'react'
import BoxContainer from '../../components/BoxContainer'
import Menu from '../../components/Menu'

import moment, { Moment } from 'moment'

import styles from './schedule.module.css'
import buildCalendar from './buildCalendar'
import dayStyles, { beforeToday } from "./dayStyles";
import api from '../../services/api'
import { DataTasks } from '../../services/Interfaces'

const Schedule: React.FC = () => {


    const [calendar, setCalendar] = useState<Moment[] | any>([])
    const [value, setValue] = useState(moment())
    const now = moment(new Date()).format("DD/MM")
    const [dayMonth, setDayMonth] = useState(now)
    const [tasks, setTasks] = useState('')
    const [showTasks, setShowTasks] = useState<DataTasks[]>([] as DataTasks[])

    const dateFormat = dayMonth.split('/')
    const newDateFormat = `${dateFormat[0]}-${dateFormat[1]}`

    useEffect(() => {
        api.get('/tasks').then((response) => setShowTasks(response.data))

        api.get(`/tasks/${newDateFormat}`).then((response) => setShowTasks(response.data))

        setCalendar(buildCalendar(value))
    }, [value, newDateFormat])

    const handleSubmit = useCallback(async (event) => {
        event.preventDefault()
        if (ValidateDate() === false) {
            console.log("Não pode agendar tarefa para o mesmo dia ou dia que ja passou!")
            console.log("Mês deve ser o mesmo ou o próximo!")
            return
        }

        await api.post('/tasks', { tasks, dayMonth: newDateFormat })
            .then(() => console.log("Cadstro feito"))
            .catch(console.log)

        function ValidateDate() {
            const date = dayMonth.split('/')

            const dateCurrent = new Date()
            const month = dateCurrent.getMonth() + 1
            const day = dateCurrent.getDate()

            if (Number(date[0]) <= day && Number(date[1]) <= month) {
                return false
            }

            if (Number(date[1]) < month) {
                return false
            }
            return true
        }

    }, [tasks, dayMonth, newDateFormat])



    function currentMonthName() {
        const months = ["", "janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
        return months[Number(value.format("M"))]
    }

    function currentYear() {
        return value.format("YYYY")
    }

    function prevMonth() {
        return value.clone().subtract(1, "month")
    }

    function nextMonth() {
        return value.clone().add(1, "month")
    }

    function thisMonth() {
        return value.isSame(new Date(), "month")
    }

    return (
        <>
            <Menu />
            <BoxContainer>
                <div className={styles.box_container}>
                    <br />
                    <div className={styles.containerPrincipal}>
                        <div className={styles.calendar}>
                            <div className={styles.header}>
                                <div
                                    onClick={() => !thisMonth() && setValue(prevMonth())}
                                    className={styles.previous}
                                >
                                    {!thisMonth() ? String.fromCharCode(171) : null}
                                </div>
                                <div
                                    className={styles.current}
                                >
                                    {currentMonthName()} - {currentYear()}
                                </div>
                                <div
                                    onClick={() => setValue(nextMonth())}
                                    className={styles.next}
                                >
                                    {String.fromCharCode(187)}
                                </div>
                            </div>

                            <div className={styles.body}>
                                <div className={styles.dayNames}>
                                    {['Dom', 'Seg', 'Terç', "Qua", "Qui", "Sex", "Sáb"]
                                        .map((dayWeek, index) => (
                                            <div key={index} className={styles.week}> {dayWeek} </div>
                                        ))
                                    }
                                </div>
                                {calendar.map((week: any[], index: any) => (
                                    <div key={index}>
                                        { week.map((day: any, index: any) => (
                                            <div
                                                key={index}
                                                className={styles.day}
                                                onClick={() => {
                                                    !beforeToday(day) && setValue(day)
                                                    setDayMonth(day.format("DD/MM"))
                                                }}
                                            >
                                                <div className={dayStyles(day, value)} >
                                                    {day.format("D").toString()}
                                                </div>
                                            </div>
                                        ))
                                        }
                                    </div>)
                                )
                                }
                            </div>
                        </div>

                        <section className={styles.tasksOfDay}>
                            <form
                                method="post"
                                onSubmit={handleSubmit}
                            >

                                <input
                                    onChange={event => setTasks(event.target.value)}
                                    value={tasks}
                                    name="tasks"
                                    id="tasks"
                                    placeholder="Cadastre uma Tarefa"
                                    type="text" />

                                <input type="submit" value="cadastrar" name="register" id="register" />

                            </form>

                            <h3>Tarefas do Dia | {dayMonth}</h3>

                            <ul>
                                {showTasks.map(task => (
                                    <li key={task.id} >
                                        { task.tasks && task.tasks}
                                    </li>
                                ))}
                            </ul>

                        </section>
                    </div>
                </div>
            </BoxContainer>
        </>
    )
}

export default Schedule
