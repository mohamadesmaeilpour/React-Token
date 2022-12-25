import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {
  Card,
  Form,
  Input,
  Button,
  Error,
} from '../component/AuthForm';
import BackgroundAnimation from '../component/BackgroundAnimation';

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  console.log(email,'reg')

  console.log(email,password)
  const singUpHandle = () => {
    fetch('http://link.pishroapp.net/register', {
      method: 'post',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <Card>
      <BackgroundAnimation />
      <Form>
        <Input
          type="text"
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
        <Input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password again"
        />
        <Button onClick={singUpHandle}>Sign Up</Button>
      </Form>
      <Link to="/login">Already have an account?</Link>
    </Card>
  );
}

export default Register;
