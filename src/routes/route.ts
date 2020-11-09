import { Router } from 'express'
const Routes = Router()

Routes.post('/', (request, response) => {
  const { name, email } = request.body
  const user = {
    name,
    email
  }
  return response.json(user)
})

export default Routes
