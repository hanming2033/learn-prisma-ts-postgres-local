import { IContext, IResolverMap } from '../utils'
import { AuthPayload as IAuthPayload } from '../generated/server-types'
import { User } from '../generated/prisma'

export const AuthPayload: IResolverMap = {
  user: async ({ user: { id } }: IAuthPayload, _, ctx: IContext, info): Promise<User | null> => {
    return ctx.db.query.user({ where: { id } }, info)
  }
}
