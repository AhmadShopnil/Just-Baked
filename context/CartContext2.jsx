// "use client"

// import { createContext, useContext, useState, useEffect } from "react"

// const CartContext = createContext()

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([])
//   const [subtotal, setSubtotal] = useState("৳ 0")

//   // Load cart from localStorage on initial render
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart")
//     if (savedCart) {
//       try {
//         const parsedCart = JSON.parse(savedCart)
//         setCartItems(parsedCart)
//         calculateSubtotal(parsedCart)
//       } catch (error) {
//         console.error("Failed to parse cart from localStorage:", error)
//       }
//     }
//   }, [])

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems))
//     calculateSubtotal(cartItems)
//   }, [cartItems])

//   const calculateSubtotal = (items) => {
//     // This is a simplified calculation - in a real app you'd parse the price strings properly
//     const total = items.reduce((sum, item) => sum + (item.quantity || 1), 0) * 230
//     setSubtotal(`৳ ${total}/-`)
//   }

//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((item) => item.id === product.id)
//       if (existingItem) {
//         return prevItems.map((item) =>
//           item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item,
//         )
//       } else {
//         return [...prevItems, { ...product, quantity: 1 }]
//       }
//     })
//   }

//   const removeFromCart = (productId) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
//   }

//   const updateQuantity = (productId, quantity) => {
//     if (quantity <= 0) {
//       removeFromCart(productId)
//       return
//     }

//     setCartItems((prevItems) => prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item)))
//   }

//   const clearCart = () => {
//     setCartItems([])
//   }

//   const value = {
//     cartItems,
//     subtotal,
//     addToCart,
//     removeFromCart,
//     updateQuantity,
//     clearCart,
//   }

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>
// }

// export function useCart() {
//   const context = useContext(CartContext)
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider")
//   }
//   return context
// }
