import prisma from "@/libs/db";

export async function GET(request: Request) {

    let articles = await prisma.article.findMany({
        select: {
            id: true,
            strId: true,
            title: true,
            tags: true,
            createdAt: true,
        }
    });

    const response = new Response(JSON.stringify({msg: "Success", success: true, articles: articles}), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });

    return response;
}

export const dynamic = 'force-dynamic';