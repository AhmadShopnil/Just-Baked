"use client";

import { useState } from "react";
import Tabs from "./Tabs";
import CommentSection from "./CommentSection";

export default function Description({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-4 md:mt-0">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="rounded-md overflow-hidden shadow-md">
        <div className="px-4 py-6">
          {activeTab === "description" ? (
            <div className="prose max-w-none">
              <h2 className="font-semibold mb-2">Product Description</h2>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}

              {product?.description ? (
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: product?.description }}
                />
              ) : (
                <p>No Description </p>
              )}

              
            </div>
          ) : (
            <CommentSection productId={product?.id} />
          )}
        </div>
      </div>
    </div>
  );
}
