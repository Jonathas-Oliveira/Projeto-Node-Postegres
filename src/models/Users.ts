import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm'
// const { Entity, Column, PrimaryGeneratedColumn } = require('Typeorm')
// todas as funções do model, levam strings como parametros.
@Entity('users')// conectando a tabela

class Users {
  @PrimaryGeneratedColumn('uuid')// gerando o id seguro
  id:string

  @Column()
  name:string

  @Column()
  email:string

  @Column()
  password:string

  @UpdateDateColumn()
  updateat:Date

  @CreateDateColumn()
  createat: Date
}
export default Users
