import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      nome: "Lhaviyani Atoll",
      description:
          "Lorem ipsum dolor sit amet consectetur",
      price: 450.0,
      image:
          require('../../images/places/maldives.jpg'),
      locatizacao: {
          pais: "Maldivas",
          cidade: "Malé"
      },
  },
  {
      id: 2,
      nome: "Barcelona",
      description:
          "Lorem ipsum dolor sit amet consectetur",
      price: 450.0,
      image:
          require('../../images/places/barcelona.jpg'),
      locatizacao: {
          pais: "Espanha",
          cidade: "Barcelona"
      },
  },
  {
      id: 3,
      nome: "Buenos Aires",
      description:
          "Lorem ipsum dolor sit amet consectetur",
      price: 450.0,
      image:
          require('../../images/places/buenosaires.jpg'),
      locatizacao: {
          pais: "Argentina",
          cidade: "Buenos Aires"
      },
  },
  {
      id: 4,
      nome: "Hawaii",
      description:
          "Lorem ipsum dolor sit amet consectetur",
      price: 450.0,
      image:
          require('../../images/places/hawaii.jpg'),
      locatizacao: {
          pais: "Hawaii",
          cidade: "Hawaii"
      },
  },
  {
      id: 5,
      nome: "Seul",
      description:
          "Lorem ipsum dolor sit amet consectetur",
      price: 450.0,
      image:
          require('../../images/places/seul.jpg'),
      locatizacao: {
          pais: "Coreia do Sul",
          cidade: "Seul"
      },
  },
  {
      id: 6,
      nome: "Nova Iorque",
      description:
          "Lorem ipsum dolor sit amet consectetur",
      price: 450.0,
      image:
          require('../../images/places/newyork.jpg'),
      locatizacao: {
          pais: "Estados Unidos",
          cidade: "Nova Iorque"
      },
  },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
