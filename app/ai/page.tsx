import { Suspense } from "react";
import AIPageClient from "./page-client";

export default function AIPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AIPageClient />
    </Suspense>
  );
}
