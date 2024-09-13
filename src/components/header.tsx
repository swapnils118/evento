import Link from "next/link";
import Logo from "./logo";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-6">
      <Logo />

      <nav>
        <ul className="flex gap-x-6 text-sm">
          {routes.map((routes) => (
            <li
              key={routes.path}
              className="text-white/50 hover:text-white transition"
            >
              <Link href={routes.path}>{routes.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
