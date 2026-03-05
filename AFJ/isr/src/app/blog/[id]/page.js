import React from 'react'

export const revalidate = 10
export const dynamicParams = true

export async function generateStaticParams() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
    return posts.map(post => ({
         id : String(post.id)
    }))
}

const IncrementalPage = async({params}) => {

  const {id}=await params
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
  return (
    <div>
         <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  )
}

export default IncrementalPage