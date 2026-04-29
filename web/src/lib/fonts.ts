import { Cormorant_Infant, Fira_Sans, Jost } from "next/font/google";

export const cormorantTitle = Cormorant_Infant({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal"],
});


export const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400"],
  style: ["normal"],
});

export const jostBody = jost;

export const firaSans = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal"],
});
