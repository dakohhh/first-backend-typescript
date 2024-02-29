import express from "express";

import { createUser, getUsersByEmail } from "../db/users";

import { authentication, random } from "../helpers";


export const signup = async (request: express.Request, response: express.Response) => {

    try {

        const { email, password, firstname, lastname } = request.body;

        if (await getUsersByEmail(email)) {

            return response.status(400).json({ message: "email already exists" })

        }

        const user = await createUser({
            firstname:firstname,
            lastname:lastname,
            email: email,
            password: password
            
        })

        return response.status(200).json({message: "user created successfully", data: user}).end()

    }
    catch (error) {
        console.log(error)
        return response.sendStatus(400)
    }
}


