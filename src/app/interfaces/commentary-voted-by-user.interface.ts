export interface CommentaryVotedByUser {
  id: number;
  userId: string;
  commentaryId: number;
  vote: "down" | "up";
}
