// app/actions/placeOrder.ts
"use server";

export async function placeOrder(orderData) {
  try {
    const response = await fetch("http://justbakedbd.com/api/orders", {
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
