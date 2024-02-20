'use client';
import { testConnect } from "@/app/lib/actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div >
        This is a fancy UI
        <button className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white" onClick={testConnect}>Test Connect</button>
      </div>
    </main>
  );
}
