import useAuth from "../../hook/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import githubIcon from "../../assets/github.png";
import fbIcon from "../../assets/fb.png";
import GoogleSignIn from "./GoogleSignIn";

const Login = () => {
  const { emailSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    emailSignIn(email, pass)
      .then((res) => {
        toast.success("Login Success!");
        form.reset();

        navigate(location?.state?.from?.pathname || "/");
      })
      .catch((err) => toast.error("Error!"));
  }

  return (
    <section className="h-[calc(100vh-80px)] min-h-[450px] bg-gray-200 relative shape-log z-10">
      <div className="flex justify-center items-center  h-full max-w-screen-md mx-auto px-4 md:px-12">
        <div className="max-w-[500px] w-full bg-greenCs p-6 rounded-2xl">
          <img src="" alt="" />
          <h5 className="uppercase text-center mb-8">Login</h5>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="px-2 py-3 rounded-md text-gray-900"
              placeholder="Enter Email"
              type="email"
              name="email"
              required
            />
            <input
              className="px-2 py-3 rounded-md text-gray-900"
              placeholder="Enter Password"
              type="password"
              name="password"
              required
            />
            <input
              className=" bg-blue-600  text-white shadow shadow-blue-500 tracking-[1px] py-3 font-roboto  rounded-xl transition hover:rounded-full cursor-pointer font-semibold"
              type="submit"
              value="Submit"
            />
          </form>

          <div className="mt-4 py-3">
            <div className="relative">
              <p className="absolute -top-[] left-[50%] text-white font-medium text-sm bg-greenCs px-2 inline-block -translate-x-[50%] -translate-y-[50%]">
                Login with
              </p>
              <div className="bg-gray-300 h-[2px]"></div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex gap-2">
                <GoogleSignIn />
                <button className="px-4 w-full text-xl font-medium border shadow-md tracking-[1px] py-2.5 font-roboto rounded-full transition flex gap-3 items-center justify-center  hover:text-white">
                  <img className="h-7 w-7" src={fbIcon} alt="" />
                  <span>Facebook</span>
                </button>
              </div>
              <button className=" px-4 w-full text-xl font-medium border shadow-md tracking-[1px] py-2.5 font-roboto rounded-full transition flex gap-3 items-center justify-center  hover:text-white">
                <img className="h-7 w-7" src={githubIcon} alt="" />
                <span className=" pt-1">Github</span>
              </button>
            </div>
          </div>
          <p className="font-medium text-navyCs font-xs text-center">
            Have no Account?{" "}
            <Link to={"/register"}>
              <span className="underline text-white">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
