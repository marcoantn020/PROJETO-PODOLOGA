import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { hash } from 'bcrypt'
import UserRepository from "../repositories/UserRepository";
import RoleRepository from "../repositories/RoleRepository";
import { decode } from "jsonwebtoken";


class UserController {

    static async create(request: Request, response: Response) {
        const userRepository = getCustomRepository(UserRepository)
        const roleRepository = getCustomRepository(RoleRepository)

        const { name, username, password, roles } = request.body

        const alreadyExistUser = await userRepository.findOne({ username })
        if (alreadyExistUser) {
            return response.status(400).json({ message: `User already exists!` })
        }

        const passwordHashed = await hash(password, 8)

        const existsRoles = await roleRepository.findByIds(roles)
        const user = userRepository.create({
            name, username, password: passwordHashed, roles: existsRoles
        })

        await userRepository.save(user)

        user.password = 'password hidden'

        return response.status(201).json(user)
    }

    static async showAll(request: Request, response: Response) {
        try {
            const userRepository = getCustomRepository(UserRepository)

            const patients = await userRepository.find()

            return response.status(201).json(patients)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    static async roles(request: Request, response: Response) {
        const authHeader = request.headers.authorization || ""
        const userRepository = getCustomRepository(UserRepository)

        const [, token] = authHeader?.split(" ");
        try {
            if (!token) {
                return response.status(401).json({ message: `Not authorized` })
            }

            const payload = decode(token)

            if (!payload) {
                return response.status(401).json({ message: `Not authorized` })
            }

            const user = await userRepository.findOne(payload?.sub, {
                relations: ["roles"]
            })

            const roles = user?.roles.map((r) => r.name)
            return response.status(200).json(roles)
        } catch (error) {
            return response.status(400).send()
        }
    }
}

export default UserController