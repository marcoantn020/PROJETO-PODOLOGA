import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import AttendanceRepository from "../repositories/AttendanceRepository"
import PathologyRepository from "../repositories/PathologyRepository"
import PatientRepository from "../repositories/PatientRepository"


class PatientController {

    static async create(request: Request, response: Response) {
        const data = request.body
        try {
            const patientRepository = getCustomRepository(PatientRepository)

            await patientRepository.create(data)
            await patientRepository.save(data)

            console.log(data)
            return response.status(201).json(data)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    static async showAll(request: Request, response: Response) {
        try {
            const patientRepository = getCustomRepository(PatientRepository)

            const patients = await patientRepository.find({ order: { id: "DESC" } })

            return response.status(200).json(patients)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    static async showOne(request: Request, response: Response) {
        const { id } = request.params
        try {
            const patientRepository = getCustomRepository(PatientRepository)

            const patients = await patientRepository.findOne({
                where: { id: id },
                order: { id: "DESC" }
            })
            if (!patients) {
                return response.status(400).json({ message: `Patient not found!` })
            }

            return response.status(200).json(patients)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    static async update(request: Request, response: Response) {
        const { id } = request.params
        const data = request.body
        try {
            const patientRepository = getCustomRepository(PatientRepository)

            const patients = await patientRepository.findOne(id)
            if (!patients) {
                return response.status(400).json({ message: `Patient not found!` })
            }
            await patientRepository.update(id, data)
            const dataUpdate = await patientRepository.findOne(id)

            return response.status(200).json(dataUpdate)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    static async delete(request: Request, response: Response) {
        const { id } = request.params
        try {
            const patientRepository = getCustomRepository(PatientRepository)
            const pathologyRepository = getCustomRepository(PathologyRepository)
            const attendanceRepository = getCustomRepository(AttendanceRepository)

            const patients = await patientRepository.findOne(id)
            if (!patients) {
                return response.status(400).json({ message: `Patient not found!` })
            }
            await patientRepository.delete(id)
            await pathologyRepository.delete(id)
            return response.status(200).json({ message: `Patient with id ${id} deleted.` })
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }

    }
}

export default PatientController