import React, { useState, useEffect } from "react";
import { authlogin, authsignup } from "../lib/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const handleLogin = async (userdata) => {
    console.log(userdata);
    const data = await authlogin(userdata.email, userdata.password);
    if (data === undefined) {
      setShow(true);
    }
    if (data && data !== null) {
      localStorage.setItem("username", data);
      setSaved(true);
    }
  };

  const handleSignup = (userdata) => {
    const data = authsignup(
      userdata.email,
      userdata.password,
      userdata.repassword
    );
    console.log(data);
  };

  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [show, setShow] = useState("");
  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user !== null) {
      navigate("/");
    }
    setShow("");
  }, [saved, navigate]);

  const [logged, setLogged] = useState(false);
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
    repassword: "",
  });

  return (
    <>
      <div className="container relative h-3/5 lg:h-[750px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <button
          className="absolute right-4 top-4 md:right-8 md:top-8"
          onClick={() => {
            setLogged(!logged);
          }}
        >
          {logged ? "Login" : "Sign Up"}
        </button>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div
            className="absolute inset-0 bg-cover flex justify-start"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-vector/abstract-global-communications-background_1048-12297.jpg)",
            }}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Pattathari
          </div>
        </div>
        <div className="p-12 mt-16 lg:m-0 lg:p-8 md:h-1/2">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-3 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                {logged ? "Create your Account" : "Log into your Account"}
              </h1>
              <p className="text-start ext-sm text-muted-foreground">
                Enter your Email
              </p>
              <input
                name="mail"
                className="rounded-lg p-3"
                placeholder="your email"
                onChange={(e) => {
                  setUserdata({ ...userdata, email: e.target.value });
                }}
              />
              {show && show ? (
                <p className="text-xs text-red-600 text-center text-muted-foreground">
                  Check your email!
                </p>
              ) : null}
              <p className="text-sm text-start text-muted-foreground">
                Enter your password
              </p>
              <input
                name="psswd"
                className="rounded-lg p-3"
                placeholder="your password"
                type="password"
                onChange={(e) => {
                  setUserdata({ ...userdata, password: e.target.value });
                }}
              />
              {show && show ? (
                <p className="text-xs text-red-600 text-center text-muted-foreground">
                  Check your password!
                </p>
              ) : null}
              {logged ? (
                <>
                  <p className="text-start text-sm text-muted-foreground">
                    Re-type your password
                  </p>
                  <input
                    name="psswd"
                    className="rounded-lg p-3"
                    placeholder="Again your password"
                    type="password"
                    onChange={(e) => {
                      setUserdata({ ...userdata, repassword: e.target.value });
                    }}
                  />
                </>
              ) : null}
              <button
                className="bg-indigo-600 p-3 mt-4 rounded-full"
                onClick={() => {
                  logged ? handleSignup(userdata) : handleLogin(userdata);
                }}
              >
                {logged ? "Sign Up" : "Login"}
              </button>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <span className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </span>
              .
            </p>
            <p className="text-[13px] text-center">
              Try! admin@gmail.com,admin@123
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
