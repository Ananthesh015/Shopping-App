import React from 'react';
import { Container, Card } from "../component/browser";

interface IProps{
    children:any

}

export const BrowserContainer:React.FC<IProps & {}> = ({children, ...props}) =>(
    <Container {...props}>
        {children}
    </Container>
);

export const BrowserCard:React.FC<IProps & {}> = ({children, ...props}) =>(
    <Card {...props}>
        {children}
    </Card>
);