import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (!existingItem) {
        // AICI E SCHIMBAREA: Luăm 'quantity' din payload sau punem 1 implicit
        // În cazul nostru, 'quantity' va reprezenta NUMĂRUL DE ZILE
        state.items.push({ 
            ...action.payload, 
            quantity: action.payload.quantity || 1 
        });
      }
    },

    removeItem: (state, action) => {
      const idToRemove = action.payload.id || action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;