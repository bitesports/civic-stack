import { NextRequest, NextResponse } from "next/server";

interface ContributionData {
  name: string;
  email: string;
  phone?: string;
  country: string;
  type: "individual" | "company" | "investor";
  companyName?: string;
  fundName?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContributionData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.country || !data.type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate type-specific required fields
    if (data.type === "company" && !data.companyName) {
      return NextResponse.json(
        { error: "Company name is required for company submissions" },
        { status: 400 }
      );
    }

    if (data.type === "investor" && !data.fundName) {
      return NextResponse.json(
        { error: "Fund name is required for investor submissions" },
        { status: 400 }
      );
    }

    // Log the submission (in production, you'd save this to a database)
    console.log("New L2 States contribution submission:", {
      timestamp: new Date().toISOString(),
      ...data,
    });

    // Here you could:
    // 1. Save to a database (e.g., Supabase, PlanetScale, MongoDB)
    // 2. Send an email notification
    // 3. Add to a CRM
    // 4. Trigger a webhook

    // For now, we'll just return success
    return NextResponse.json({
      success: true,
      message: "Contribution submission received successfully",
    });
  } catch (error) {
    console.error("Error processing contribution submission:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Optionally handle GET requests
export async function GET() {
  return NextResponse.json({
    message: "L2 States Contribution API",
    methods: ["POST"],
    fields: {
      required: ["name", "email", "country", "type"],
      optional: ["phone", "companyName", "fundName", "message"],
      types: ["individual", "company", "investor"],
    },
  });
}

