export async function GET(request: Request) {
    const response = new Response(JSON.stringify({msg: "Meow!"}), {
        status: 403,
        headers: { "Content-Type": "application/json" },
    });

    return response;
}

export const dynamic = 'force-dynamic';