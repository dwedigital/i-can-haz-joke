export default function Button({ count, getJoke }) {
  return (
    <button
      type="button"
      class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 text-3xl rounded-lg px-5 py-2.5 text-center me-2 mb-2"
      onClick={getJoke}
    >
      {count < 3 ? "🥳" : "🤣".repeat(count / 3)}
    </button>
  );
}
