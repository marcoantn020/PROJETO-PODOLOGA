import { compare } from "bcrypt";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import UserRepository from "../repositories/UserRepository";


class AuthorizationController {

    static async create(request: Request, response: Response) {
        const { username, password } = request.body

        const userRepository = getCustomRepository(UserRepository)

        const user = await userRepository.findOne({ username }, { relations: ['roles'] })
        if (!user) {
            return response.status(400).json({ error: "User not found!" })
        }

        const matchPassword = await compare(password, user.password)
        if (!matchPassword) {
            return response.status(400).json({ error: "Incorrect username or/and password!" })
        }

        const roles = user.roles.map(role => role.name)

        const token = sign({ roles }, "798d5ed3c1068a9fba15b1fb3b26cda7", {
            subject: String(user.id),
            expiresIn: '1d'
        })

        return response.status(201).json({
            token,
            user
        })

    }

}

export default AuthorizationController