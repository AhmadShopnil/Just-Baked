const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity } = action.payload;
      const existingItem = state.cart.find(item => item.id === product.id);

      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity }];
      }

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity < 1) return state;

      const updatedCart = state.cart.map(item =>
        item.id === id ? { ...item, quantity } : item
      );

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "CALCULATE_TOTALS": {
      const { total_item, total_amount } = state.cart.reduce(
        (acc, item) => {
          acc.total_item += item.quantity;
          acc.total_amount += item.price * item.quantity;
          return acc;
        },
        { total_item: 0, total_amount: 0 }
      );

      return {
        ...state,
        total_item,
        total_amount,
      };
    }

    default:
      return state;
  }
};
