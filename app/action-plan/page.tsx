"use client";

export default function ActionPlan() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          次のアクションプラン
        </h1>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            ここでは、次のアクションプランについて計画を立てることができます。
          </p>

          <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>目標を設定する</li>
            <li>達成期限を決める</li>
            <li>必要なリソースを特定する</li>
            <li>進捗状況を確認する</li>
          </ul>

          <div className="mt-6">
            <button
              className="w-full p-2 bg-primary text-white rounded hover:bg-primary-dark"
            >
              アクションプランを保存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
