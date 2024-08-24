import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export const bookList = async (dataStore) => {
  await pb
    .collection("books")
    .getList(1, 50, { expand: "author" })
    .then((data) => {
      dataStore(data.items);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
