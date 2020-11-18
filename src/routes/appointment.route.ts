import { Router } from 'express'
import { getCustomRepository } from 'typeorm'
import { parseISO } from 'date-fns'

import AppointmentsRepostiroy from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'
import AUTH from '../middleware/Authentication'
const CustomRouter = Router()

CustomRouter.use(AUTH)
CustomRouter.get('/appointments', (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepostiroy)
  const appointments = appointmentsRepository.find()

  return response.json(appointments)
})

CustomRouter.post('/', async (request, response) => {
  try {
    const { providerID, date } = request.body

    const parseDate = parseISO(date)

    const createAppointment = new CreateAppointmentService()

    const appointment = await createAppointment.execute({
      date: parseDate,
      providerID
    })
    return response.json(appointment)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

export default CustomRouter
