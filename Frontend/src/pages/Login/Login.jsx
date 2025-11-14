import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/users";
import { useAuth } from "../../providers/AuthProvider";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const onLogin = async () => {
    if (email.length == 0) {
      toast.warning("please enter email");
    } else if (password.length == 0) {
      toast.warning("please enter password");
    } else {
      const response = await login(email, password);
      if (response['status'] == 'success') {
        toast.success('Login Successful');
        localStorage.setItem('token', response['data']['token'])
        localStorage.setItem('email',response['data']['email']);
        localStorage.setItem('firstName',response['data']['firstName']);
        localStorage.setItem('lastName',response['data']['lastName']);
      
      navigate("/home/movies");
    } else {
      toast.error(response.data["error"]);
    }
  }
};
return (
  <div className="d-flex justify-content-center align-items-center min-vh-100">
    <div
      className="card p-4 shadow-lg"
      style={{ maxWidth: "400px", width: "100%" }}
    >
      <div className="card-body">
        <h3 className="card-title text-center mb-4">Login</h3>

        <div>
          <div className="form-floating mb-3">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              required
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="mt-4">
            <button onClick={onLogin} className="btn btn-success w-100">
              Login
            </button>
          </div>
        </div>

        <div className="mt-3 text-center">
          Don't have an account? <a href="/register">SignUp</a>
        </div>
      </div>
    </div>
  </div>
);
}

export default Login;
