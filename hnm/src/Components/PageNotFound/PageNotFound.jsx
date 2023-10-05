import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
   const router = useNavigate()

   useEffect(()=>{
      setTimeout(() => {
         router('/')
      }, 5000);
   })
   
   return(
      <div>
         <h1>Page Not Found</h1>
      </div>
   )
}

export default PageNotFound