import React from 'react';
import {ThemeProvider} from "styled-components";
import PageHeading from './Components/headings/PageHeading';
import Container from './Components/layout/Container';
import Input from './Components/form/Input';
import Form from './Components/form/Form';
import Button, {DangerButton}  from './Components/form/Button';
import GlobalStyle from './styles/GlobalStyle';

import theme from './styles/Theme';






function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
          <Container>
      <PageHeading>Register</PageHeading>
      <Form>
    <Input placeholder="Name" />
    <Input placeholder="City"  colour="#5D94D5" />
    <Button>Registrer</Button>
    <DangerButton>Cancel</DangerButton>
      </Form>

    </Container>
    </ThemeProvider>

  );
}

export default App;
