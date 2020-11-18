import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import auth from '../config/auth'

interface TokenPayload {
  exp:number,
  sub:string
}

export default function Authentication (request:Request, response:Response, next:NextFunction): void {
  const autHeader = request.headers.authorization

  if (!autHeader) {
    throw new Error('Token is invalid')
  }
  // Bearer aoksoakd
  const [, token] = autHeader.split(' ') // removendo a string do token

  try {
    const decoded = verify(token, auth.jwt.secret)
    console.log(decoded)
    const { sub } = decoded as TokenPayload
    request.user = {
      id: sub
    }
    return next()
  } catch {
    throw new Error('Invalid syntax JWT')
  }
}
