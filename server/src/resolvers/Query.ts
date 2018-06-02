import { getUserId, Context } from '../utils'

export const Query = {
  feed(_: any, args: any, ctx: Context, info: any) {
    console.log(args)

    return ctx.db.query.posts({ where: { isPublished: true } }, info)
  },

  drafts(_: any, args: any, ctx: Context, info: any) {
    console.log(args)

    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id
      }
    }

    return ctx.db.query.posts({ where }, info)
  },

  post(_: any, { id }: any, ctx: Context, info: any) {
    return ctx.db.query.post({ where: { id } }, info)
  },

  me(_: any, args: any, ctx: Context, info: any) {
    console.log(args)
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  }
}
