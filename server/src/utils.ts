import * as jwt from 'jsonwebtoken'
import { Prisma } from './generated/prisma'

export interface IContext {
  db: Prisma
  request: any
}

export function getUserId(ctx: IContext) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    // this is to remove the possibly undefined error
    if (!process.env.APP_SECRET) return ''
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
    return userId
  }
  throw new AuthError()
}

export const createToken = (userId: string) => {
  // this is to remove the possibly undefined error
  if (!process.env.APP_SECRET) return ''
  return jwt.sign({ userId, expiresIn: '1d' }, process.env.APP_SECRET)
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

// This is important!!
// It types the whole resolver map and every resolver inside the resolver map
export interface IResolverMap {
  [key: string]: (parent: any, args: any, ctx: IContext, info: any) => any
}
