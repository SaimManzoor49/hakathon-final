import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { PORT } from "../index";


const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {

    const getAllProducts = async ()=>{
      await axios.get(`${PORT}/api/v1/product/get-products`).then((res)=>{
        // console.log(res.data)
        setAllProducts(res.data.products)

      })

    }
    getAllProducts();

    const getAllCategories = async ()=>{
      await axios.get(`${PORT}/api/v1/category/get-category`).then((res)=>{
        console.log(res.data)
        setAllCategories(res.data.category)

      })

    }
    getAllCategories();



    const isUser = JSON.parse( localStorage.getItem('user'))||{}
    const isToken = localStorage.getItem('token')
    setToken(isToken)
  if(isUser.name){
    setUser(isUser)
  }else{
    setUser({})
  }
   
  }, []);




  return (
    <AuthContext.Provider value={{ user, setUser,token, setToken,allProducts, setAllProducts,allCategories, setAllCategories }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };
