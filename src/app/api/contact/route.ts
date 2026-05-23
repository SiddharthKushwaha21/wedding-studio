export async function POST(req: Request) {
  try {
    const body = await req.json();

    return Response.json({
      success: true,
      message: "Form submitted successfully",
      data: body,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}