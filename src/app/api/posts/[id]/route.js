import Post from "@/models/posts.model";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { id } = params;
    try {
        await connect();
        const post = await Post.findById(id);
        
        return new NextResponse(JSON.stringify(post), {status:200})
    } catch (error) {
        return new NextResponse('database error', {status:500})

    }
}