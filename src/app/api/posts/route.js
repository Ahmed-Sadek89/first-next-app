import connect from "@/utils/db";
import { NextResponse } from "next/server"
import Post from "@/models/posts.model";

export const GET = async (request) => {
    // fetch 
    try {
        await connect();
        const posts = await Post.find()

        return new NextResponse(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new NextResponse('error connecting', { status: 500 })
    }
}