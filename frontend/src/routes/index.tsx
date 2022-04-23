import { Route, Switch } from "react-router";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import PatientData from "../pages/ParientData";
import PathologyEdit from "../pages/PathologyEdit";
import PatientEdit from "../pages/PatientEdit";
import Schedule from "../pages/Schedule";
import Site from "../pages/Site";
import Attendance from "../pages/Attendance";
import Pathology from "../pages/Pathology";
import Patients from "../pages/Patients";
import AuthRoutes from "./AuthRoutes";
import Error from "../pages/Error";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Site} />
            <Route path="/login" component={Login} />


            <AuthRoutes path="/dashboard" component={Dashboard} role="ADMIN,USER_PADRAO" />
            <AuthRoutes path="/patient_register" component={Patients} role="ADMIN,USER_PADRAO" />
            <AuthRoutes path="/patient/:id" component={PatientEdit} role="ADMIN,USER_PADRAO" />
            <AuthRoutes path="/patient_data/:id" component={PatientData} role="ADMIN,USER_PADRAO" />
            <AuthRoutes path="/pathology_register" component={Pathology} role="ADMIN,USER_PADRAO" />
            <AuthRoutes path="/pathology/:id" component={PathologyEdit} role="ADMIN,USER_PADRAO" />
            <AuthRoutes path="/attendance_register" component={Attendance} role="ADMIN" />
            <AuthRoutes path="/schedule" component={Schedule} role="ADMIN,USER_PADRAO" />

            <Route><Error /></Route>
        </Switch>
    )
}

export default Routes