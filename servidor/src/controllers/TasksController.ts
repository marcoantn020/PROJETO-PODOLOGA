import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import TasksRepository from "../repositories/TasksRepository"


class TasksController {

    static async create(request: Request, response: Response) {
        try {
            const tasksRepository = getCustomRepository(TasksRepository)
            const data = request.body
            const dayMonth = data.dayMonth
            if (!dayMonth) {
                return response.status(400).json({ message: `Column [dayMonth] not found!` })
            }

            const date = dayMonth.split('-')

            const dateCurrent = new Date()
            const month = dateCurrent.getMonth() + 1
            const day = dateCurrent.getDate()

            if (Number(date[0]) <= day && Number(date[1]) <= month) {
                return response.status(400).json({ message: `cannot schedule task for the same day!` })
            }

            if (Number(date[1]) < month) {
                return response.status(400).json({ message: `month must be the same or the next!` })
            }
            await tasksRepository.create(data)
            await tasksRepository.save(data)

            return response.status(201).json(data)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    static async show(request: Request, response: Response) {
        try {
            const dateCurrent = new Date()
            const month = dateCurrent.getMonth() + 1
            const day = dateCurrent.getDate()

            const dayValid = (day < 9) ? `0${day}` : day
            const monthValid = (month < 9) ? `0${month}` : month
            const dateExact = `${dayValid}-${monthValid}`

            const tasksRepository = getCustomRepository(TasksRepository)
            const tasks = await tasksRepository.find({
                where: {
                    dayMonth: String(dateExact),
                    checked: 0
                }
            })

            return response.status(200).json(tasks)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    static async showOne(request: Request, response: Response) {
        const { date } = request.params
        try {
            const tasksRepository = getCustomRepository(TasksRepository)
            const tasks = await tasksRepository.find({ where: { dayMonth: String(date) } })

            return response.status(200).json(tasks)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    static async update(request: Request, response: Response) {
        const { id } = request.params
        try {
            const checked = request.body
            const tasksRepository = getCustomRepository(TasksRepository)
            const existsTask = await tasksRepository.findOne(Number(id))
            if (!existsTask) {
                return response.status(400).json({ message: `checked fail!` })
            }
            await tasksRepository.update(id, checked)

            return response.status(200).json({ message: `checked ok!` })
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    static async destroy(request: Request, response: Response) {
        const { id } = request.params
        try {
            const tasksRepository = getCustomRepository(TasksRepository)
            const existsTask = await tasksRepository.findOne(Number(id))
            if (!existsTask) {
                return response.status(400).json({ message: `task not found!` })
            }
            await tasksRepository.delete(id)

            return response.status(200).json({ message: `tasks deleted!` })
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

}

export default TasksController