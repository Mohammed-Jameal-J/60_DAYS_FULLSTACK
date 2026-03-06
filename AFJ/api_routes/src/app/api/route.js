export  function GET(req) {
  return new Response(JSON.stringify({ message: 'Hello, World!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
} 

export function POST(req) {
    return new Response(JSON.stringify({ message: 'Data received!' }), {
    });}