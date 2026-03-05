import React from 'react'
import prisma from '@/lib/prisma'

async function createPost(data: FormData) {
    "use server"

    const title = data.get("title")?.toString() || ""
    const content = data.get("content")?.toString() || ""

    await prisma.post.create({
        data: {
            title,
            content
        }
    })
}

export default function NewPost() {
return (
    <form action={createPost}>
        <input type="text" name="title" placeholder='Title' />
        <textarea name="content" placeholder='Content' />
        <button type="submit">Create Post</button>
    </form>
)

}


