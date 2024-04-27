import { DisplayQuery } from "@/app/with-query/DIsplayQuery";
import { QueryChangeButton } from "@/app/with-query/QueryChangeButton";
import { QueryChangeLink } from "@/app/with-query/QueryChangeLink";
import { Suspense } from "react";

export default function WithQuery() {
  return (
    <div>
      <h1>クエリパラメータ</h1>
      <p>クエリパラメータは次のように設定されています:</p>
      <Suspense fallback={<div>読み込み中...</div>}>
        <DisplayQuery />
        <ul className=" p-4 flex flex-wrap gap-4 items-center">
          <li>
            <QueryChangeLink queries={{ type: "link" }} className=" underline">
              type=link
            </QueryChangeLink>
          </li>
          <li>
            <QueryChangeLink
              queries={{ a: "a", b: "b" }}
              className=" underline"
            >
              a=a, b=b
            </QueryChangeLink>
          </li>
          <li>
            <QueryChangeButton
              queries={{ type: "button" }}
              className=" p-2 border border-black"
            >
              type=button
            </QueryChangeButton>
          </li>
          <li>
            <QueryChangeButton
              queries={{ a: "1", b: "2" }}
              className=" p-2 border border-black"
            >
              a=1, b=2
            </QueryChangeButton>
          </li>
        </ul>
      </Suspense>
    </div>
  );
}
