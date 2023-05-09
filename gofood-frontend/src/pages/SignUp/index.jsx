import React from "react";
import "./index.css";
import logo from "../../assets/img/logo.png";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const SignUp = () => {
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
              <label for="text" class="sr-only">
                Username
              </label>
              <input name="username" placeholder="Username" />

              <label for="password" class="sr-only">
                Password
              </label>
              <input name="password" type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <input name="email" type="email" placeholder="Email" />
              <input name="phone" type="phone" placeholder="Phone" />
              <input name="address" type="text" placeholder="Address" />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Who are you
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="role"
                  value={0}
                  label="Who are you"
                  onChange={() => {}}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <button type="submit" className="btn btn-success">
                Log In
              </button>
            </form>
          </div>
          <div class="panel register flex justify-content-center">
            <p>Already have an account?</p>
            <a href="/login" className="text-success mt-1">
              Login
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

export default SignUp;
