// import { LoginError } from "../modules/login/error.ts";
export type LoginProps = {
//   error?: LoginError;
};

export default function LoginformPage({ error }: LoginProps) {
  // const [showPassword, setShowPassword] = useState(false);

  const errorMsg = error && error.code ? error.msg : null;
  return (
    <div
      class="flex h-screen"
    //   style={asset("background-image: url('/bg1.png')")}
    >
      {/* <!-- Left Pane --> */}
      {/* <div class="hidden lg:flex items-center justify-center flex-1 bg-[rgb(102,161,70)] text-black"> */}
      <div class="hidden lg:flex lg:flex-col items-center justify-center flex-1  text-black">
        {/* <img src={asset("/Untitled.png")} alt="logo"></img> */}
        <h1 class="text-3xl text-gray-800">
          Earn upto 10.5% returns with much lesser risk than{" "}
          <b class="text-[#66A146]">FD's</b>
        </h1>
      </div>
      {/* <div class="w-full bg-gradient-to-r to-white from-[rgb(102,161,70)] lg:w-1/2 flex items-center justify-center"> */}
      <div class="w-full lg:w-1/2 flex justify-center items-center bg-gradient-to-r">
        <div class="max-w-lg w-full p-6 border-2 border-gray-500 rounded-lg bg-white shadow-2xl shadow-lime-900">
          <h1 class="text-2xl font-normal mb-6 bg text-gray-600 text-center">
            INVESTOR LOGIN
          </h1>
          <div class="mt-4 flex flex-col lg:flex-row items-center justify-between">
            <div class="w-full lg:w-1/2 mb-2 lg:mb-0"></div>
          </div>



        <div class="mt-4 text-sm text-red-600 text-center">{errorMsg}</div>
          <form action="" method="POST" class="space-y-4">
            {/* <!-- Your form elements go here --> */}
            <div>
              <label
                for="username"
                class="block text-sm font-medium text-green-700"
              >
                Email
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder=""
                required
                class={errorMsg != "Login does not exist"
                  ? "mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  : "mt-1 p-2 w-full border-2 ring-2 ring-red-500 rounded-md focus:border-gray-200  focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300"}
             />
            </div>
            <div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-green-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="email"
                  name="password"
                  placeholder=""
                  required
                  class={errorMsg != "Login passowrd is wrong"
                    ? "mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                    : "mt-1 p-2 w-full border-2 ring-2 ring-red-500 rounded-md focus:border-gray-200  focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300"}
                />
              </div>
            </div>
            <div class="flex justify-between">
              <a href="/app/login/ExistingCustomerForm">
                <div class="text-sm text-[#66A146] cursor-pointer hover:text-black hover:underline ">
                  Verify Existing customer
                </div>
              </a>
              <a href="">
                <div class="text-sm  text-blue-800 cursor-pointer hover:text-black hover:underline ">
                  Forgot password ?
                </div>
              </a>
            </div>
            <div>
              <button
                type="submit"
                class="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-800  focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
              >
                Login
              </button>
            </div>
          </form>
          <div class="mt-4 text-sm text-gray-600 text-center">
            <p>
              Already have an account?{" "}
              <a
                href="/app/login/RegisterForm"
                class="text-black hover:underline"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}