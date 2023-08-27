import { ModalProvider } from 'react-modal-hook';

function MyApp({ Component, pageProps }) {
  return (
    <div id="app">
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
    </div>
   
  );
}

export default MyApp;