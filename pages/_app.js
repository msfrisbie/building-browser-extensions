import Boilerplate from "@components/Boilerplate";
import "@styles/globals.scss";

function Application({ Component, pageProps }) {
  return (
    <Boilerplate>
      <Component {...pageProps} />
    </Boilerplate>
  );
}

export default Application;
