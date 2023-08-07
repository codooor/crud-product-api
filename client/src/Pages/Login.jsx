import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LOGIN_USER } from "../mutations";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { loading, error }] = useMutation(LOGIN_USER);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({ variables: { email, password } });

      if (data) {
        localStorage.setItem("token", data.login.token);
        navigate("/products");
      }
    } catch (err) {
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
        {loading && <p>Loading...</p>}
        {error && <p className="error-message">Error :( Please try again</p>}
      </form>

      <p className="register-prompt">
        Don't have an account? <a href="/register">Register Here</a>{" "}
      </p>
    </div>
  );
}
