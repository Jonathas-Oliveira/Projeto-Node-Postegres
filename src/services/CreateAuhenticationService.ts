import UserModel from '../models/Users'
import { getRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface Request {
    email:string,
    password:string
}
interface Response {
  token:string
  user:UserModel
}
class Authentication {
  public async execute ({ email, password }:Request): Promise<Response> {
    const UserRepository = getRepository(UserModel)

    const user = await UserRepository.findOne({ where: email })// comparando email
    if (!user) {
      throw new Error('Incorret email/password combination.')
    }
    const MatchPassword = compare(password, user.password)// comparando senha

    if (!MatchPassword) {
      throw new Error('Incorret email/password combination.')
    }
    const UserVerify = UserRepository.create({ // atualizando db
      email,
      password
    })
    const Userid = user.id
    await UserRepository.save(UserVerify)// salvando no banco de dados

    const token = sign({}, '01c46eff8755595abb44b091c73544be', {
      subject: Userid, // sempre o id
      expiresIn: '1d' // tempo de login do usuario
    }) // criptografando informações

    return {
      user,
      token
    }
  }
}

export default Authentication
