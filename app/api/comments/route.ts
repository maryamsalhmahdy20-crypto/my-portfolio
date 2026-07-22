import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, comment } = body;

    // Validate inputs
    if (!name || !email || !comment) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create a Supabase client with the service role key (server-side only)
    const supabaseAdmin = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Insert the comment with approved=false
    const { data, error } = await supabaseAdmin
      .from("comments")
      .insert([
        {
          name: name.trim(),
          email: email.trim(),
          comment: comment.trim(),
          approved: false,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save comment" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Comment submitted successfully", comment: data?.[0] },
      { status: 201 }
    );
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

