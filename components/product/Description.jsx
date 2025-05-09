"use client";

import { useState } from "react";
import Tabs from "./Tabs";
import CommentSection from "./CommentSection";

export default function Description() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="rounded-md overflow-hidden shadow-md">
        <div className="px-4 py-6">
          {activeTab === "description" ? (
            <div className="prose max-w-none">
              <h2 className="font-semibold mb-2">Product Description</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h2 className="font-semibold my-2">More Info</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          ) : (
            <CommentSection />
          )}
        </div>
      </div>
    </div>
  );
}
