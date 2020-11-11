import UserModel from '../models/Users'
import { getRepository } from 'typeorm'

interface Request {
    email:string,
    name:string,
    password:string
}

export default class UserService {
  public async execute ({ email, name, password }: Request): Promise<UserModel> {
    const UserRepository = getRepository(UserModel)

    const checkInfo = await UserRepository.findOne({
      where: { email }
    })
    if (checkInfo) {
      throw new Error(' Email already used')
    }
    const user = UserRepository.create({
      email,
      name,
      password
    })

    await UserRepository.save(user)

    return user
  }
}
