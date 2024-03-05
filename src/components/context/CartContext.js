import { createContext, useState } from "react";



export const CartContext = createContext({
    cart: [],
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}]);
          
        } else {
            
            console.error('el producto ya existe en el carrito')
        }
    }
const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
}

const clearCart = () => {
    setCart([])
}

const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
}

return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart}}
    >{children}</CartContext.Provider>
)
}


// import { createContext, useState, useEffect } from "react";

// export const CartContext = createContext({
//   cart: [],
//   total: 0,
//   totalQuantity: 0,
// });

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     // Calcular total y totalQuantity cada vez que cambia el carrito
//     const calculateTotal = () => {
//       const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//       const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
//       return { total, totalQuantity };
//     };

//     const { total, totalQuantity } = calculateTotal();
//     // Actualizar el estado con el nuevo total y totalQuantity
//     setCart((prevCart) =>
//       prevCart.map((item) => ({
//         ...item,
//         total,
//         totalQuantity,
//       }))
//     );
//   }, [cart]);

//   const addItem = (item, quantity) => {
//     if (!isInCart(item.id)) {
//       setCart((prev) => [...prev, { ...item, quantity }]);
//     } else {
//       console.error("El producto ya existe en el carrito");
//     }
//   };

//   const removeItem = (itemId) => {
//     const cartUpdated = cart.filter((prod) => prod.id !== itemId);
//     setCart(cartUpdated);
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   const isInCart = (itemId) => {
//     return cart.some((prod) => prod.id === itemId);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
