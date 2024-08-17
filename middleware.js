import { NextResponse } from "next/server";
import axios from "axios";
import { cookies } from "next/headers";

export async function middleware(request) {
  try {
    // Retrieve the token from cookies
    const token = cookies().get("token")?.value;

    if (!token) {
      // Redirect to login if token is missing
      return NextResponse.redirect(new URL("/log-in", request.url));
    }

    // Send the token to the backend for verification
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/verify`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    // If verification is successful, allow the request to continue
    if (response.status === 200) {
      return NextResponse.next();
    }
  } catch (error) {
    // Handle errors, such as token verification failure
    console.error("Token verification failed:", error.message);
  }

  // If token verification fails, redirect to the login page
  return NextResponse.redirect(new URL("/log-in", request.url));
}

// Apply middleware to the root route ("/") and its sub-paths
export const config = {
  matcher: ["/", "/admin-page"],
};
