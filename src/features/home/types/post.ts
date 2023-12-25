export type Post = {
    userId: number;
}&PostInput;

export type PostInput = {
    title: string;
    priority: number;
    techs: number[];
    content: string;
    getContent: string;
    needContent: string;
}