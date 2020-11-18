import { Router } from 'express'
import SessionAuthentication from '../services/CreateAuhenticationService'
const Authenticate = Router()

export default Authenticate.post('/', async (request, response) => {
  try {
    const { email, password } = request.body
    const userAuthenticated = new SessionAuthentication()// instanciar o service antes de excecutar, é sempre necessario

    const { user, token } = await userAuthenticated.execute({ // posso retirar qualquer informação do service depois que é instanciada na rota
      email,
      password
    })

    response.json({ user, token })
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})
