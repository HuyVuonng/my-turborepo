import { Button, Footer, Header } from "ui";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";

export default function Page() {
  return (
    <>
      <title>Home page title</title>

      <Header text="Web" />
      <Button />

      <Link href="/testPage">test page</Link>

      <Footer text="Footer" color="blue"/>
    </>
  );
}
