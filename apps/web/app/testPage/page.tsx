import Head from "next/head";
import Link from "next/link";
import { Button, Header } from "ui";

export default function Test() {
  return (
    <>
      <title>Test page title</title>

      <Header text="Web/test" />
      <Button />
      <Link href="/">Home page</Link>
    </>
  );
}
