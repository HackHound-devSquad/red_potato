import { create } from "zustand";
import { Data } from "@/app/page";
export type Cart = {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  spicy: boolean;
  vegetarian: boolean;
  price: number;
  image: string;
  quantity: number;
};
type Store = {
  cart: Cart[];
  setData: (cart: Cart[]) => void;
  addData: (cart: Data) => void;
  removeData: (id: number) => void;
  removeItem: (id: number) => void;
};
export const useTomatoStore = create<Store>((set) => ({
  cart: [],
  setData: (cart) => set(() => ({ cart })),
  addData: (cart) =>
    set((state) => ({
      cart: state.cart.find((item) => item.id === cart.id)
        ? state.cart.map((item) =>
            item.id === cart.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...state.cart, { ...cart, quantity: 1 }],
    })),
  removeData: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  // if quantity is 1, remove the item
  removeItem: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity !== 0),
    })),
}));