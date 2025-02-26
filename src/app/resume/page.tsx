"use client";

// import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    const newTab = window.open("/resume/Farhan_Navas_Resume.pdf", "_blank");
    if (!newTab) {
      alert("Popup blocked! Click the link below to open the resume.");
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-lg font-semibold text-gray-700">
        If my resume PDF didn&apos;t open,{" "}
        <a
          href="/resume/Farhan_Navas_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 underline"
        >
          click here to open!
        </a>
      </p>
    </div>
  );
}
