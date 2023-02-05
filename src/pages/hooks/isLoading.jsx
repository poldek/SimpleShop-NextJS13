import { useEffect, useState } from "react";

export default function isLoading() {
   const [loading, setLoading ] = useState(false);
   
   useEffect(() => {
        setLoading(true);
   },[])

   return loading;
}