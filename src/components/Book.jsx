import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Book(props) {
  const { id } = props;
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get('http://csc225.mockable.io/books/' + id).then((response) => {
      setBook(response.data);
    });
  }, []);

  if (!book) {
    return <p>Loading Book ID {id}</p>;
  }

  return (
    <p>
      <img src={book.cover} alt={book.title} />
      {book.title} by {book.author} who wrote in {book.language}
    </p>
  );
}

export default Book;
