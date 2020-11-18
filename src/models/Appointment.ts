import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'
// const { Entity, Column, PrimaryGeneratedColumn } = require('Typeorm')
// todas as funções do model, levam strings como parametros.
// import User from './Users'
@Entity('appointments')// conectando a tabela

class Appointment {
  @PrimaryGeneratedColumn('uuid')// gerando o id seguro
  id:string

  @Column('timestamp with time zone')
  date:Date

  @Column()
  providerID: string

  @UpdateDateColumn()
  updateAt:Date

  @CreateDateColumn()
  createAt: Date
}
export default Appointment
