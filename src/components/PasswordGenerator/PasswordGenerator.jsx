import { Main, Title, PasswordContainer, Form } from './styled'

function PasswordGenerator() {
  return (
    <>
      <Main>
        <Title>Gerador de Senha</Title>
        <PasswordContainer>Texto de exemplo</PasswordContainer>
          <Form action="#">
            <div>
              <input type="range" min={8} max={24} />
            </div>
            <div>
              <input type="checkbox" id="capitalLetters" />
              <label htmlFor="capitalLetters">Incluir letras maiúsculas</label>
            </div>
            <div>
              <input type="checkbox" id="number" />
              <label htmlFor="number">Incluir números</label>
            </div>
            <div>
              <input type="checkbox" id="symbol" />
              <label htmlFor="symbol">Incluir símbolos</label>
            </div>
            <button>Gerar Senha</button>
          </Form>
      </Main>
    </>
  );
}

export default PasswordGenerator;
