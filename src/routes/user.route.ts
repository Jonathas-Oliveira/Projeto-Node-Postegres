import { Router } from 'express'
import CreateUserService from '../services/CreateUserService'

const UserRouter = Router()

export default UserRouter.post('/', async (request, response) => {
  try {
    const { email, name, password } = await request.body
    const CreateUser = new CreateUserService()

    const user = await CreateUser.execute({
      email,
      name,
      password
    })

    response.json(user)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})
