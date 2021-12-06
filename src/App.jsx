import React from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import TextArea from './components/TextArea.jsx';
import Container from './containers/Container.jsx';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
// } from '../src/redux/slices/counterSlice.js';

export function App() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <>
      <NavBar />
      <Container>
        <TextArea />
      </Container>
    </>
  );
}
export default App;
