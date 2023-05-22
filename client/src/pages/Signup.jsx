import {
  submitRegister,
  confirmPassword,
  checkDupUser,
} from "../controller/AuthController";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  let location = useLocation();

  return (
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
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                let [user, pass, cpass] = e.target;

                await checkDupUser(user.value);

                let ok = await submitRegister(
                  {
                    username: user.value,
                    password: pass.value,
                  },
                  navigate
                );

                console.log(ok);
              }}
            >
              <div>
                <div className="block mb-2 text-sm font-medium">
                  <label
                    htmlFor="username"
                    className="text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <label
                    id="utxt"
                    className="ml-2 text-gray-900 dark:text-red-500"
                    style={{ visibility: "hidden" }}
                  >
                    * This username is already used
                  </label>
                </div>

                <input
                  onKeyUp={checkDupUser}
                  type="username"
                  name="username"
                  id="user"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
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
                  onKeyUp={confirmPassword}
                  type="password"
                  name="password"
                  id="pass"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  onKeyUp={confirmPassword}
                  type="password"
                  name="confirm-password"
                  id="cpass"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div
                id="txt"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-red-500"
                style={{ visibility: "hidden" }}
              >
                * Password is not match
              </div>

              <button
                type="submit"
                id="submit"
                className="w-full dark:bg-gray-700 dark:hover:bg-gray-900 text-white bg-fruitsalad-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  to={"/login"}
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
