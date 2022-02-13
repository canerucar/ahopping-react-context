import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BooksContext } from "../App";

const Cart = () => {
  const context = useContext(BooksContext);

  const totalCartAmount = context.state.cart
    .reduce((total, book) => (total = total + book.price * book.count), 0)
    .toFixed(2);

  const totalCartCount = context.state.cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );

  return (
    <div className="wrapper">
      <h2>
        <Link to="/" className="basket">
          Kitap Listesi
        </Link>{" "}
        <span className="basket">
          Sepetim {totalCartCount > 0 ? totalCartAmount : ""}
        </span>
      </h2>
      {totalCartAmount > 0 ? (
        <h3>Toplam Sepet Tutarı: {totalCartAmount}</h3>
      ) : (
        "Sepetiniz Boş"
      )}

      {context.state.cart.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat : {book.prive}</p>
            <p>Toplam : {(book.price * book.count).toFixed(2)}</p>
            <p>Sepetinizde bu kitaptan toplam {book.count} adet var.</p>
            <button
              className="basket"
              onClick={() => context.decrease(book.id)}
            >
              -
            </button>
            <button
              className="basket"
              style={{ marginLeft: "5px", marginRight: "5px" }}
              onClick={() => context.removeFromCart(book.id)}
            >
              Sepetten Çıkar
            </button>
            <button
              className="basket"
              onClick={() => context.increase(book.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
