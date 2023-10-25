"use client";

import { useEffect } from "react";

export default function PageError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log("Error => ", error.message);
  }, [error.message]);

  return (
    <div>
      <h4>{error?.message}</h4>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
