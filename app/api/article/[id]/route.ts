import prisma from "@/libs/db";

export async function GET(request: Request, id: any) {

    let article = await prisma.article.findFirst({
        where: {
            OR: [
                {strId: id?.params?.id},
                {id: id?.params?.id}
            ]
        },
        select: {
            id: true,
            strId: true,
            title: true,
            tags: true,
            content: true,
            createdAt: true,
            updatedAt: true,
        }
    });

    const response = new Response(JSON.stringify({ msg: "Success", success: true, article: article }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });

    return response;
}

export const dynamic = 'force-dynamic';