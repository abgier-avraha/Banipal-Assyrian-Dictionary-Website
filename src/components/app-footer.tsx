import Image from "next/image";
import { Container } from "./container";
import githubDark from "../images/github-mark-white.png"
import githubLight from "../images/github-mark.png"
import mailDark from "../images/mail-white.png"
import mailLight from "../images/mail.png"

export function AppFooter() {
  return (
    <footer className="py-20 text-center">
      <Container>
        <div className="flex flex-row gap-2 justify-center items-center text-gray-600 dark:text-gray-300">
          <div>Provide feedback to</div>
          <div className="flex flex-row gap-2 justify-center items-center">
            <Image className="inline dark:hidden" alt="banipal-logo" src={mailLight.src} height={20} width={20} />
            <Image className="hidden dark:inline" alt="banipal-logo" src={mailDark.src} height={20} width={20} />
            <a className="hover:underline" href="mailto:ramin12_79@yahoo.com">ramin12_79@yahoo.com</a>
          </div>
        </div>

        <div className="flex flex-row gap-2 justify-center items-center text-gray-600 dark:text-gray-300">
          <div>Website © 2023 Abgier Avraha</div>
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
