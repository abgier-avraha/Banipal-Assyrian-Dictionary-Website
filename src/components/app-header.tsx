import { Container } from "./container";

export function AppHeader() {
  return (
    <header>
      <nav className=" z-10 w-full">
        <Container>
          <div className="relative flex justify-between gap-6 py-2 md:gap-0 md:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <a
                href="#home"
                aria-label="logo"
                className="flex items-center space-x-2"
              >
                <div aria-hidden="true" className="flex space-x-1">
                  <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                  <div className="bg-primary h-6 w-2"></div>
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  Astrolus
                </span>
              </a>
            </div>
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
