import React from 'react';
import { render } from '@testing-library/react';
// import TestRenderer from 'react-test-renderer';
import App from './App';
import { Home } from './container/Home';



// test suite
describe('Cart Component', () => {
  test('renders', () => {
    expect(() => {
      render(<App />)
    }).not.toThrowError();
  });
//   test('render with props',()=>{
//     const testRenderer = TestRenderer.create(<App />);
//     const testInstance = testRenderer.root;
//     expect(testInstance.findByType(Home).props.products).([]);
// })
});   