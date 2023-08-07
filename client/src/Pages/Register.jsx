import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../mutations";

export default function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { email, password } = input;

  const [registerUser] = useMutation(REGISTER_USER, {
    onCompleted: (data) => {
      if (data) {
        navigate("/login");
      }
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser({ variables: { email, password } });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          className="form-input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <button className="form-button" type="submit">
          Register
        </button>
      </form>
      <p className="login-prompt">
        Already have an account? <Link to="/login">Login Here</Link>{" "}
      </p>
    </div>
  );
}
