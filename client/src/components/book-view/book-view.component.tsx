import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { FormEvent, useState, ChangeEvent } from "react";

import { apiAdd, apiDelete } from "../../api/api";

export interface BooksInterface {
  id: number;
  name: string;
  author: string;
  date: string;
}

export const BookView = () => {
  const [books, setBooks] = useState<BooksInterface[]>([]);

  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<BooksInterface>({
    id: 0,
    name: "",
    author: "",
    date: new Date().toDateString(),
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isAdding) {
      setFormData({
        ...formData,
        date: new Date().toDateString(),
        id: books.length + 1,
      });
      let response = await apiAdd(formData);
      if (response === 200) {
        setBooks([...books, formData]);
        setIsAdding(false);
      }
    } else {
      setIsAdding(true);
    }
  };

  const handleDelete = async (index: number) => {
    let newBooks = [...books];
    let response = await apiDelete(books[index].id);
    if (response === 200) {
      newBooks.splice(index, 1);
      setBooks(newBooks);
    }
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Date Published</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book, index) => {
            return (
              <TableRow key={book.id}>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.date}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(index)}>X</Button>
                </TableCell>
              </TableRow>
            );
          })}
          {isAdding ? (
            <TableRow>
              <TableCell>
                <TextField name="name" onChange={handleChange} />
              </TableCell>
              <TableCell>
                <TextField name="author" onChange={handleChange} />
              </TableCell>
              <TableCell>{new Date().toDateString()}</TableCell>
              <TableCell>
                <Button onClick={() => setIsAdding(false)}>X</Button>
              </TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
      <Button variant="contained" onClick={handleSubmit}>
        Add Book
      </Button>
    </>
  );
};
