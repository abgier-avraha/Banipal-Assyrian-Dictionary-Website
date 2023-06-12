import { Container } from "./Container";

export function HeroSection() {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="from-primary h-56 bg-gradient-to-br to-purple-400 blur-[106px] dark:from-blue-700"></div>
        <div className="h-32 bg-gradient-to-r from-cyan-400 to-sky-300 blur-[106px] dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative ml-auto pt-36">
          <div className="mx-auto text-center lg:w-2/3">
            <div className="flex flex-col gap-16">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white md:text-6xl xl:text-7xl">
                BANIPAL
                <br />
                Assyrian Dictionary
              </h1>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter a word in English...."
              />
              <div className="flex justify-center">
                <button className="bg-primary text-white font-bold py-4 px-8 rounded-full text-lg flex-1 md:flex-none">
                  Look Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
