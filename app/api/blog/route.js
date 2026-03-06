import { NextResponse } from "next/server";
import { getBlogBySlug, getPostBySlug } from "@/lib/blogData";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const blogSlug = searchParams.get("slug");
  const postSlug = searchParams.get("post");

  if (!blogSlug) {
    return NextResponse.json(
      { error: "Blog slug is required" },
      { status: 400 },
    );
  }

  await new Promise((resolve) => setTimeout(resolve, 100));

  if (postSlug) {
    const post = getPostBySlug(blogSlug, postSlug);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ post });
  }

  const blog = getBlogBySlug(blogSlug);

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json({ blog });
}
