"use client";
import { useChat } from "ai/react"
import styles from "./page.module.css";
import DatsMyLogo from "./scenes/boot/brand";
import GameBoot from "./scenes/boot/intro";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
    initialMessages: [
      { id: "system", role: "system", content: "You are a Philosopher." },
    ],
  });

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          {messages.map((message) => (
            <p key={message.id}>
              {message.role}: {message.content}
            </p>
          ))}
          <input onChange={handleInputChange} value={input} className="text-black"/>
          <button type="submit">Send Message</button>
        </form>
      </main>
    </div>
  );
}
