import React, { useState } from "react";
import { baseUrl } from "../urls";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  
  const login = async () =>{
    console.log("Login Function Executed",formData);
    let responseData;
    await fetch(`${baseUrl}/login`,{
        method:"POST",
        headers:{
            Accept:"application/form-data",
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
        localStorage.setItem("auth-token",responseData.token);
        window.location.replace("/");
    }
    else{
        alert(responseData.errors)
    }
  }

  
  const signup = async () =>{
    console.log("Signup Function Executed",formData);
    let responseData;
    await fetch(`${baseUrl}/signup`,{
        method:"POST",
        headers:{
            Accept:"application/form-data",
            "Content-Type":"application/json",
        },
        body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
        localStorage.setItem("auth-token",responseData.token);
        window.location.replace("/");
    }
    else{
        alert(responseData.errors)
    }
  }

  return (
    <div className="w-full h-screen bg-indigo-700 mb-20 flex justify-center items-center">
      <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-max bg-white py-10 px-4 sm:px-8 md:px-10 lg:px-14">
        <h1 className="my-4 font-semibold text-center text-2xl">{state}</h1>

        <div className="flex flex-col gap-8 mt-8">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
              className="h-12 w-full pl-5 border border-black outline-none text-black font-medium"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Mail"
            className="h-12 w-full pl-5 border border-black outline-none text-black font-medium"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            className="h-12 w-full pl-5 border border-black outline-none text-black font-medium"
          />
        </div>

        <button onClick={()=>{state==="Login"?login():signup()}} className="w-full h-12 bg-rose-600 text-neutral-100 mt-7 border-none font-semibold text-xl cursor-pointer">
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="mt-5 text-black text-xl font-medium">
            Already have an account?
            <span onClick={()=>{setState("Login")}} className="text-red-600 cursor-pointer"> Login here</span>
          </p>
        ) : (
          <p className="mt-5 text-black text-xl font-medium">
            Create an account?
            <span onClick={()=>{setState("Sign Up")}} className="text-red-600 cursor-pointer"> Click here</span>
          </p>
        )}

        <div className="flex items-center mt-5 gap-4 text-black font-medium">
          <input type="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
