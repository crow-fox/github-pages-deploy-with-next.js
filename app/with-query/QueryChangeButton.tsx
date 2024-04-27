"use client";

import { createQueryString } from "@/app/with-query/createQuery";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ComponentPropsWithRef } from "react";

type Props = Omit<ComponentPropsWithRef<"button">, "onClick"> & {
  queries: Record<string, string>;
};

export function QueryChangeButton({ queries, ...others }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleClick() {
    router.push(`${pathname}?${createQueryString(queries, searchParams)}`);
  }
  return <button {...others} onClick={handleClick}></button>;
}
