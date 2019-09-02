import React, {useState} from 'react'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Container} from '@material-ui/core';

export default function MyList() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function login() {
    alert(JSON.stringify({username, password}, null, 4));
  }

  return <Container maxWidth='xs'>
    <form>
      <FormControl fullWidth>
        <TextField label='Username' value={username} onChange={event => setUsername(event.target.value)}/>
      </FormControl>
      <FormControl fullWidth>
        <TextField label='Password' type='password' value={password}
                   onChange={event => setPassword(event.target.value)}/>
      </FormControl>
      <FormControl fullWidth>
        <Button onClick={login}>Login</Button>
      </FormControl>
    </form>
  </Container>
}
