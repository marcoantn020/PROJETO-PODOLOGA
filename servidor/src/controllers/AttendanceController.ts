import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import AttendanceRepository from "../repositories/AttendanceRepository"
import PatientRepository from "../repositories/PatientRepository"


class AttendanceController {

    static async create(request: Request, response: Response) {
        try {
            const attendanceRepository = getCustomRepository(AttendanceRepository)
            const patientRepository = getCustomRepository(PatientRepository)

            const data = request.body
            const patient_id = data.patient_id
            if (!patient_id) {
                return response.status(400).json({ message: `Column [patient_id] not found!` })
            }

            const existsPatient = await patientRepository.findOne(Number(patient_id))
            if (!existsPatient) {
                return response.status(400).json({ message: `Patient not found!` })
            }

            await attendanceRepository.create(data)
            const attendanceCreated = await attendanceRepository.save(data)
            return response.status(201).json(attendanceCreated)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    // http://localhost:4000/patient/patintId/attendance

    static async showOne(request: Request, response: Response) {
        const { patientId } = request.params
        try {
            const attendanceRepository = getCustomRepository(AttendanceRepository)
            const patientRepository = getCustomRepository(PatientRepository)

            const patient = await patientRepository.findOne({ where: { id: patientId } })
            if (!patient) {
                return response.status(400).json({ message: `Patient not found!` })
            }
            const attendancePatient = await attendanceRepository.findOne({
                where: { patient_id: patientId },
                order: { id: "DESC" }
            })

            return response.status(200).json(attendancePatient)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    static async show(request: Request, response: Response) {
        const { patientId } = request.params
        try {
            const attendanceRepository = getCustomRepository(AttendanceRepository)
            const patientRepository = getCustomRepository(PatientRepository)

            const patient = await patientRepository.findOne(patientId)
            if (!patient) {
                return response.status(400).json({ message: `Patient not found!` })
            }
            const attendancePatient = await attendanceRepository.find({ where: { patient_id: patientId } })

            return response.status(200).json(attendancePatient)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

}

export default AttendanceController