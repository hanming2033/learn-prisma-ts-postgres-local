import { getUserId, IResolverMap } from '../utils'
import { PostQueryArgs } from '../generated/server-types'
import { Post, User } from '../generated/prisma'

export const Query: IResolverMap = {
  feed(_, __, ctx, info): Promise<Post[]> {
    return ctx.db.query.posts({ where: { isPublished: true } }, info)
  },

  drafts(_, __, ctx, info): Promise<Post[]> {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }
    return ctx.db.query.posts({ where }, info)
  },

  post(_, args: PostQueryArgs, ctx, info): Promise<Post> {
    return ctx.db.query.post({ where: { id: args.id } }, info)
  },

  me(_, __, ctx, info): Promise<User> {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  }
}
