import Image from "next/image";
import Link from "next/link";
import head from "../images/head.png";
import { Container } from "./container";

export function AppHeader() {
  return (
    <header>
      <nav className="w-full">
        <Container>
          <div className="flex justify-between gap-6 py-2 md:gap-0 md:py-4">
            <Link
              href="/"
              aria-label="logo"
              className="flex items-center gap-4"
            >
              {/* TODO: replace with a neat icon? */}
              <Image alt="banipal-logo" src={head.src} height={40} width={40} />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                BANIPAL
              </span>
            </Link>
            {/* TODO: a link? */}
            {/* <div>
              <a
                href="#"
                className="bg-primary relative flex h-9 w-full items-center justify-center px-4  inset-0 rounded-full transition duration-300 sm:w-max"
              >
                <span className="relative text-sm font-semibold text-white">
                  Blog
                </span>
              </a>
            </div> */}
          </div>
        </Container>
      </nav>
    </header>
  );
}
