import googleIcon from "../../assets/google.png";
import githubIcon from "../../assets/github.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { googleSignIn, user } = useAuth();
  const navigate = useNavigate();

  function handleGoogleSignIn() {
    if (!user) {
      googleSignIn()
        .then((res) => {
          toast.success("Login successful!");
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      toast.success("User Already Logged!");
    }
  }

  console.log(user);

  return (
    <section className="h-[calc(100vh-80px)] min-h-[450px] bg-gray-200 relative shape z-10">
      <div className="flex justify-center items-center  h-full max-w-screen-md mx-auto px-4 md:px-12">
        <div className="max-w-[500px] w-full bg-greenCs p-6 rounded-2xl">
          <img src="" alt="" />
          <h5 className="uppercase text-center mb-8">Login</h5>
          <form className="flex flex-col gap-4">
            <input
              className="px-2 py-3 rounded-md text-gray-900"
              placeholder="Enter Email"
              type="email"
              name="email"
              id=""
            />
            <input
              className="px-2 py-3 rounded-md text-gray-900"
              placeholder="Enter Password"
              type="password"
              name="password"
              id=""
              required
            />
            //border-orangeCs bg-amber-400 for input submit
            <input
              className="border bg-blue-600 border-blue-400 text-white shadow-md tracking-[1px] py-3 font-roboto  rounded-xl transition hover:rounded-full cursor-pointer font-semibold"
              type="submit"
              value="Submit"
            />
          </form>

          <div className="mt-4 py-3">
            <div className="relative">
              <p className="absolute -top-[] left-[50%] text-white font-bold bg-greenCs px-2 inline-block -translate-x-[50%] -translate-y-[50%]">
                Login with
              </p>
              <div className="bg-gray-300 h-[2px]"></div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex gap-2">
                <button
                  onClick={handleGoogleSignIn}
                  className="px-4 w-full text-xl font-medium border  shadow-md tracking-[1px] py-3 font-roboto  rounded-full transition flex gap-2 items-center justify-center"
                >
                  <img className="h-6 w-6" src={googleIcon} alt="" />
                  <span>Google</span>
                </button>
                <button className="px-4 w-full text-xl font-medium border   shadow-md tracking-[1px] py-3 font-roboto   rounded-full transition flex gap-2 items-center justify-center">
                  <img className="h-6 w-6" src={googleIcon} alt="" />
                  <span>Facebook</span>
                </button>
              </div>
              <button className="px-4 w-full text-xl font-medium border   shadow-md tracking-[1px] py-3 font-roboto   rounded-full transition  flex gap-2 items-center justify-center">
                <img className="h-6 w-6" src={googleIcon} alt="" />
                <span>Github</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
