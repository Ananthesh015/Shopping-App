import styled from 'styled-components';


export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #756c6c;
`;

export const Container = styled.div`
  display: flex;
  height: 24px;
  padding: .6rem;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h4`
  font-size: 15px;
  padding: .6rem;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background: #757373;
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
`;

export const CartIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  img {
    width: 16px;
  }
`;