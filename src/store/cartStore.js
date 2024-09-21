import { create } from "zustand";

const useStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  updateFromCart: (product, action) => {
    set((state) => {
      const updatedCart = state.cart.map((item) => {
        if (item.id === product.id) {
          if (action === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === "decrease" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
      return { cart: updatedCart };
    });
  },
  clearCart: () => set({ cart: [] }),
}));

export default useStore;
