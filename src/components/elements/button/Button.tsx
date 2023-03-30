import { ComponentProps, ReactNode } from 'react'

type Button = {
  children: ReactNode
} & ComponentProps<'button'>

export const Button = ( props: Button) => {
  const {children,...buttonProps} = props
  return <button {...buttonProps} >{children}</button>
}
