import Header from "./Header";

const Login = () => {
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
        <form className="min-h-[700px] mb-16 p-16 w-full max-w-md bg-black bg-opacity-70 rounded-lg text-white space-y-4">
            <h1 className="font-bold text-5xl pb-5 text-gray-200">Sign In</h1>
          <input
            type="text"
            placeholder="Email or mobile number"
            className="w-full p-3 bg-transparent border border-gray-500 rounded focus:outline-none focus:ring focus:ring-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-transparent border border-gray-500 rounded focus:outline-none focus:ring focus:ring-white"
          />
          <button className="w-full p-3 bg-red-600 rounded hover:bg-red-700">
            Sign In
          </button>
          <p className="text-center text-gray-400">OR</p>
          <button className="w-full p-3 bg-gray-700 rounded bg-opacity-60 hover:bg-gray-800">
            Use a Sign-In Code
          </button>
          <p className="text-center cursor-pointer hover:text-gray-300 hover:underline">
            Forgot password?
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
