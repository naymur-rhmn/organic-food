import useAuth from "../../hook/useAuth";
import { json, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import googleIcon from "../../assets/google.png";

const GoogleSignIn = () => {
  const { googleSignIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleGoogleSignIn() {
    if (!user) {
      try {
        const res = await googleSignIn();
        toast.success("Login successful!");

        const userData = {
          name: res?.user?.displayName,
          email: res?.user?.email,
          photo: res?.user?.photoURL || null,
        };

        const response = await fetch(
          "https://organic-food-server-beige.vercel.app/user",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        // if (!response.ok) {
        //   throw new Error("Network response was not ok");
        // }

        const data = await response.json();
        console.log(data);
        navigate(location?.state?.from?.pathname || "/");
      } catch (err) {
        console.error(err.message);
      }
    } else {
      toast.success("User Already Logged!");
    }
  }

  return (
    <button
      onClick={handleGoogleSignIn}
      className="px-4 w-full text-xl font-medium border shadow-md tracking-[1px] py-2.5 font-roboto rounded-full transition flex gap-3 items-center justify-center hover:text-white  "
    >
      <img className="h-6 w-6" src={googleIcon} alt="" />
      <span>Google</span>
    </button>
  );
};

export default GoogleSignIn;
