"use client";
import Head from "next/head";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button, Header } from "ui";
import { useSearchParams } from "next/navigation";
import CustomLayout from "ui/CustomLayout";
export default function Test({ params }: { params: { slug: string } }) {
  const searchParams = useSearchParams();

  const search = searchParams.get("search"); // get querry string

  return (
    <CustomLayout>
      <title>Test page title</title>

      <Header text="Web/test" />
      <Button />
      <Link href="/">Home page</Link>
      <h1>Querry string {search}</h1>
      <h1>Slug {params.slug}</h1>
    </CustomLayout>
  );
}
