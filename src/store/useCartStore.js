import { create } from 'zustand'
import produce from "immer";
import {persist, devtools} from "zustand/middleware";


let useCartStore = (set) => ({
  cart: [],
  cartSum: 0,

  addCartPosition: (addCart) => set((state) => ({ 
         cart: [ ...state.cart, addCart],
         cartSum : state.cartSum += addCart.qty * addCart.price,
  })),

  clearCart: () => set(
      produce((draft) => {
        while(draft.cart.length > 0) {
          draft.cart.pop();
          draft.cartSum = 0;
        }
      })
    ),

    removePositionCart: (payload) => set(
      produce((draft) => {
        const itemRemove = draft.cart.findIndex((el) => el.id === payload.id);
         if(draft.cart.length > 1 ) {
            //console.log(payload.sumPosition);
            cartSum : draft.cartSum -= payload.sumPosition
          } else {
            cartSum : draft.cartSum = 0;
          }
          draft.cart.splice(itemRemove,1);

      })
    ),  
  
 
  setQtyForExistPosition: (payload, qty) => set(
      produce((draft) => {
        const product = draft.cart.find((el) => el.id === payload.id);
        if(product) {
            let newQty = parseInt(payload.qty) + parseInt(qty);
            product.qty = 0;
            product.qty = newQty;
            cartSum : draft.cartSum = newQty * product.price
            //position sum
            product.sumPosition = 0;
            product.sumPosition = newQty * product.price;
        }
      })
    ),

  
  addQtyForPosition: (payload) => set(
      produce((draft) => {
        const product = draft.cart.find((el) => el.id === payload);
        if(product) {
            product.qty ++;
            cartSum : draft.cartSum += product.price
            //position sum
            product.sumPosition = 0;
            product.sumPosition = product.qty * product.price;
        }
      })
    ),

  removeQtyForPosition: (payload) => set(
    produce((draft) => {
      const product = draft.cart.find((el) => el.id === payload);
      if(product) {
        if(product.qty > 1){
          product.qty --;
          cartSum : draft.cartSum -= product.price
           //position sum
          product.sumPosition = 0;
          product.sumPosition = product.qty * product.price;
        } else {
          const itemRemove = draft.cart.findIndex((el) => el.id === payload);
          if(draft.cart.length > 1 ) {
            cartSum : draft.cartSum -= product.price
          } else {
            cartSum : draft.cartSum = 0;
          }
          draft.cart.splice(itemRemove,1);
        }
      }
    })
  ),
})

useCartStore = devtools(useCartStore);
useCartStore = persist(useCartStore, {name: 'user_cart'});
const usStore = create(useCartStore);

export default usStore;