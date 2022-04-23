import moment, { Moment } from 'moment'
import { useState } from 'react'

import styles from "./schedule.module.css"

// export default function CalendarHeader({ value, setValue }) {
export default function CalendarHeader() {
    const [value, setValue] = useState(moment())
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
    )

}
