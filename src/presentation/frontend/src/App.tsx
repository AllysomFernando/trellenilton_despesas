import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}
