import { useState } from "preact/hooks";
import { useEffect } from "preact/hooks";
import Button from "./button";
import Joke from "./joke";
import Clock from "./clock";
import { GenreSelector } from "./utility";
import BookList from "./book_list";
export function App() {
  const [count, setCount] = useState(0);
  const [jokeTime, setJokeTime] = useState(new Date().toLocaleTimeString());
  const [genre, setGenre] = useState(
    window.localStorage.getItem("genre") || "dad"
  );
  const [joke, setJoke] = useState("");

  const saveGenre = (genre) => {
    window.localStorage.setItem("genre", genre);
    setGenre(genre);
  };

  const getDadJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getChuckJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getJoke = () => {
    if (genre === "dad") {
      getDadJoke();
    } else {
      getChuckJoke();
    }
    setCount(count + 1);
    setJokeTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    // Fetch data from external API
    getJoke();
  }, []);

  return (
    <div class="flex flex-col justify-center items-center w-full h-screen gap-y-8 dark:bg-slate-600">
      <Clock />
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <GenreSelector genre={genre} setGenre={saveGenre} />
      <Joke joke={joke} />

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
      <Button count={count} getJoke={getJoke} />
      <BookList />
    </div>
  );
}
