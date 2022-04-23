import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import PathologyRepository from "../repositories/PathologyRepository"
import PatientRepository from "../repositories/PatientRepository"


class PathologyController {

    static async create(request: Request, response: Response) {
        const data = request.body
        try {
            const pathologyRepository = getCustomRepository(PathologyRepository)
            const patientRepository = getCustomRepository(PatientRepository)

            const patient_id = data.patient_id
            if (!patient_id) {
                return response.status(400).json({ message: `Column [patient_id] not found!` })
            }

            const existsPatient = await patientRepository.findOne(Number(patient_id))
            if (!existsPatient) {
                return response.status(400).json({ message: `Patient not found!` })
            }

            const hasPathology = existsPatient.hasPathology
            if (hasPathology) {
                return response.status(400).json({ message: `This patient already pathology registered!` })
            }

            await pathologyRepository.create(data)
            const pathologyCreated = await pathologyRepository.save(data)
            await patientRepository.update(patient_id, { hasPathology: true })
            // console.log(pathologyCreated);
            console.log(data);
            return response.status(201).json(pathologyCreated)

        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    // http://localhost:4000/patient/patintId/pathology

    static async showOne(request: Request, response: Response) {
        const { patientId } = request.params
        try {
            const pathologyRepository = getCustomRepository(PathologyRepository)
            const patientRepository = getCustomRepository(PatientRepository)

            const patient = await patientRepository.findOne(patientId)
            if (!patient) {
                return response.status(400).json({ message: `Patient not found!` })
            }
            const pathologyPatient = await pathologyRepository.findOne({ where: { patient_id: patientId } })

            return response.status(200).json(pathologyPatient)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    static async update(request: Request, response: Response) {
        const { patientId } = request.params
        const data = request.body
        try {
            const pathologyRepository = getCustomRepository(PathologyRepository)
            const patientRepository = getCustomRepository(PatientRepository)

            const patient = await patientRepository.findOne(patientId)
            if (!patient) {
                return response.status(400).json({ message: `Patient not found!` })
            }
            await pathologyRepository.update(patientId, data)
            const pathologyPatient = await pathologyRepository.findOne(patientId)

            return response.status(200).json(pathologyPatient)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

}

export default PathologyController