import { Router } from 'express'
import CreateUserService from '../services/CreateUserService'

const UserRouter = Router()

UserRouter.post('/register', async (request, response) => {
  try {
    const { email, name, password } = await request.body
    const CreateUser = new CreateUserService()
    const User = await CreateUser.execute({
      email,
      name,
      password
    })

    response.json(User)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default UserRouter
