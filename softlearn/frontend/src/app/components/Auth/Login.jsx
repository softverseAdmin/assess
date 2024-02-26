import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import { login } from "../../api/handleApis";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [msg, seMsg] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const mutation = useMutation(login, {
    onSuccess: async (data) => {
      await queryClient.invalidateQueries("validateToken");
      if (data) {
        toast.success("Login success.");
        navigate("/user");
        localStorage.setItem("token", JSON.stringify(data.token));
        dispatch(authActions.login({}));
      } else {
        navigate("/login");
        seMsg(true);
      }
    },
    onError: async (error) => {
      toast({ message: error.message });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(input);
  };

  return (
    <>
      <div className="flex bg-teal-400 justify-center items-center min-h-[90vh] p-4 ">
        <div className="bg-white flex gap-4 shadow-lg rounded p-8 mb-4 w-full h-screen">
          <div className="hidden md:flex bg-black flex-col rounded gap-3 bg-white flex-1">
            01
          </div>
          <form
            className="flex flex-1 flex-col justify-center items-center px-6"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
              <span className="bg-gradient-to-r text-transparent from-blue-500 to-teal-500 bg-clip-text">
                Login
              </span>
            </h2>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <div>
                <input
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <div>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            {msg && (
              <span className="text-red-600">
                Invalid username or password!
              </span>
            )}
            <div className="flex items-center mt-2 justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Login
              </button>
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-gray-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <p className="text-center text-gray-600 mt-6">
              Don't have an account?{" "}
              <Link to={"/register"} className="text-blue-500 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
