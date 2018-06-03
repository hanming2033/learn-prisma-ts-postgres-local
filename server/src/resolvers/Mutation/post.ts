import { IResolverMap } from '../../utils'
// import { CreateDraftMutationArgs, PublishMutationArgs, DeletePostMutationArgs } from '../../generated/server-types'
// import { Post } from '../../generated/prisma'

export const post: IResolverMap = {
  // async createDraft(_, { title, text }: CreateDraftMutationArgs, ctx, info): Promise<Post> {
  //   const userId = getUserId(ctx)
  //   return ctx.db.mutation.createPost(
  //     {
  //       data: {
  //         title,
  //         text,
  //         isPublished: false,
  //         author: {
  //           connect: { id: userId }
  //         }
  //       }
  //     },
  //     info
  //   )
  // },
  // async publish(_, { id }: PublishMutationArgs, ctx, info): Promise<Post | null> {
  //   const userId = getUserId(ctx)
  //   const postExists = await ctx.db.exists.Post({
  //     id,
  //     author: { id: userId }
  //   })
  //   if (!postExists) {
  //     throw new Error(`Post not found or you're not the author`)
  //   }
  //   return ctx.db.mutation.updatePost(
  //     {
  //       where: { id },
  //       data: { isPublished: true }
  //     },
  //     info
  //   )
  // },
  // async deletePost(_, { id }: DeletePostMutationArgs, ctx, info): Promise<Post | null> {
  //   console.log(info)
  //   const userId = getUserId(ctx)
  //   const postExists = await ctx.db.exists.Post({
  //     id,
  //     author: { id: userId }
  //   })
  //   if (!postExists) {
  //     throw new Error(`Post not found or you're not the author`)
  //   }
  //   return ctx.db.mutation.deletePost({ where: { id } })
  // }
}
