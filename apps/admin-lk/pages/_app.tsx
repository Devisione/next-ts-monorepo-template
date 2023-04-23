import "./components/ui/index.css";
import type { AppProps } from "next/app";
import { NextPageWithLayout } from "../entities/next/model/types";
import LayoutWrapper from "../entities/app/ui/Layout/Layout";
import { AppStore } from "../entities/app/model/store";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // const getLayout =
  //   Component.getLayout || ((page) => <LayoutWrapper>{page}</LayoutWrapper>);

  return (
    <AppStore.Provider>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </AppStore.Provider>
  );
}
