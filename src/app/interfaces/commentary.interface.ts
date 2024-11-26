import { Topics } from "../enums/topics.enum";
import { CommentaryVotedByUser } from "./commentary-voted-by-user.interface";
import { User } from "./user.interface";

export interface Commentary {
  id: number;
  content: string;
  creationDate: Date;
  topic: Topics;
  user: User;
  commentariesVotedByUsers: CommentaryVotedByUser[];
}
