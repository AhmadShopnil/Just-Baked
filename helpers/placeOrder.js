// app/actions/placeOrder.ts
"use server";

import { BASE_URL } from "./baseUrl";

export async function placeOrder(orderData) {
  try {
    const response = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || "Order failed");
    }

    return await response.json(); // success response
  } catch (error) {
    console.error("Error placing order:", error);
    throw new Error("Something went wrong.");
  }
}
