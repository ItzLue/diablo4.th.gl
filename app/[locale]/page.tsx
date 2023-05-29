import { isOverwolf } from "../lib/env";
import Home from "./(web)/home";

export default isOverwolf ? () => <></> : Home;

export async function generateStaticParams() {
  return [{ locale: "de" }];
}
