"use server";

import { BASE_URL } from "./baseUrl";

export async function validateCoupon(code) {
  try {
    const response = await fetch(`${BASE_URL}/coupon/${code}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // to ensure fresh data
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || "Invalid coupon");
    }

    return await response.json(); // success response with coupon data
  } catch (error) {
    console.error("Error validating coupon:", error);
    throw new Error("Something went wrong.");
  }
}
