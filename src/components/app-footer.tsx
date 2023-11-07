import Image from "next/image";
import { Container } from "./container";
import githubDark from "../images/github-mark-white.png"
import githubLight from "../images/github-mark.png"

export function AppFooter() {
  return (
    <footer className="py-20 text-center">
      <Container>
        <div className="flex flex-row gap-4 justify-center items-center text-gray-600 dark:text-gray-300">
          <div>© 2023 Abgier Avraha</div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <Image className="inline dark:hidden" alt="banipal-logo" src={githubLight.src} height={20} width={20} />
            <Image className="hidden dark:inline" alt="banipal-logo" src={githubDark.src} height={20} width={20} />
            <a className="hover:underline" href="https://github.com/abgier-avraha/Banipal-Assyrian-Dictionary-Website/">
              GitHub Repo
            </a>
          </div>
        </div>
        <div className="text-gray-600 dark:text-gray-300">
          Definitions are acquired from{" "}
          <a className="hover:underline" href="https://dictionaryapi.dev/">
            dictionaryapi.dev
          </a>
        </div>
      </Container>
    </footer>
  );
}
