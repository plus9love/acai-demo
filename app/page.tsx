"use client";

import { useState } from "react";
import Image from "next/image";

type Item = {
  id: string;
  name: string;
  price: number;
};

const bases: Item[] = [
  { id: "acai", name: "アサイーベース", price: 700 },
  { id: "yogurt", name: "ヨーグルトベース", price: 650 },
  { id: "smoothie", name: "スムージーベース", price: 750 },
];

const fruits: Item[] = [
  { id: "banana", name: "バナナ", price: 100 },
  { id: "strawberry", name: "いちご", price: 150 },
  { id: "blueberry", name: "ブルーベリー", price: 150 },
  { id: "kiwi", name: "キウイ", price: 150 },
  { id: "pineapple", name: "パイナップル", price: 180 },
];

const toppings: Item[] = [
  { id: "granola", name: "グラノーラ", price: 120 },
  { id: "honey", name: "はちみつ", price: 80 },
  { id: "coconut", name: "ココナッツ", price: 100 },
  { id: "chia-seed", name: "チアシード", price: 100 },
];

export default function Home() {
  const [selectedBase, setSelectedBase] = useState<Item>(bases[0]);
  const [selectedFruits, setSelectedFruits] = useState<Item[]>([]);
  const [selectedToppings, setSelectedToppings] = useState<Item[]>([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const toggleItem = (
    item: Item,
    selectedItems: Item[],
    setSelectedItems: (items: Item[]) => void
  ) => {
    const exists = selectedItems.some((selected) => selected.id === item.id);

    if (exists) {
      setSelectedItems(selectedItems.filter((selected) => selected.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const totalPrice =
    selectedBase.price +
    selectedFruits.reduce((sum, item) => sum + item.price, 0) +
    selectedToppings.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="min-h-screen bg-pink-50 p-8 text-zinc-900">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_360px]">
        <section className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="mb-2 text-sm font-bold text-pink-500">PLUS9LOVE DEMO</p>
          <h1 className="mb-2 text-4xl font-bold">アサイーボウル注文デモ</h1>
          <p className="mb-8 text-zinc-600">
            ベース・フルーツ・トッピングを選んで、オリジナルのアサイーボウルを作れます。
          </p>

<div className="mb-8 sticky top-0 z-20 rounded-3xl bg-purple-100 p-4 sm:p-8">
  <div className="relative mx-auto aspect-square w-full max-w-[500px]">

  <img
  src="/images/bowl.png"
  alt="bowl"
  className="absolute inset-0 h-full w-full object-contain"
  />

{selectedBase?.id === "acai" && (
  <img
    src="/images/acai.png"
    alt="acai"
    className="absolute inset-0 h-full w-full object-contain"
  />
)}

{selectedBase?.id === "yogurt" && (
  <img
    src="/images/yogurt.png"
    alt="yogurt"
    className="absolute inset-0 h-full w-full object-contain"
  />
)}

{selectedBase?.id === "smoothie" && (
  <img
    src="/images/smoothie.png"
    alt="smoothie"
    className="absolute inset-0 h-full w-full object-contain"
  />
)}

{selectedToppings.some((t) => t.id === "chia-seed") && (
  <img
    src="/images/chia-seed.png"
    alt="chia-seed"
    className="absolute inset-0 h-full w-full object-contain"
  />
)}

{selectedToppings.some((f) => f.id === "granola") && (
  <img
    src="/images/granola.png"
    alt="granola"
    className="absolute inset-0 h-full w-full object-contain"
  />
)}

{selectedFruits.some((f) => f.id === "banana") && (
  <img
    src="/images/banana.png"
    alt="banana"
    className="absolute inset-0 h-full w-full object-contain"
  />
)}

{selectedFruits.some((f) => f.id === "kiwi") && (
  <img
    src="/images/kiwi.png"
    alt="kiwi"
    className="absolute inset-0 h-full w-full object-contain"
  />
)}

{selectedFruits.some((f) => f.id === "strawberry") && (
  <img
    src="/images/strawberry.png"
    alt="strawberry"
    className="absolute inset-0 h-full w-full object-contain"
  />
)}

{selectedToppings.some((f) => f.id === "coconut") && (
  <img
    src="/images/coconut.png"
    alt="coconut"
    className="absolute inset-0 h-full w-full object-contain"
  />
)}

{selectedFruits.some((f) => f.id === "pineapple") && (
  <img
    src="/images/pineapple.png"
    alt="pineapple"
    className="absolute inset-0 h-full w-full object-contain"
  />
)}

{selectedFruits.some((f) => f.id === "blueberry") && (
  <img
    src="/images/blueberry.png"
    alt="blueberry"
    className="absolute inset-0 h-full w-full object-contain"
  />
)}


{selectedToppings.some((t) => t.id === "honey") && (
  <img
    src="/images/honey.png"
    alt="honey"
    className="absolute inset-0 h-full w-full object-contain"
  />
)}

  </div>
</div>

          <OptionGroup
            title="1. ベースを選択"
            items={bases}
            selectedIds={[selectedBase.id]}
            onClick={(item) => setSelectedBase(item)}
          />

          <OptionGroup
            title="2. フルーツを選択"
            items={fruits}
            selectedIds={selectedFruits.map((item) => item.id)}
            onClick={(item) => toggleItem(item, selectedFruits, setSelectedFruits)}
          />

          <OptionGroup
            title="3. トッピングを選択"
            items={toppings}
            selectedIds={selectedToppings.map((item) => item.id)}
            onClick={(item) => toggleItem(item, selectedToppings, setSelectedToppings)}
          />
        </section>

        <aside className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold">注文内容</h2>

          <div className="space-y-4 text-sm">
            <SummaryRow label="ベース" value={selectedBase.name} price={selectedBase.price} />

            <SummaryList title="フルーツ" items={selectedFruits} />
            <SummaryList title="トッピング" items={selectedToppings} />
          </div>

          <div className="my-6 border-t pt-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">合計</span>
              <span className="text-3xl font-bold text-pink-500">
                ¥{totalPrice.toLocaleString()}
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsConfirmed(true)}
            className="w-full rounded-full bg-pink-500 px-6 py-4 font-bold text-white shadow-sm transition hover:bg-pink-600"
          >
            注文内容を確認する
          </button>

          {isConfirmed && (
            <div className="mt-6 rounded-2xl bg-green-50 p-4 text-sm text-green-700">
              注文内容を確認しました。実際の運用では、この後に印刷画面へ進みます。
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}

function OptionGroup({
  title,
  items,
  selectedIds,
  onClick,
}: {
  title: string;
  items: Item[];
  selectedIds: string[];
  onClick: (item: Item) => void;
}) {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const selected = selectedIds.includes(item.id);

          return (
            <button
              key={item.id}
              onClick={() => onClick(item)}
              className={`rounded-2xl border p-4 text-left transition ${
                selected
                  ? "border-pink-500 bg-pink-50 shadow-sm"
                  : "border-zinc-200 bg-white hover:border-pink-300"
              }`}
            >
              <div className="font-bold">{item.name}</div>
              <div className="mt-1 text-sm text-zinc-500">+¥{item.price}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  price,
}: {
  label: string;
  value: string;
  price: number;
}) {
  return (
    <div className="flex justify-between border-b pb-3">
      <div>
        <p className="font-bold">{label}</p>
        <p className="text-zinc-600">{value}</p>
      </div>
      <p>¥{price.toLocaleString()}</p>
    </div>
  );
}

function SummaryList({ title, items }: { title: string; items: Item[] }) {
  return (
    <div className="border-b pb-3">
      <p className="mb-2 font-bold">{title}</p>
      {items.length === 0 ? (
        <p className="text-zinc-400">未選択</p>
      ) : (
        <div className="space-y-1">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between text-zinc-600">
              <span>{item.name}</span>
              <span>¥{item.price.toLocaleString()}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
