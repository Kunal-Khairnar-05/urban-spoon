"use client";

import { useState, useCallback } from "react";
import { useCart } from "@/lib/cartContext";

const AddToCartButton = ({ item }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState(null); // To track debounce timer
  const { addToCart } = useCart();

  const handleAddToCart = useCallback(() => {
    if (debounceTimeout) return; // Ignore clicks if debounce is active

    setIsAdding(true);

    // Add to cart logic
    addToCart({
      _id: item._id,
      name: item.name,
      price: item.price,
      image: item.image,
    });

    // UI feedback
    setIsAdding(false);
    setIsAdded(true);

    // Set debounce timer for 3 seconds
    const timeout = setTimeout(() => {
      setDebounceTimeout(null); // Reset debounce
    }, 3000);
    setDebounceTimeout(timeout);

    // Clear the "Added" status after 3 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  }, [debounceTimeout, item, addToCart]);

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding || debounceTimeout}
      className={`px-4 py-2 rounded transition-colors ${
        isAdding
          ? "bg-blue-300"
          : isAdded
          ? "bg-green-500"
          : "bg-blue-500"
      } text-white hover:bg-blue-600`}
    >
      {isAdding ? "Adding..." : isAdded ? "Added" : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
