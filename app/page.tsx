import { DisplayQuery } from "@/app/with-query/DIsplayQuery";
import { QueryChangeButton } from "@/app/with-query/QueryChangeButton";
import { QueryChangeLink } from "@/app/with-query/QueryChangeLink";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <h1>トップページ</h1>
      <div>
        <h1>クエリパラメータ</h1>
        <p>クエリパラメータは次のように設定されています:</p>
        <Suspense fallback={<div>読み込み中...</div>}>
          <DisplayQuery />
        </Suspense>

        <ul className=" p-4 flex flex-wrap gap-4 items-center">
          <li>
            <Suspense fallback={<div>読み込み中...</div>}>
              <QueryChangeLink
                queries={{ type: "link" }}
                className=" underline"
              >
                type=link
              </QueryChangeLink>
            </Suspense>
          </li>
          <li>
            <Suspense fallback={<div>読み込み中...</div>}>
              <QueryChangeLink
                queries={{ a: "a", b: "b" }}
                className=" underline"
              >
                a=a, b=b
              </QueryChangeLink>
            </Suspense>
          </li>
          <li>
            <Suspense fallback={<div>読み込み中...</div>}>
              <QueryChangeButton
                queries={{ type: "button" }}
                className=" p-2 border border-black"
              >
                type=button
              </QueryChangeButton>
            </Suspense>
          </li>
          <li>
            <Suspense fallback={<div>読み込み中...</div>}>
              <QueryChangeButton
                queries={{ a: "1", b: "2" }}
                className=" p-2 border border-black"
              >
                a=1, b=2
              </QueryChangeButton>
            </Suspense>
          </li>
        </ul>
      </div>
    </>
  );
}
