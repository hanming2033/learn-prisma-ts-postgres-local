import * as jwt from 'jsonwebtoken'
import { Prisma } from './generated/prisma'

export interface Context {
  db: Prisma
  request: any
}

export function getUserId(ctx: Context) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    // investigate if this is correct
    if (!process.env.APP_SECRET) throw new AuthError()
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
    return userId
  }

  throw new AuthError()
}

export const createToken = (userId: any) => {
  // investigate if this is correct
  if (!process.env.APP_SECRET) return
  return jwt.sign({ userId, expiresIn: '1d' }, process.env.APP_SECRET)
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

// import * as jwt from 'jsonwebtoken'
// import { Prisma } from './generated/prisma'

// export interface Context {
//   db: Prisma
//   request: any
// }

// export function getUserId(ctx: Context, jwtToken) {
//   let token = ''
//   if (jwtToken) {
//     // jwtToken is passed as the param
//     // this is optional as client is already passing the token through header
//     token = jwtToken
//   } else {
//     // ctx.request contains the token from the header
//     const Authorization = ctx.request.get('Authorization')
//     token = Authorization.replace('Bearer ', '')
//   }
//   if (token) {
//     const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
//     return userId
//   }
//   throw new AuthError()
// }

// export const createToken = userId => jwt.sign({ userId: String, expiresIn: '1d' }, process.env.APP_SECRET)

// export class AuthError extends Error {
//   constructor() {
//     super('Not authorized')
//   }
// }
