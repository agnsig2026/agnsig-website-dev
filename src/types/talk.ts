import type { JSX } from "react";
export type Talk = {
  id: number;
  type: string;
  date: string;
  name: string;
  title: string;
  url?: string;  // optional
};
