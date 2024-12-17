"use client";

import { useRouter } from "next/navigation";

export default function EndingNote() {
  const router = useRouter();

  // データ項目を定義
  const data = [
    { id: 1, content: "連絡先リスト", path: "/ending-note/1" },
    { id: 2, content: "財産管理", path: "/ending-note/2" },
    { id: 3, content: "介護・医療", path: "/ending-note/3" },
    { id: 4, content: "葬儀・お墓", path: "/ending-note/4" },
    { id: 5, content: "保険・年金", path: "/ending-note/5" },
    { id: 6, content: "相続・遺言", path: "/ending-note/6" },
    { id: 7, content: "死ぬまでにやりたいこと", path: "/ending-note/7" },
  ];

  // クリックでページ遷移
  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* ページタイトル */}
      <h1 className="text-3xl font-bold text-center my-8 text-gray-800 dark:text-white">
        エンディングノート
      </h1>

      {/* リスト表示 */}
      <div className="container mx-auto px-4">
        <ul className="space-y-4">
          {data.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick(item.path)}
              className="p-4 bg-white dark:bg-gray-800 rounded shadow cursor-pointer text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {item.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

