import prisma from "@/libs/db";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (id) {
        let event = await prisma.events.findFirst({
            where: {
                id: id.toString()
            }
        });

        if (!event) {
            return new Response(JSON.stringify({msg: "Event Not Found", success: false}), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return  new Response(JSON.stringify({msg: "Success", success: true, event: event}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } else {
        let events = await prisma.events.findMany();
        
        return  new Response(JSON.stringify({msg: "Success", success: true, events: events}), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export const dynamic = 'force-dynamic';