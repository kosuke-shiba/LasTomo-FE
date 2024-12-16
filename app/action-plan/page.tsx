"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

export default function ActionPlanPage() {
  const [loading, setLoading] = useState(true);
  const [actionPlan, setActionPlan] = useState<string | null>(null);

  useEffect(() => {
    const fetchActionPlan = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/action-plan");
        const data = await response.json();
        if (data.action_plan) {
          setActionPlan(data.action_plan);
        } else {
          setActionPlan("アクションプランの取得に失敗しました。");
        }
      } catch (error) {
        console.error("Error fetching action plan:", error);
        setActionPlan("エラーが発生しました。後でもう一度お試しください。");
      } finally {
        setLoading(false);
      }
    };

    fetchActionPlan();
  }, []);

  return (
    <div className="container mx-auto max-w-4xl p-4 h-[calc(100vh-2rem)]">
      <Card className="h-full p-6">
        {loading ? (
          <p className="text-lg text-center">アクションプランを作成中です。しばらくお待ちください。</p>
        ) : (
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">提案されたアクションプラン</h2>
            <div dangerouslySetInnerHTML={{ __html: actionPlan || "" }} />
          </div>
        )}
      </Card>
    </div>
  );
}
