export async function GET(req, { params }) {
    const userId  = await params.userId;
    return new Response(JSON.stringify({ id : userId }));
}