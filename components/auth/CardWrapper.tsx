"use client";

import { Children } from "react";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import { Header } from "./Header";
import { Social } from "./Social";
import Link from "next/link";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export function CardWrapper(props: CardWrapperProps) {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={props.headerLabel} />
      </CardHeader>
      <CardContent>{props.children}</CardContent>
      {props.showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter className="flex justify-center text-sm font-semibold">
        <Link href={props.backButtonHref}>{props.backButtonLabel}</Link>
      </CardFooter>
    </Card>
  );
}
