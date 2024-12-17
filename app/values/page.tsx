"use client";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// 必要なモジュールを登録
ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

// レーダーチャートのデータ型
type RadarChartData = ChartData<"radar">;

export default function ValuesPage() {
  // 初期値を空のデータオブジェクトに設定し型定義
  const [chartData, setChartData] = useState<RadarChartData>({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  });

  // APIからデータを取得しチャートデータをセット
  useEffect(() => {
    fetch("https://tech0-gen-8-step3-app-py-11.azurewebsites.net/api/values")
      .then((response) => response.json())
      .then((data) => {
        setChartData({
          labels: ["家族関係", "趣味・生きがい", "仕事・キャリア", "健康・医療", "経済状況"],
          datasets: [
            {
              label: "価値観診断結果",
              data: data.scores,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
              borderWidth: 2,
            },
          ],
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!chartData || chartData.labels?.length === 0) {
    return <p className="text-center">データを読み込んでいます...</p>;
  }

  // 次のページへの遷移
  const handleNextPage = () => {
    window.location.href = "/next-page";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-12 bg-gray-50">
      {/* レーダーチャート */}
      <div className="w-full max-w-md">
        <Radar
          data={chartData}
          options={{
            responsive: true,
            scales: {
              r: {
                min: 0, // 最小値を0に固定
                max: 5, // 最大値を5に固定
                beginAtZero: true, // 必ず0から始める
                ticks: {
                  stepSize: 1, // 目盛り間隔を1に固定
                },
              },
            },
          }}
        />
      </div>

      {/* コメントエリア */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">診断結果コメント</h2>
        <ul className="text-gray-700 space-y-2">
          <li>1. 家族関係が良好で、終活に向けて大切な基盤があります。</li>
          <li>2. 趣味や生きがいを増やすと、さらに豊かな生活になります。</li>
          <li>3. 経済状況を見直して、安定した将来計画を立てましょう。</li>
        </ul>
      </div>

      {/* 次のページボタン */}
      <div>
        <Button className="px-6 py-3 text-lg font-medium" onClick={handleNextPage}>
          次のページ
        </Button>
      </div>
    </div>
  );
}
