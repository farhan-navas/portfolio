"use client";

import { useParams } from "next/navigation";

export default function Project() {
  const params = useParams();

  return (
    <div>
      <h1>Project: {params.projects}</h1>
    </div>
  );
}
