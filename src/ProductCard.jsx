
import { useEffect } from "react";

function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  return (
    <section className="product-card">
      <div className={`product-art ${selectedColor.toLowerCase()}`}>
        <span className="art-label">SMART ACCESSORIES</span>

        <div className="mouse-shape">
          <div className="mouse-wheel" />
          <div className="mouse-seam" />
        </div>

        <span className="art-caption">Simple. Smooth. Wireless.</span>
      </div>

      <div className="product-info">
        <span className="category-tag">COMPUTER ACCESSORIES</span>
        <h2>{productName}</h2>

        <p className="product-description">
          A sleek, comfortable wireless mouse for work,
          study and everyday productivity.
        </p>

        <div className="product-price">
          ₹{price} <span>/ piece</span>
        </div>

        <div className="product-detail">
          <span>Selected Colour</span>
          <strong>{selectedColor}</strong>
        </div>

        <div className="product-detail">
          <span>Delivering to</span>
          <strong>{deliveryCity || "Enter your city"}</strong>
        </div>

        <div className="product-status">
          <span className="status-dot" />
          {quantity === 0
            ? "Ready to add to your cart"
            : `${quantity} item(s) added to your cart`}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
