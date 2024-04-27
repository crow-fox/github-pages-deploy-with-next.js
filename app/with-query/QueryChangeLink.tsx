"use client";

import { createQueryString } from "@/app/with-query/createQuery";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  queries: Record<string, string>;
};

export function QueryChangeLink({ queries, ...others }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  return (
    <Link
      {...others}
      href={`${pathname}?${createQueryString(queries, searchParams)}`}
    >
      {others.children}
    </Link>
  );
}
