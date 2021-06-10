import HomeLayout from "layouts/HomeLayout";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";

import "../styles/globals.css";
import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </>
  );
}

export default MyApp;
