import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
// const { Entity, Column, PrimaryGeneratedColumn } = require('Typeorm')
// todas as funções do model, levam strings como parametros.
@Entity('appointments')// conectando a tabela

class Appointment {
  @PrimaryGeneratedColumn('uuid')// gerando o id seguro
  id:string

  @Column()
  provider:string

  @Column('timestamp with time zone')
  date:Date
}
export default Appointment
