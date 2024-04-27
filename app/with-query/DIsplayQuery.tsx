"use client";

import { useSearchParams } from "next/navigation";

export function DisplayQuery() {
  const searchParams = useSearchParams();

  const query = Object.fromEntries(searchParams);

  return (
    <div>
      <h1>クエリパラメータ</h1>
      <p>クエリパラメータは次のように設定されています:</p>
      <pre>{JSON.stringify(query, null, 2)}</pre>
    </div>
  );
}
