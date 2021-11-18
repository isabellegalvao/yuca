import styled from "styled-components";
import metroIcon from "./Vector.svg";

export const SContent = styled.div`
  @media only screen and (min-width: 801px) {
    width: 70%;
    padding: 40px;
  }
  @media only screen and (max-width: 800px) {
    padding: 30px;
  }

  .content__title {
    position: relative;
    margin-bottom: 40px;
  }

  .content__title:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 51px;
    height: 4px;
    background: #13C081;
  }

  .content__subtitle {
    font-weight: bold;
  }
`;
export const SCard = styled.div`
  display: flex;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 32px;

  p {
    margin: 0;
  }

  p + p {
    margin-top: 10px;
  }

  .card__wrapper {
    padding: 16px;
  }

  .card__img img {
    width: 138px;
    height: 100%;
    object-fit: cover;
  }

  .card__title,
  .card__price {
    font-weight: bold;
    font-size: 16px;
  }

  .card__room {
  }

  .card__subway {
    position: relative;
    padding-left: 24px;
  }

  .card__subway::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-image: url(${metroIcon});
    background-repeat: no-repeat;
    background-color: #faa446;
    background-position: center;
  }

  .card__subway-distance {
    opacity: 50%;
  }
`;

export const SLink = styled.div`
  display: flex;
  justify-content: center;

  a{
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
    text-decoration: none;
  }
`

