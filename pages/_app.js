import { useEffect, Suspense, lazy } from "react";
const HomeLayout = lazy(() => import("../layouts/HomeLayout"));

import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";

import "../styles/globals.css";
import "../styles/app.css";

const renderLoader = () => <p>Loading</p>;
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);
  return (
    <>
      <Suspense fallback={renderLoader()}>
        <HomeLayout>
          <Component {...pageProps} />
        </HomeLayout>
      </Suspense>
    </>
  );
}

export default MyApp;
