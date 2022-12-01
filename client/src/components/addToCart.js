import React from "react";

const onSubmit = (event, product) => {
  const data = {
    productId: product._id
  }
  fetch("http://localhost:5000/cart", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  })
    .then((response) => console.log("response:", response))
    .catch((error) => console.log("AddToCart error:", error));
};

const AddToCart = (props) => {
  return (
    <div className="card__actions">
      <form  action='/cart' onSubmit={(event) => onSubmit(event, props.product)}>
        <button className="btn" type="submit">
          Add to Cart
        </button>
      </form>
    </div>
  );
};

export default AddToCart;