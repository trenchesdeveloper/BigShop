import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoadingToRedirect = () => {
    const [count, setCount] = useState(3);

    let history = useHistory()

useEffect(()=>{
  const interval =  setInterval(()=> {
    setCount((count => --count))
  }, 2000)
// redirect when count = 0
  count === 0 && history.push('/')

  //clean Up
  return ()=>{
    clearInterval(interval)
  }
}, [count, history])


  return  (
      <div className="container p-5 text-center">
          <p>Redirecting you in {count} seconds</p>
      </div>
  )
};

export default LoadingToRedirect;
