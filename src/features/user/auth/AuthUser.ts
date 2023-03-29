import { supabase } from '@/supabase'
import { AuthUserRepository } from '../types/AuthUser'
import { Provider } from '@supabase/supabase-js'
import { pagesPath } from '@/lib/$path'

// implementsとは、インターフェースの型継承することを意味する
class AuthUserRepositoryImpl implements AuthUserRepository {
  private readonly authProvider: Provider = 'google'
  private readonly redirectPath: string = pagesPath.home.$url().pathname
  private readonly redirectTo: string =
    (process.env.NEXT_PUBLIC_SITE_URL as string) + this.redirectPath
  public signOut = async () => {
    await supabase.auth.signOut()
  }
  public signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: this.authProvider,
      options: {
        redirectTo: this.redirectTo,
      },
    })
  }
  public find = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    return user ?? undefined
  }

//   
  public getSession = async () => {
    const { data, error } = await supabase.auth.getSession()
    if (error) throw error
    return data.session
  }
}

export const authUserRepository = new AuthUserRepositoryImpl()
