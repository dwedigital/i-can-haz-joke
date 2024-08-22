export const GenreSelector = ({ genre, setGenre }) => {
  return (
    <form class="max-w-sm mx-auto">
      <label
        for="countries"
        class="block mb-2 font-medium text-center text-sm text-gray-900 dark:text-white"
      >
        Choose genre
      </label>
      <select
        id="countries"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setGenre(e.target.value)}
        value={genre}
      >
        <option value="dad">Dad</option>
        <option value="chuck">Chuck Norris</option>
      </select>
    </form>
  );
};
