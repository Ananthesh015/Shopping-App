import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* background-color: #e4dcdc; */
  flex-wrap: wrap;
  justify-content: center;

`;
export const Card = styled.div`
    display:flex;
    flex-direction:column;
    text-align: center;
    padding: .6rem;
    margin: .5rem;
    width: 20%;
    max-height: 400px;
    min-width: 100px;
    border: 1px solid #ddd;
    border-radius: 1rem;
    box-shadow: 1px 1px 1px #eee;
    background-color: #61dafb;
    img{
        max-height: 200px;
        width: 100%;
        object-fit: contain;
        margin-bottom: 15px;
    }
    h4{
        margin: 5px;
    }
    p{
        margin: 0;
    }
    .product__rating{
        display: flex;
        margin: auto;
    }
`;
export const Button = styled.button`
    border: none;
    border-radius: 29px;
    margin: .3rem;
    outline: none;
`;

export const QntButton = styled(Button)`
    height: 40%;
    margin-top: 30%;
`;


export const AddToCartButton = styled.button`
    border: none;
    border-radius: 5px;
    padding: 5px 12px;
    background-color: #f3cd6f;
    font-weight: 600;
`;