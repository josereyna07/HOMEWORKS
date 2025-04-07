import { useState } from 'react';
import { BookStack } from './BookStack';

const stack = new BookStack();

const App = () => {
  const [books, setBooks] = useState(stack.print());
  const [form, setForm] = useState({
    name: '',
    isbn: '',
    author: '',
    editorial: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    stack.push({ ...form });
    setBooks(stack.print());
    setForm({ name: '', isbn: '', author: '', editorial: '' });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">📚 Book Stack</h1>
      <form onSubmit={handleAdd} className="space-y-2 mb-6">
        {['name', 'isbn', 'author', 'editorial'].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field}
            value={form[field]}
            onChange={handleChange}
            className="block border p-2 w-full"
          />
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Book</button>
      </form>

      <div>
        <h2 className="text-lg font-semibold mb-2">Stack (Top to Bottom):</h2>
        {books.map((book, i) => (
          <div key={i} className="border p-2 mb-2">
            <strong>{book.name}</strong> - ISBN: {book.isbn}, Author: {book.author}, Editorial: {book.editorial}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;