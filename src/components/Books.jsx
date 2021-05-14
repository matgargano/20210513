import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Book from './Book';

function Books() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    // make an http request to get the books
    axios.get('http://csc225.mockable.io/books').then((response) => {
      setBooks(response.data);
    });
  }, []);

  if (books.length === 0) {
    return <p>Loading!</p>;
  }

  if (!!selectedBook) {
    return (
      <div>
        <Book id={selectedBook} />
        <button onClick={() => setSelectedBook(null)}>Reset</button>
      </div>
    );
  }

  return (
    <div>
      {books.map((book) => {
        return (
          <p key={book.id}>
            <button onClick={() => setSelectedBook(book.id)}>
              {book.title} - {book.author}
            </button>
          </p>
        );
      })}
    </div>
  );
}

export default Books;
