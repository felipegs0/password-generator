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
import { FaCopy } from 'react-icons/fa'

function PasswordGenerator() {
  const [quant, setQuant] = useState(16);

  const handleQuant = (characters) => {
    setQuant(characters);
  };
  return (
    <>
      <Main>
        <Title>Gerador de Senha</Title>
        <PasswordContainer>
          <p></p>
          <Copy />
        </PasswordContainer>
        <Form action="#">
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
            <input type="checkbox" id="capitalLetters" />
            <label htmlFor="capitalLetters">Incluir letras maiúsculas</label>
          </Option>
          <Option>
            <input type="checkbox" id="number" />
            <label htmlFor="number">Incluir números</label>
          </Option>
          <Option>
            <input type="checkbox" id="symbol" />
            <label htmlFor="symbol">Incluir símbolos</label>
          </Option>
          <Button>
            <button>Gerar Senha</button>
          </Button>
        </Form>
      </Main>
    </>
  );
}

export default PasswordGenerator;
