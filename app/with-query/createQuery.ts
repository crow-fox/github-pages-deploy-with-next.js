import { ReadonlyURLSearchParams } from "next/navigation";

export function createQueryString(
  queries: Record<string, string>,
  readonlySearchParams: ReadonlyURLSearchParams
) {
  const searchParams = new URLSearchParams(readonlySearchParams);
  for (const [key, value] of Object.entries(queries)) {
    searchParams.set(key, value);
  }
  return searchParams.toString();
}
