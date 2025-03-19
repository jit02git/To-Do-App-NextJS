import { NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/todos";

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const { title, description } = await req.json();

    const res = await axios.put(`${BASE_URL}/${id}`, { title, description });

    return NextResponse.json(res.data);
  } catch (error) {
    console.error("Error updating todo:", error);
    return NextResponse.json(
      { error: "Failed to update todo" },
      { status: 500 }
    );
  }
}
