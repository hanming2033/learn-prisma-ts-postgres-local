import * as bcrypt from 'bcryptjs'
import { IContext, createToken } from '../../utils'

export const auth = {
  async signup(_: any, args: any, ctx: IContext, info: any) {
    console.log(info)
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password }
    })

    return {
      token: createToken(user.id),
      user
    }
  },

  async login(_: any, { email, password }: any, ctx: IContext, info: any) {
    console.log(info)
    const user = await ctx.db.query.user({ where: { email } })
    if (!user) {
      return {
        error: {
          field: 'email',
          msg: 'No user found'
        }
      }
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      return {
        error: {
          field: 'password',
          msg: 'Invlide password'
        }
      }
    }

    return {
      payload: {
        token: createToken(user.id),
        user
      }
    }
  }
}
