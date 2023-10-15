export type Post = {
  id: string
  text: string
  url: string
}

export type Comment = {
  id: string
  text: string
  postId: string
}
