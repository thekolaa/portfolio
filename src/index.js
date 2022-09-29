import React, { lazy, StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ColorModeScript, Flex, Spinner } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const PageHome = lazy(() => import('./pages/Home'));
const renderLoader = () => {
  return <Flex height={"100vh"} justify={"center"} alignItems={"center"}>
    <Spinner size='xl' />
  </Flex>;
}
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <PageHome />
    },
  ]
);
root.render(
  <StrictMode>
    <ChakraProvider>
      <Suspense fallback={renderLoader()}>
        <ColorModeScript />
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </Suspense>
    </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
