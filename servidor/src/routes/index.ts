import bodyParser = require('body-parser')
import user from './userRoute'
import auth from './authRoute'
import permission from './permissionRoute'
import role from './roleRoute'
import patient from './patientRoute'
import pathology from './pathologyRoute'
import attendance from './attendanceRoute'
import tasks from './tasksRoute'


export default (app: any) => {
    app.use(
        bodyParser.json(),
        user,
        auth,
        permission,
        role,
        patient,
        pathology,
        attendance,
        tasks
    )
}
