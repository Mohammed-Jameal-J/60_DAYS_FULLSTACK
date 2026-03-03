import prisma from "@/lib/prisma";

export default function NewPostPage() {
  async function createPost(data: FormData) {
    "use server";
    const title = data.get("title") as string;
    const content = data.get("content") as string;
    await prisma.post.create({
      data: {
        title,
        content,
      },
    });
  }

    return (
        <form action={createPost} className="flex flex-col gap-4">
            <input
                type="text"
                name="title"
                placeholder="Title" required
                className="border border-gray-300 rounded p-2"
            />
            <textarea
                name="content"
                placeholder="Content" required
                className="border border-gray-300 rounded p-2"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white rounded p-2"
            >
                Create Post
            </button>
        </form>
    );
}

