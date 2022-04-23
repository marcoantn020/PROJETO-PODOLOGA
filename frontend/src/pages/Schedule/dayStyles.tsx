
import styles from './schedule.module.css'

function isSelected(day: any, value: any) {
    return value.isSame(day, "day")
}

export function beforeToday(day: any) {
    return day.isBefore(new Date(), "day")
}

function isToday(day: any) {
    return day.isSame(new Date(), "day")
}

export default function dayStyles(day: any, value: any) {
    if (isSelected(day, value)) return styles.selected
    if (beforeToday(day)) return styles.before
    if (isToday(day)) return styles.today
    return ""
}