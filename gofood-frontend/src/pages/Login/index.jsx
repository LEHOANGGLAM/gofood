import React from "react";
import "./index.css";
import logo from "../../assets/img/logo.png";

const Login = () => {
  return (
    <>
      <div
        class="flex align-items-center justify-content-center"
        style={{ marginTop: "100px" }}
      >
        <section id="auth" class="flex direction-column">
          <div class="panel login flex direction-column">
            <h1 title="Instagram" class="flex justify-content-center">
              <img
                src={logo}
                alt="Instagram logo"
                title="Instagram logo"
                width="50%"
              />
            </h1>
            <form>
              <label for="email" class="sr-only">
                username
              </label>
              <input name="email" placeholder="Username" />

              <label for="password" class="sr-only">
                Password
              </label>
              <input name="password" type="password" placeholder="Password" />

              <button type="button" className="btn btn-success">
                Log In
              </button>
            </form>
            <div class="flex separator align-items-center">
              <span></span>
              <div class="or">OR</div>
              <span></span>
            </div>
            <div class="login-with-fb flex direction-column align-items-center">
              <div>
                <img />
                <a>Log in with Facebook</a>
              </div>
              <a href="#">Forgotten your password?</a>
            </div>
          </div>
          <div class="panel register flex justify-content-center">
            <p>Don't have an account?</p>
            <a href="/signup" className="text-success mt-1">
              Sign up
            </a>
          </div>
          <div class="foot" style={{ paddingTop: "50px" }}>
            <ul class="flex flex-wrap" style={{ fontSize: ".6em" }}>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">API</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Top accounts</a>
              </li>
              <li>
                <a href="#">Hashtags</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Ogani App</a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
