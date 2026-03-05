import prisma from "@/lib/prisma";

export default async function Posts() {
        const posts = await prisma.post.findMany({
                orderBy: {
                        createdAt: "desc"
                }
        })

    return (
        <div>
            {posts.map((post: any) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{new Date(post.createdAt).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    )
}