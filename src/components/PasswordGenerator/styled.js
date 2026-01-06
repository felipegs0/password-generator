import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
  font-weight: 400;
`;

export const PasswordContainer = styled.div`
  background-color: #080c14a6;
  width: 100%;

  padding: 8px 18px;
  border-radius: 6px;
  margin-bottom: 15px;
  color: #ffffffef;

  font-size: 14px;
  font-weight: 700;
`;

export const Form = styled.form`
    background-color: #080c14a6;
    width: 100%;

    border-radius: 6px;
    padding: 18px;
`;
