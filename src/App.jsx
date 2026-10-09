
import { useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;

  const addToCart = () => {
    setQuantity(quantity + 1);
  };

  const removeOne = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const resetCart = () => {
    setQuantity(0);
  };

  const toggleProduct = () => {
    setShowProduct(!showProduct);
  };

  return (
    <div>
      <Header />

      {showProduct && (
        <ProductCard
          productName={productName}
          price={price}
          quantity={quantity}
          selectedColor={selectedColor}
          deliveryCity={deliveryCity}
        />
      )}

      <div>
        <label htmlFor="color">Choose Colour: </label>
        <select
          id="color"
          value={selectedColor}
          onChange={(event) =>
            setSelectedColor(event.target.value)
          }
        >
          <option value="Black">Black</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
        </select>
      </div>

      <div>
        <label htmlFor="city">Delivery City: </label>
        <input
          id="city"
          type="text"
          value={deliveryCity}
          onChange={(event) =>
            setDeliveryCity(event.target.value)
          }
          placeholder="Enter delivery city"
        />
      </div>

      <div>
        <button onClick={addToCart}>
          Add to Cart
        </button>

        <button
          onClick={removeOne}
          disabled={quantity === 0}
        >
          Remove One
        </button>

        <button onClick={resetCart}>
          Reset Cart
        </button>

        <button onClick={toggleProduct}>
          {showProduct ? "Hide Product" : "Show Product"}
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
