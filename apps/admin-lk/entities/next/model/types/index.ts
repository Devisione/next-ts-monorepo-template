import { NextPage } from "next";
import { ElementType } from "react";

export type NextPageWithLayout<P = any> = NextPage<P> & {
  Layout?: ElementType;
};
