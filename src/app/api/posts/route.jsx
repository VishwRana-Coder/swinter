import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import {Post} from '@/lib/model/posts'

export async function GET(){

    await mongoose.connect(connectionStr);
    const data = await Post.find()
    return NextResponse.json({posts:data})
}