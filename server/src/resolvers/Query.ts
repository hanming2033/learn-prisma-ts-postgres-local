import { getUserId, IResolverMap } from '../utils'

export const Query: IResolverMap = {
  feed(_, __, ctx, info) {
    return ctx.db.query.posts({ where: { isPublished: true } }, info)
  },

  drafts(_, __, ctx, info) {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }
    return ctx.db.query.posts({ where }, info)
  },

  post(_, args: GQL.IPostOnQueryArguments, ctx, info) {
    return ctx.db.query.post({ where: { id: args.id } }, info)
  },

  me(_, __, ctx, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  }
}
