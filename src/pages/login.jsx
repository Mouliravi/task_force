import React, { useState } from "react";
import Footer from "../components/footer";

const Login = () => {
  const [logged, setLogged] = useState(false);
  return (
    <>
      <div className="md:hidden">
        <img
          src={window.location.origin + "/landing.jpg"}
          width={1280}
          height={843}
          alt="Authentication"
          className=""
        />
        <img
          src={window.location.origin + "/landing.jpg"}
          width={1280}
          height={843}
          alt="Authentication"
          className=""
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
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
                "url(https://img.freepik.com/premium-vector/software-engineer-looking-job-vacancy-2d-vector-isolated-illustration_151150-12213.jpg?w=2000)",
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
        <div className="lg:p-8">
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
              />
              <p className="text-sm text-start text-muted-foreground">
                Enter your password
              </p>
              <input
                name="psswd"
                className="rounded-lg p-3"
                placeholder="your password"
              />
              {logged ? (
                <>
                  <p className="text-start text-sm text-muted-foreground">
                    Re-type your password
                  </p>
                  <input
                    name="psswd"
                    className="rounded-lg p-3"
                    placeholder="Again your password"
                  />
                </>
              ) : null}
              <button className="bg-indigo-600 p-3 mt-4 rounded-full">
                {logged ? "Sign Up" : "Login"}
              </button>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <a
                href="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
