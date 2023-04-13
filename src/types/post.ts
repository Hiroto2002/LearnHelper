import { Tech } from "./tech"

export type PostColumn={
    id        :number  
    title     :string
    priority  :number
    content   :string
    getContent :string
    createdAt : string
    authorId  :number
    techs : Tech[]
    needContent: string[]
}