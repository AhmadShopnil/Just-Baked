import { Suspense } from "react";
import ThankYouPage from "./ThankYouPage";


export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ThankYouPage />
    </Suspense>
  );
}
