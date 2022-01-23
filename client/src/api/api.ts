import { BooksInterface } from "../components/book-view/book-view.component";

export const apiAdd = async (bookData: BooksInterface) => {
  return await fetch("http://127.0.0.1:5000/add", {
    method: "POST",
    // mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookData),
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};

export const apiDelete = async (bookId: number) => {
  return await fetch("http://127.0.0.1:5000/delete", {
    method: "POST",
    // mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: bookId,
    }),
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};

export const apiLogin = async (userData: any) => {
  return await fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    // mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};

export const apiRegister = async (userData: any) => {
  return await fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    // mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.status)
    .catch((err) => console.log(err));
};
