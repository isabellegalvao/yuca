import styled from 'styled-components'

export const SMain = styled.main`
  height: calc(100vh - 54px);
  display: flex;
  
  @media only screen and (max-width: 800px) {
    flex-direction: column-reverse;
    justify-content: space-between;
  }
`