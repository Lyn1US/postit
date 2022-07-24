import { PostItColorEnum } from "../enums/postit-color.enum";
import { CommentProxy } from "./comment.proxy";

export interface PostItProxy {
    
    id: number;
    title: string;
    annotation: string;
    color: string;
    comments?: CommentProxy[];
}