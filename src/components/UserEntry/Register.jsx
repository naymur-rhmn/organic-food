import useAuth from "../../hook/useAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import googleIcon from "../../assets/google.png";
import githubIcon from "../../assets/github.png";
import fbIcon from "../../assets/fb.png";

const Register = () => {
  const { googleSignIn, user, emailSignUp } = useAuth();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    let password = null;
    const email = form.email.value;
    const pass1 = form.password2.value;
    const pass2 = form.password1.value;
    if (pass1 === pass2) {
      password = pass1;
    }

    emailSignUp(email, password).then((res) => {
      if (res?.user?.email) {
        form.reset();
        toast.success("Registration Success!!");
        navigate("/login");
      }
    });
  };

  return (
    <section className="h-[calc(100vh-80px)] min-h-[450px] bg-gray-200 relative shape-reg z-10">
      <div className="flex justify-center items-center  h-full max-w-screen-md mx-auto px-4 md:px-12">
        <div className="max-w-[500px] w-full bg-greenCs p-6 rounded-2xl">
          <img src="" alt="" />
          <h5 className="uppercase text-center mb-8">Register</h5>
          {/* form */}
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
              name="password1"
              required
            />
            <input
              className="px-2 py-3 rounded-md text-gray-900"
              placeholder="Re-enter Password"
              type="password"
              name="password2"
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
                Sign In with
              </p>
              <div className="bg-gray-300 h-[2px]"></div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex gap-2">
                <button
                  onClick={handleGoogleSignIn}
                  className="px-4 w-full text-xl font-medium border shadow-md tracking-[1px] py-2.5 font-roboto rounded-full transition flex gap-3 items-center justify-center hover:text-white  "
                >
                  <img className="h-6 w-6" src={googleIcon} alt="" />
                  <span>Google</span>
                </button>
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
            Already registered?{" "}
            <Link to={"/login"}>
              <span className="underline text-white">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
