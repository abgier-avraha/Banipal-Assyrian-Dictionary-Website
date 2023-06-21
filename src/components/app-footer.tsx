import { Container } from "./container";

export function AppFooter() {
  return (
    <footer className="py-20 text-center">
      <Container>
        <div className="w-full space-x-12 text-gray-600 dark:text-gray-300">
          © 2023 Abgier Avraha
        </div>
        <div className="w-full space-x-12 text-gray-600 dark:text-gray-300">
          Meanings are delivered from{" "}
          <a className="hover:underline" href="https://dictionaryapi.dev/">
            https://dictionaryapi.dev/
          </a>
        </div>
      </Container>
    </footer>
  );
}
