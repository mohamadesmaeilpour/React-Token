import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  Form,
  Input,
  Button,
  Error,
} from '../component/AuthForm';
import { useAuth } from '../auth/AuthContext ';
import BackgroundAnimation from '../component/BackgroundAnimation';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginHandle = () => {
    fetch('http://link.pishroapp.net/login', {
      method: 'post',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((data) => data.json())
      .then((res) => console.log(res, 'resp'))
      .then((exit) => localStorage.setItem('token', exit.token));
  };

  return (
    <Card>
      <BackgroundAnimation />
      {console.log(email, 'login')}
      <Form>
        <Input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={loginHandle}>Sign In</Button>
      </Form>
      <Link to="/register">Don't have an account?</Link>
    </Card>
  );
}

export default Login;
