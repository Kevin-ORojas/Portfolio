import { Github } from "lucide-react";

export default function Footer() {
  return (
    <main className="flex gap-4 p-2">
      <section className="hover:bg-indigo-500 text-white border-l-4 w-full cursor-pointer">
        <a
          href="https://github.com/Kevin-ORojas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </section>
    </main>
  );
}
