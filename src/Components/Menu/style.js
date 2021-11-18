import styled from "styled-components";

export const SMenu = styled.nav`
  background-color: #fff;
  width: 100%;
  padding: 8px 16px;
  border-bottom: 2px #e5e5e5 solid;
  display: flex;

  @media only screen and (min-width: 801px) {
    width: 30%;
    flex-direction: column;
    background-color: #f2f2f2;
  }

  @media only screen and (max-width: 800px) {
    justify-content: space-between;
    align-items: center;
  }

  .menu__container {
    padding: 24px 0;
    
    a{
      font-weight: bold;
      text-decoration: none;
      color: inherit;
    }


    @media only screen and (min-width: 801px) {
      border: 1px solid #f2f2f2;
      background-color: #fff;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;

      a{
        padding: 0 24px;
      }

      a + a{
        margin-top: 24px;
      }

      a.active{
        color: #13C081;
      }
    }


    @media only screen and (max-width: 800px) {
      display: flex;
      justify-content: center;
      width: 100%;

        a + a{
          margin-left: 24px;
        }

        a{
          position: relative;
        }

        a.active:after{
          content: "";
          position: absolute;
          width: 51px;
          height: 4px;
          background: #13C081;
          left: 50%;
          bottom: -16px;
          transform: translate(-50%, 0);
        }
    }
  }
`;
