import Post from '@models/Post'
import connect from "@utils/monogdb"
import { NextResponse } from "next/server"

export const GET = async (request,{params}) => {
               const {id}=params;
               //fetching data
               try {
                              await connect();
                              const post = await Post.findById(id);
                              return new NextResponse(JSON.stringify(post), { status: 200 });
               }
               catch (error) {
                              return new NextResponse('Database Error', { status: 500 })
               }
}