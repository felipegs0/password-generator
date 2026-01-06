import styled from 'styled-components';
import { FaCopy } from 'react-icons/fa'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 400px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
  font-weight: 400;
`;

export const PasswordContainer = styled.div`
  background-color: #080c14a6;
  width: 100%;

  padding: 18px 15px;
  border-radius: 6px;
  margin-bottom: 15px;
  color: #ffffffef;

  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Copy = styled(FaCopy)`
  cursor: pointer;
  width: 18px;
  height: 18px;
`

export const Form = styled.form`
    background-color: #080c14a6;
    width: 100%;

    border-radius: 6px;
    padding: 22px;
`;

export const RangeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 12px;
    margin-bottom: 22px;
    font-size: 18px;
    input[type="range"] {
      width: 85%;
    }
    label {
      align-self: flex-start;
    }
    
`;

export const Option = styled.div`
    display: flex;
    gap: 12px;
    font-size: 18px;
`;

export const Button = styled.div`
    margin-top: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    button {
      padding: 6px 24px;
      width: 100%;
      height: 48px;
      background-color: #204e24ff;
      border: none;
      
      color: white;
      font-size: 16px;
      font-weight: 700;

      border-radius: 8px;
      transition: all 0.3s ease-out;
    }

    button:hover {
      background-color: #216b28ff;
    }
`;
