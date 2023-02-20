import "@/styles/globals.css";
import { NextPage } from "next";
import { AppProps } from "next/app";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
