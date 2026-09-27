import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.name?.trim() || !body.email?.trim() || !body.portfolio?.trim()) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email);
    if (!emailOk) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }
    // TODO: send to applicant tracking / email
    console.log("[Careers] Application received:", {
      name: body.name,
      email: body.email,
      area: body.area,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
