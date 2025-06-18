// app/actions/placeOrder.ts
"use server";

import { BASE_URL } from "./baseUrl";

export async function placeOrder(orderData, token, isLoggedIn) {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    let url = `${BASE_URL}/orders`;

    if (token) {
      url = `${BASE_URL}/orders/auth`;
      headers["Authorization"] = `Bearer ${token}`;
    }

    // console.log("token", token);

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || "Order failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Error placing order:", error);
    throw new Error("Something went wrong.");
  }
}
