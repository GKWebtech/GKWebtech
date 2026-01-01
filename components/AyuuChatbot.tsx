import React, { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MAIN_OPTIONS = [
  { title: "Agency Services", value: "services" },
  { title: "Institute/Training", value: "institute" },
  { title: "Portfolio", value: "portfolio" },
  { title: "Contact Us", value: "contact" },
];

export const AyuuChatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (text: string) => {
    setMessages((prev) => [...prev, { from: "user", text }]);
    setLoading(true);

    try {
      const res = await fetch("/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatInput: text }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { from: "bot", text: data.assistant_reply }]);

      // If bot returned menu again
      if (data.reply_type === "menu") {
        setMessages((prev) => [...prev, { from: "bot", text: "Choose an option 👇" }]);
      }

    } catch (err) {
      setMessages((prev) => [...prev, { from: "bot", text: "Oops! Something went wrong. Try restart." }]);
    }

    setLoading(false);
    setTimeout(() => setLoading(false), 300);
  };

  const restartChat = () => {
    setMessages([]);
    sendMessage("menu");
  };

  const closeChat = () => {
    setOpen(false);
  };

  const navigateTo = (link: string) => {
    setOpen(false);
    window.location.href = link;
  };

  const openMail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const openDialer = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const openMaps = (query: string) => {
    window.open(`https://maps.google.com/?q=${query}`, "_blank");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => {
          setOpen(true);
          setMessages([{ from: "bot", text: "Hi 👋 Welcome to GKWebTech! How can I help?" }]);
        }}
        className="fixed bottom-6 right-6 bg-black text-white px-4 py-3 rounded-full shadow-lg z-50"
      >
        Ask Ayuu ✨
      </button>

      {/* Chat popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-6 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 border dark:border-gray-700"
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b dark:border-gray-700 pb-2 mb-2">
              <h3 className="text-lg font-semibold text-black dark:text-white">Ayuu Assistant</h3>
              <button onClick={closeChat}><X className="text-black dark:text-white" /></button>
            </div>

            {/* Messages */}
            <div className="h-48 overflow-y-auto space-y-2 pr-1">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`px-3 py-2 rounded-xl text-sm w-fit max-w-[90%] ${
                    msg.from === "bot"
                      ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
                      : "bg-black text-white ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {loading && (
                <div className="text-xs text-gray-500 ml-auto">Ayuu is typing…</div>
              )}
            </div>

            {/* Option Buttons */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              {MAIN_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => sendMessage(opt.value)}
                  className="bg-black text-white text-xs px-2 py-2 rounded-xl"
                >
                  {opt.title}
                </button>
              ))}
              <button
                onClick={restartChat}
                className="bg-gray-700 text-white text-xs px-2 py-2 rounded-xl col-span-2"
              >
                Restart Chat
              </button>
            </div>

            {/* Input box */}
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder="Ask anything…"
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage((e.target as HTMLInputElement).value);
                }}
                className="flex-1 border px-3 py-2 text-xs rounded-xl dark:bg-gray-800 dark:border-gray-700 text-black dark:text-white"
              />
              <button
                onClick={() => {
                  const input = document.querySelector("input") as HTMLInputElement;
                  if (input?.value) sendMessage(input.value);
                }}
                className="bg-black text-white text-xs px-3 py-2 rounded-xl"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
