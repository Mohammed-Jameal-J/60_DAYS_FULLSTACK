import prisma from "@/lib/prisma";

export default async function PostPage() {
    const posts = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    return (
        <div>
            {posts.map((post: any) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>{post.createdAt.toLocaleDateString()}</p>
                </div>
            ))}
        </div>

    )


}
