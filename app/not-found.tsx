import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="section-shell flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">404</p>
      <h1 className="section-title mt-5">This page wandered off.</h1>
      <Link className="button-primary mt-8" href="/">Back home</Link>
    </main>
  );
}
