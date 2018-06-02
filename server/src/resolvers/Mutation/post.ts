import { getUserId, IContext } from '../../utils'

export const post = {
  async createDraft(_: any, { title, text }: any, ctx: IContext, info: any) {
    const userId = getUserId(ctx)
    return ctx.db.mutation.createPost(
      {
        data: {
          title,
          text,
          isPublished: false,
          author: {
            connect: { id: userId }
          }
        }
      },
      info
    )
  },

  async publish(_: any, { id }: any, ctx: IContext, info: any) {
    const userId = getUserId(ctx)
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId }
    })
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return ctx.db.mutation.updatePost(
      {
        where: { id },
        data: { isPublished: true }
      },
      info
    )
  },

  async deletePost(_: any, { id }: any, ctx: IContext, info: any) {
    console.log(info)
    const userId = getUserId(ctx)
    const postExists = await ctx.db.exists.Post({
      id,
      author: { id: userId }
    })
    if (!postExists) {
      throw new Error(`Post not found or you're not the author`)
    }

    return ctx.db.mutation.deletePost({ where: { id } })
  }
}
