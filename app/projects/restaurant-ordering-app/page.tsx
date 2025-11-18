"use client";

import menudata from "@/src/data/menu.json";
import { nanoid } from "nanoid";
import { useState } from "react";

import PaymentModal from "./components/PaymentModal";

import Header from "./components/Header";

import MenuItem from "./components/MenuItem";
import type { MenuItem as MenuItemType } from "./types/MenuItem";

import OrderDetails from "./components/OrderDetails";

import { Smythe } from "next/font/google";

const smythe = Smythe({
  weight: "400",
  subsets: ["latin"],
});

export default function RestaurantPage() {
  const [order, setOrder] = useState<MenuItemType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  function addToOrder(item: MenuItemType) {
    setOrder((prevOrder) => [...prevOrder, { ...item, id: nanoid() }]);
  }

  function removeFromOrder(item: MenuItemType) {
    setOrder((prevOrder) =>
      prevOrder.filter((orderItem) => orderItem.id !== item.id)
    );
  }

  function completeOrder() {
    setIsModalVisible(true);
  }

  function cancelPayment() {
    setIsModalVisible(false);
    setIsPaymentComplete(false);
  }

  function confirmPayment() {
    setOrder([]);
    setIsModalVisible(false);
    setIsPaymentComplete(true);
  }

  return (
    <main>
      {isModalVisible && (
        <PaymentModal
          cancelPayment={cancelPayment}
          confirmPayment={confirmPayment}
        />
      )}
      <Header />
      <section>
        {menudata.map((item: MenuItemType) => (
          <MenuItem key={item.id} itemData={item} addToOrder={addToOrder} />
        ))}
      </section>
      {order.length > 0 && (
        <OrderDetails
          order={order}
          removeFromOrder={removeFromOrder}
          completeOrder={completeOrder}
        />
      )}
      {isPaymentComplete && (
        <section className="bg-emerald-200 p-8 text-center mx-8 rounded-xl mb-8">
          <p className={`${smythe.className} text-emerald-900 text-3xl`}>
            Thank you for your order!
          </p>
        </section>
      )}
    </main>
  );
}
