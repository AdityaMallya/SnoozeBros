import React from "react";
import "./subs.css";
const SubscriptionPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-6">Choose Your Plan</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {["Basic", "Standard", "Premium"].map((plan, index) => (
          <div
            key={index}
            className="p-6 border border-gray-700 rounded-2xl text-center hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-semibold mb-4">{plan}</h2>
            <p className="mb-2">
              {plan === "Basic"
                ? "$8.99/month"
                : plan === "Standard"
                ? "$13.99/month"
                : "$17.99/month"}
            </p>
            <ul className="text-sm mb-4">
              <li>
                {plan === "Basic"
                  ? "480p"
                  : plan === "Standard"
                  ? "1080p"
                  : "4K + HDR"}
              </li>
              <li>
                {plan === "Basic"
                  ? "1 screen"
                  : plan === "Standard"
                  ? "2 screens"
                  : "4 screens"}
              </li>
              <li>Unlimited Movies and TV Shows</li>
              <li>Cancel Anytime</li>
            </ul>
            <button className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition">
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
