import { FormEvent, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { apiLogin } from "../../api/api";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let response = await apiLogin(userData);
    console.log("Login form submitting");
    response === 200 ? navigate("/") : null;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField onChange={handleChange} label="Email" name="email" />
        <TextField
          onChange={handleChange}
          label="Password"
          type="password"
          name="password"
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};
