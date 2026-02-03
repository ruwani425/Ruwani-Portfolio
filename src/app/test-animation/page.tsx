"use client";

import BackgroundAnimation from "../../components/BackgroundAnimation";

export default function TestPage() {
  return (
    <div className="min-h-screen w-full bg-transparent">
      <h1 className="text-4xl font-bold text-center pt-20 relative z-50 text-green-500">
        Animation Test Page
      </h1>
      <BackgroundAnimation />
    </div>
  );
}
