import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'
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

  /* @ManyToOne(() => User)
  @JoinColumn({ name: 'providerID' })
  provider:User

  @UpdateDateColumn()
  updateAt:Date  */

  @CreateDateColumn()
  createAt: Date
}
export default Appointment
