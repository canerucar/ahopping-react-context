import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

const Products = (props) => {
  const context = useContext(BooksContext);
  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );
  return (
    <div className="wrapper">
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart" className="basket">
          Sepetim {totalCartCount > 0 ? totalCartCount : ""}
        </Link>
      </h2>
      {context.state.bookList.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar : {book.author}</p>
            <p>Fiyat : {book.price}</p>
            <button className="basket" onClick={() => context.addToCart(book)}>
              Sepete Ekle
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
