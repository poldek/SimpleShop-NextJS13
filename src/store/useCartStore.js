import { create } from 'zustand'
import produce from "immer";
import {persist, devtools} from "zustand/middleware";


let useCartStore = (set) => ({
  cart: [],
  cartSum: 0,
  cookies: false,

  /**
   * 
   * add postion cart 
   */
  addCartPosition: (addCart) => set((state) => ({ 
         cart: [ ...state.cart, addCart],
         cartSum : state.cartSum += addCart.qty * addCart.price,
  })),

  /**
   * 
   * clear cart
   */
  clearCart: () => set(
      produce((draft) => {
        while(draft.cart.length > 0) {
          draft.cart.pop();
          draft.cartSum = 0;
        }
      })
    ),

    /**
     * 
     * remove position from cart
     */
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
  
  /**
   * 
   * add new qty for exist position in cart 
   */
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

  /**
   * 
   * add qty 
   */
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
  
  /**
   * 
   * remove qty
   */  
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
  
  /**
   * 
   * Accept cookies  
   */
   acceptCookie: (action) => set((state) => ({ 
         cookies : state.cookies = action,
  })),

})



useCartStore = devtools(useCartStore);
useCartStore = persist(useCartStore, {name: 'user_shop'});
const usStore = create(useCartStore);

export default usStore;