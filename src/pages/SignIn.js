import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  return (
    <section className="container bg-gray-200 w-full md:w-1/3 mx-auto h-[89vh] pt-10">
      <div className="contaier w-4/5 bg-white h-auto text-center mx-auto">
        <div className="text-2xl px-3 py-3">Sign In</div>
        <div>
          <form action="#">
            <div>
              <div className="grid grid-rows-1 gap-1">
                <label htmlFor="email" className="text-start ml-12">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  id="email"
                  className="border-[1.5px] border-black p-1 rounded-md mx-12 "
                />
              </div>
              <div className="grid grid-rows-1 gap-1">
                <label htmlFor="password" className="text-start ml-12">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  id="password"
                  className="border-[1.5px] border-black p-1 rounded-md mx-12 "
                />
              </div>
              <button className="w-auto block h-auto bg-black text-white px-20 py-2 mx-auto rounded-full mt-5">
                Sign In
              </button>
              <label className="w-full text-end block text-sm cursor-pointer">
                Forget your password ?
              </label>
              <div className="p-2 md:p-4">
                <span>or</span>
              </div>
              <div className="px-4">
                <button className="w-full h-auto bg-cyan-300 text-black px-10 md:px-20 py-2 mx-auto rounded-full mt-5 mb-4">
                <Link to={"/signup"}>Create your account</Link>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
