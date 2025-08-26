import { Github } from "lucide-react";

export default function Footer() {
  return (
    <main className="flex gap-4 p-2">
      <section className="hover:bg-indigo-500  cursor-pointer rounded-2xl ">
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
