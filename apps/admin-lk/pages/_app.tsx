import "./components/ui/index.css";
import type { AppProps } from "next/app";
import { NextPageWithLayout } from "../model/next/types";
import LayoutWrapper from "../ui/Layout/Layout";
import { AppStore } from "../model/app/store";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout || ((page) => <LayoutWrapper>{page}</LayoutWrapper>);

  return (
    <AppStore.Provider>
      {getLayout(<Component {...pageProps} />)}
    </AppStore.Provider>
  );
}
