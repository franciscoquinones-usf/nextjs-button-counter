"use client";
import Counter from "@/app/counter";

export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Simple Button Counter</h1>
      <Counter/>
      <p>Press 'Up Arrow' or 'Down Arrow' to adjust count as well.</p>
    </main>
  );
}