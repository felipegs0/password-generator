import { useState } from 'react';
import {
  Main,
  Title,
  PasswordContainer,
  Form,
  RangeDiv,
  Option,
  Button,
  Copy,
} from './styled';

function PasswordGenerator() {
  const [quant, setQuant] = useState(16);
  const [upper, setUpper] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const [password, setPassword] = useState('');

  const handleQuant = (characters) => {
    setQuant(characters);
  };

  const handleUpper = () => {
    setUpper((prev) => !prev);
  };

  const handleNumber = () => {
    setNumber((prev) => !prev);
  };

  const handleSymbol = () => {
    setSymbol((prev) => !prev);
  };

  function rand(max) {
    return Math.floor(Math.random() * max);
  }

  function lowercase() {
    let lowercase = '';

    for (let i = 97; i <= 122; i++) {
      lowercase += String.fromCharCode(i);
    }

    return lowercase;
  }

  function uppercase() {
    let uppercase = '';

    for (let i = 65; i <= 90; i++) {
      uppercase += String.fromCharCode(i);
    }

    return uppercase;
  }

  function numbers() {
    let numbers = '';

    for (let i = 48; i <= 57; i++) {
      numbers += String.fromCharCode(i);
    }

    return numbers;
  }

  function symbols() {
    let symbols = '';

    for (let i = 33; i <= 38; i++) {
      symbols += String.fromCharCode(i);
    }

    return symbols;
  }

  const passwordGenerator = (e) => {
    e.preventDefault();
    let passwordTemp = '';
    let pool = lowercase();

    if (upper == true) {
      pool += uppercase();
    }

    if (number == true) {
      pool += numbers();
    }

    if (symbol == true) {
      pool += symbols();
    }

    for (let i = 0; i < quant; i++) {
      const index = rand(pool.length);
      passwordTemp += pool[index];
    }
    setPassword(passwordTemp);
  };

  return (
    <>
      <Main>
        <Title>Gerador de Senha</Title>
        <PasswordContainer>
          <p>{password}</p>
          <Copy />
        </PasswordContainer>
        <Form onSubmit={(e) => passwordGenerator(e)}>
          <RangeDiv>
            <input
              type="range"
              min={4}
              max={26}
              value={quant}
              onChange={(characters) => handleQuant(characters.target.value)}
            />
            <label htmlFor="">Quantidade de caracteres: {quant}</label>
          </RangeDiv>
          <Option>
            <input type="checkbox" id="capitalLetters" onChange={handleUpper} />
            <label htmlFor="capitalLetters">Incluir letras maiúsculas</label>
          </Option>
          <Option>
            <input type="checkbox" id="number" onChange={handleNumber} />
            <label htmlFor="number">Incluir números</label>
          </Option>
          <Option>
            <input type="checkbox" id="symbol" onChange={handleSymbol} />
            <label htmlFor="symbol">Incluir símbolos</label>
          </Option>
          <Button>
            <button type="submit">Gerar Senha</button>
          </Button>
        </Form>
      </Main>
    </>
  );
}

export default PasswordGenerator;
