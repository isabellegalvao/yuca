import styled from "styled-components";

export const SContent = styled.div`
  @media only screen and (min-width: 801px) {
    width: 70%;
    padding: 40px;
  }
  @media only screen and (max-width: 800px) {
    padding: 30px;
    height: calc(100vh - 54px);
  }

`;

export const SCheckbox = styled.label`
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 5px;
  padding-top: 2px;
  cursor: pointer;
  font-size: 16px;

  +label{
    margin-top: 16px;
  }

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  .service__checkbox-icon {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #e6e6e6;
    border: 0px solid #000000;
    border-radius: 3px;
  }

  .service__checkbox-text{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  input:checked ~ .service__checkbox-text .service__checkbox-price {
    color: #13c081;
  }

  &:hover input ~ .service__checkbox-icon,
  input:focus ~ .service__checkbox-icon {
    background: #cccccc;
  }

  input:checked ~ .service__checkbox-icon {
    background: #13c081;
  }

  input:disabled ~ .service__checkbox-icon {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
  }
  .service__checkbox-icon:after {
    box-sizing: unset;
    content: "";
    position: absolute;
    display: none;
  }
  input:checked ~ .service__checkbox-icon:after {
    display: block;
  }
  .service__checkbox-icon:after {
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  input:disabled ~ .service__checkbox-icon:after {
    border-color: #7b7b7b;
  }
  .service__checkbox-icon::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 4.5rem;
    height: 4.5rem;
    margin-left: -1.3rem;
    margin-top: -1.3rem;
    background: #2aa1c0;
    border-radius: 3rem;
    opacity: 0.6;
    z-index: 99999;
    transform: scale(0);
  }
`;
export const SButton = styled.button`
  background-color: #13c081;
  display: block;
  color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 36px;
  align-items: center;
  padding: 10px 16px;
  border: 1px solid #F2F2F2;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  margin-left: 24px;
`
export const SLink = styled.span`
  display: block;
  color: #13c081;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 36px;
  align-items: center;
  padding: 10px 16px;
  border: 1px solid #F2F2F2;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
`

export const SService = styled.div`
  a{
    text-decoration: none;
  }

  h1{
    position: relative;
    margin-bottom: 40px;
  }

  h1:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 51px;
    height: 4px;
    background: #FAA446;
  }

  .form__footer{
    padding: 16px 0;
    border-top: 1px solid #F2F2F2;
    margin-top: 16px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .form__footer-total{
    color: #13c081;
  }

  .form__buttons{
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: 56px;
  }

`;


