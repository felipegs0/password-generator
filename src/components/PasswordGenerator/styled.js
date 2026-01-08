import styled, { keyframes } from 'styled-components';
import { FaCopy } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

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

  max-height: ${({ isActive }) => (isActive ? '200px' : '0')};
  padding: ${({ isActive }) => (isActive ? '18px 15px' : '0')};
  margin-bottom: ${({ isActive }) => (isActive ? '15px' : '0')};

  border-radius: 6px;
  color: #ffffffef;

  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;

  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transform: ${({ isActive }) =>
    isActive ? 'translateY(0)' : 'translateY(8px)'};;
  transition: opacity 0.3s ease, transform 0.3s ease;
`;

export const Copy = styled(FaCopy)`
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
  width: 18px;
  height: 18px;
`;

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

export const Modal = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  top: 20px;
  right: 20px;
  background-color: #17913bff;
  padding: 25px;
  gap: 12px;
  border-radius: 4px;
  box-shadow: 0px 1px 7px 2px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.4s ease;
`;
