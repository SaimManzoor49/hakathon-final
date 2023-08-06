import React, { createContext, useState } from 'react'
import fakeProdcts from '../data/fakeProducts'

export const Product=createContext();

export default function ProductsContextProvider(props) {

    const [itemId,setItemId]= useState({})


  return (
    <Product.Provider value={{itemId,setItemId}}>
      {props.children}
    </Product.Provider>
  )
}
