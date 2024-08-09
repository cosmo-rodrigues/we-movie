import { create } from 'zustand';
import { MovieType } from './movies-store';

export interface GroupedMovie extends MovieType {
  quantity: number;
  subtotal: number;
}

type CartStore = {
  cart: GroupedMovie[];
  addToCart: (item: GroupedMovie) => void;
  emptyCart: () => void;
  removeFromCart: (id: number) => void;
};

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    emptyCart: () => set(() => ({ cart: [] })),
    removeFromCart: (id: number) =>
      set((state) => {
        const existingItem = state.cart.find((item) => item.id === id);

        if (!existingItem) return { cart: state.cart };

        if (existingItem.quantity > 1) {
          return {
            cart: state.cart.map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                    subtotal: item.subtotal - item.price,
                  }
                : item
            ),
          };
        } else {
          // Remove the item if only one exists
          return { cart: state.cart.filter((item) => item.id !== id) };
        }
      }),
  };
});
