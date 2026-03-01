import { Post } from "@/types/post";
import Like from "@/features/post/component/Like";

import React from 'react'

const PostPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', { cache: 'no-store' })
    const post: Post = await res.json()
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
        <Like />
    </>
  )
}

export default PostPage