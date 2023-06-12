import { Container } from "./container";

export function AppFooter() {
  return (
    <footer className="py-20">
      <Container>
        <div className="flex w-full justify-center space-x-12 text-gray-600 dark:text-gray-300">
          © 2023 Abgier Avraha
        </div>
      </Container>
    </footer>
  );
}
