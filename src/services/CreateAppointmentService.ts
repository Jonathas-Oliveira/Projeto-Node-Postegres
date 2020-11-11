import { startOfHour } from 'date-fns'
import { getCustomRepository } from 'typeorm'

import AppointmentsRepository from '../repositories/AppointmentsRepository'
import Appointment from '../models/Appointment'

interface Request {
  providerID: string,
    date: Date
}

class CreateAppointmentService {
  public async execute ({ date, providerID }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository)

    const appointmentDate = startOfHour(date)

    const findAppointmentsInSameDate = await appointmentsRepository.findByDate(
      appointmentDate
    )
    if (findAppointmentsInSameDate) {
      throw Error('This appointment is already broken')
    }

    const appointment = appointmentsRepository.create({
      providerID,
      date: date
    })

    await appointmentsRepository.save(appointment)

    return appointment
  }
}

export default CreateAppointmentService
