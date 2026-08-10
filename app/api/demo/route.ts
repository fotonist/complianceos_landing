cat > app/api/demo/route.ts <<'EOF'
import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

type DemoRequest = {
  fullName?: string;
  businessEmail?: string;
  company?: string;
  jobTitle?: string;
  companySize?: string;
  country?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    if (!process.env.DATABASE_URL) {
      console.error("DATABASE_URL is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Database configuration is missing.",
        },
        { status: 500 }
      );
    }

    const sql = neon(process.env.DATABASE_URL);

    const body = (await request.json()) as DemoRequest;

    const fullName = body.fullName?.trim();
    const businessEmail = body.businessEmail?.trim().toLowerCase();
    const company = body.company?.trim() || null;
    const jobTitle = body.jobTitle?.trim() || null;
    const companySize = body.companySize?.trim() || null;
    const country = body.country?.trim() || null;
    const message = body.message?.trim() || null;

    if (!fullName) {
      return NextResponse.json(
        {
          success: false,
          message: "Full name is required.",
        },
        { status: 400 }
      );
    }

    if (!businessEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "Business email is required.",
        },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(businessEmail)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid business email.",
        },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO demo_requests (
        full_name,
        business_email,
        company,
        job_title,
        company_size,
        country,
        message,
        status
      )
      VALUES (
        ${fullName},
        ${businessEmail},
        ${company},
        ${jobTitle},
        ${companySize},
        ${country},
        ${message},
        'NEW'
      )
      RETURNING
        id,
        full_name,
        business_email,
        company,
        job_title,
        company_size,
        country,
        message,
        status,
        created_at
    `;

    return NextResponse.json(
      {
        success: true,
        message: "Demo request received successfully.",
        data: result[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Demo request error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit demo request.",
      },
      { status: 500 }
    );
  }
}
EOF
