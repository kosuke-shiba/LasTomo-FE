"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { MessageCircle, FileText, Heart, HelpCircle, CheckCircle, Book } from "lucide-react";

export default function Home() {
  const router = useRouter();

  // メニュー項目
  const menuItems = [
    {
      title: "基本情報の入力",
      icon: <FileText className="w-6 h-6" />,
      path: "/profile",
    },
    {
      title: "リフレクションを始めよう",
      icon: <MessageCircle className="w-6 h-6" />,
      path: "/reflection",
    },
    {
      title: "価値観診断",
      icon: <Heart className="w-6 h-6" />,
      path: "/values",
    },
    {
      title: "次のアクションプラン",
      icon: <CheckCircle className="w-6 h-6" />,
      path: "/action-plan",
    },
    {
      title: "エンディングノート",
      icon: <Book className="w-6 h-6" />,
      path: "/ending-note",
    },
    {
      title: "使い方",
      icon: <HelpCircle className="w-6 h-6" />,
      path: "/help",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* タイトルを残す */}
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          LastTomo - 終活リフレクション
        </h1>

        {/* メニューセクション */}
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white dark:bg-gray-800"
              onClick={() => router.push(item.path)}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h2>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

