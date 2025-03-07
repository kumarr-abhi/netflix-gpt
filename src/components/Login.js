import { useState, useRef } from "react";
import Header from "./Header";
import { checkEmail, checkPassword } from "../utils/validation";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);

  const handleButtonClick = () => {
    const emailValid = checkEmail(email.current.value);
    console.log(emailValid);
    setIsEmailValid(emailValid);
    const passwordValid = checkPassword(password.current.value);
    console.log(passwordValid);
    setIsPasswordValid(passwordValid);
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full h-full overflow-hidden">
        <img
          className="w-full h-full brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/DE-en-20250203-TRIFECTA-perspective_3f92d19d-f4ff-42bc-86fc-2ded722b337c_large.jpg"
          alt="Homepge Logo"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="min-h-[700px] mb-16 p-16 w-full max-w-md bg-black bg-opacity-70 rounded-lg text-white space-y-4"
        >
          <h1 className="font-bold text-5xl pb-5 text-gray-200">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-transparent border border-gray-500 rounded focus:outline-none focus:ring focus:ring-white"
            />
          )}
          <input
            onClick={() => setIsEmailValid(null)}
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="w-full p-3 bg-transparent border border-gray-500 rounded focus:outline-none focus:ring focus:ring-white"
          />
          {isEmailValid && (
            <div>
              <p className="text-red-500">{isEmailValid}</p>
            </div>
          )}
          <input
            onClick={() => setIsPasswordValid(null)}
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-transparent border border-gray-500 rounded focus:outline-none focus:ring focus:ring-white"
          />
          {isPasswordValid && (
            <div>
              <p className="text-red-500">{isPasswordValid}</p>
            </div>
          )}
          <button
            onClick={handleButtonClick}
            className="w-full p-3 bg-red-600 rounded hover:bg-red-700"
          >
            Sign In
          </button>
          <p className="text-center text-gray-400">OR</p>
          <button className="w-full p-3 bg-gray-700 rounded bg-opacity-60 hover:bg-gray-800">
            Use a Sign-In Code
          </button>
          <p className="text-center cursor-pointer hover:text-gray-300 hover:underline">
            Forgot password?
          </p>
          <div className="flex">
            <input
              type="checkbox"
              className="w-6 h-6 cursor-pointer rounded border-gray-500 hover:border-white hover:checked:bg-gray-300"
            />
            <p className="ml-2">Remember me</p>
          </div>
          {isSignInForm ? (
            <div className="flex">
              New to Netflix?
              <p
                className="ml-1 font-bold hover:cursor-pointer hover:underline"
                onClick={toggleSignInForm}
              >
                Sign up now
              </p>
            </div>
          ) : (
            <div className="flex">
              Already registered?
              <p
                className="ml-1 font-bold hover:cursor-pointer hover:underline"
                onClick={toggleSignInForm}
              >
                Sign in now
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
