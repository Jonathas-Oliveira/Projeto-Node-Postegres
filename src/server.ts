import express from 'express'
import Routes from './routes/appointment.route'
import UserRoutes from './routes/user.route'

import './database'
const app = express()
app.use(express.json())

app.use('/appointments', Routes)
app.use('/users', UserRoutes)

app.listen(3333, () => console.log('Server Started on port 3333!'))
