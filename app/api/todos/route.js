import axios from "axios";

export async function POST(request) {
  const formData = await request.formData();
  const title = formData.get("title");
  const description = formData.get("description");

  await axios.post("http://localhost:5000/api/todos", { title, description });

  return Response.redirect("http://localhost:3000/");
}

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description } = await request.json();

  try {
    await axios.put(`http://localhost:5000/api/todos/${id}`, {
      title,
      description,
    });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Update error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
