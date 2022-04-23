

function ValidateDate(date: any) {
    const dayMonth = ''
    date = dayMonth.split('/')

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

export { ValidateDate }