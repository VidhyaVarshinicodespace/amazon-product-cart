
import { useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;

  const addToCart = () => setQuantity(q => q + 1);
  const removeOne = () => setQuantity(q => Math.max(0, q - 1));
  const resetCart = () => setQuantity(0);
  const toggleProduct = () => setShowProduct(s => !s);

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <div className="page-heading">
          <div>
            <p className="eyebrow">YOUR EVERYDAY ESSENTIALS</p>
            <h2>Find your perfect fit.</h2>
          </div>
          <span className="availability">● In stock</span>
        </div>

        <div className="shopping-layout">
          <div className="left-column">
            {showProduct && (
              <ProductCard
                productName={productName}
                price={price}
                quantity={quantity}
                selectedColor={selectedColor}
                deliveryCity={deliveryCity}
              />
            )}

            <section className="benefits">
              <h3>Made for everyday use</h3>
              <div className="benefit-list">
                <span>✧ Lightweight</span>
                <span>✓ Reliable</span>
                <span>↯ Long battery life</span>
              </div>
            </section>
          </div>

          <aside className="right-column">
            <section className="cart-panel">
              <p className="eyebrow">YOUR ORDER</p>
              <h2>Cart Summary</h2>

              <div className="cart-line">
                <span>Wireless Mouse</span>
                <strong>₹{price}</strong>
              </div>

              <div className="cart-line">
                <span>Quantity</span>
                <strong>{quantity}</strong>
              </div>

              <div className="cart-total">
                <span>Subtotal</span>
                <strong>₹{quantity * price}</strong>
              </div>

              <p className={`cart-message ${quantity > 0 ? "success" : ""}`}>
                {quantity === 0
                  ? "Your cart is waiting for its first item."
                  : "Your product is in the cart!"}
              </p>
            </section>

            <section className="controls-card">
              <h3>Quick Actions</h3>

              <div className="form-group">
                <label htmlFor="color">Product Colour</label>
                <select
                  id="color"
                  value={selectedColor}
                  onChange={e => setSelectedColor(e.target.value)}
                >
                  <option>Black</option>
                  <option>Blue</option>
                  <option>White</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="city">Delivery City</label>
                <input
                  id="city"
                  value={deliveryCity}
                  onChange={e => setDeliveryCity(e.target.value)}
                  placeholder="Enter your city"
                />
              </div>

              <button className="btn btn-primary" onClick={addToCart}>
                ＋ Add to Cart
              </button>

              <button
                className="btn btn-light"
                onClick={removeOne}
                disabled={quantity === 0}
              >
                − Remove One
              </button>

              <button className="btn btn-light" onClick={resetCart}>
                ↻ Reset Cart
              </button>

              <button className="btn btn-light" onClick={toggleProduct}>
                {showProduct ? "Hide Product" : "Show Product"}
              </button>
            </section>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
