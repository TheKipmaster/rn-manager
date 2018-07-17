import React, { Component } from 'react';
import { Card, CardItem, Input, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Input
            label="Email"
            placeholder="example@domain.com"
          />
        </CardItem>
        <CardItem>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardItem>
        <CardItem>
          <Button>
            Login
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default LoginForm;
