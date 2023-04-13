import { PostColumn } from "./post"

export type UserColumn={
    id        :number
    name      :string
    email     :string
    password  :string
    createdAt :string
    posts     :PostColumn[]
}