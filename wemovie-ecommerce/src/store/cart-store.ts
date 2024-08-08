import { create } from 'zustand';

type Item = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type CartStore = {
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: number) => void;
};

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  };
});
