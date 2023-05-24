import { Link } from "react-router-dom";
import { submitLogin } from "../controller/AuthController";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../controller/AuthContext";
import { useContext } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Rai-Rub-Jai
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  let [user, pass] = e.target;

                  let ok = await submitLogin({
                    username: user.value,
                    password: pass.value,
                  });

                  var err = document.getElementById("resErr");
                  if (ok.status != 200) {
                    err.innerHTML = "* Username or Password is wrong.";
                    err.style.visibility = "visible";
                  } else {
                    err.innerHTML = "";
                    err.style.visibility = "hidden";
                    handleLogin();
                    navigate("/", { replace: true });
                  }
                }}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div
                  id="resErr"
                  className="ml-2 text-gray-900 dark:text-red-500"
                  style={{ visibility: "hidden" }}
                ></div>
                <button
                  type="submit"
                  className="w-full dark:bg-gray-700 dark:hover:bg-gray-900 text-white bg-fruitsalad-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    to={"/signup"}
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
