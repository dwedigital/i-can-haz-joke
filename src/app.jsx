import { useState } from "preact/hooks";
import { useEffect } from "preact/hooks";
import Footer from "./footer";

export function App() {
  const [count, setCount] = useState(0);
  const [jokeTime, setJokeTime] = useState(new Date().toLocaleTimeString());

  const [joke, setJoke] = useState("");

  const getJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJoke(data.joke);
        setCount(count + 1);
        setJokeTime(new Date().toLocaleTimeString());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // Fetch data from external API
    getJoke();
  }, []);

  const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    return (
      <span class="text-pretty text-5xl font-semibold dark:text-slate-100 text-green-800">
        {time}
      </span>
    );
  };

  return (
    <div class="flex justify-center flex-col items-center w-full h-screen gap-y-6 dark:bg-slate-600">
      <Clock />
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <blockquote class="text-xl italic font-semibold text-gray-900 dark:text-white px-10">
        <svg
          class="w-8 h-8 text-yellow-400 dark:text-slate-400 mb-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>

        <p>"{joke}"</p>
      </blockquote>
      <span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-200 border border-blue-400">
        <svg
          class="w-2.5 h-2.5 me-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
        </svg>
        {jokeTime}
      </span>
      <button
        type="button"
        class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 text-3xl rounded-lg px-5 py-2.5 text-center me-2 mb-2"
        onClick={getJoke}
      >
        {count < 3 ? "🥳" : "🤣".repeat(count / 3)}
      </button>

      <Footer />
    </div>
  );
}
