import { EntityRepository, Repository } from "typeorm";

import Patient from '../models/Patient'

@EntityRepository(Patient)
class PatientRepository extends Repository<Patient> {

}

export default PatientRepository