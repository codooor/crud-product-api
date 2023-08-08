import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LOGIN_USER } from "../mutations";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useMutation(LOGIN_USER);

  const navigate = useNavigate();

  const handleError = (err) => {
    toast.error(err, {
      position: "top-left",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({ variables: { email, password } });

      if (data) {
        localStorage.setItem("token", data.login.token);

        navigate("/products");
      }
    } catch (err) {
      handleError(err.message);
      console.error(err);
    }
  };
  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form-button" type="submit">
          Login
        </button>
      </form>

      <p className="register-prompt">
        Don't have an account? <Link to="/register">Register Here</Link>{" "}
      </p>
      <ToastContainer />
    </div>
  );
}
