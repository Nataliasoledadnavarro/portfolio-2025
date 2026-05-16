"use client";

import { useState, useRef, useEffect } from "react";
import { FiX, FiSend } from "react-icons/fi";
import { RiRobot2Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

// Renderer de markdown básico sin dependencias extra
function SimpleMarkdown({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        const formatted = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

        if (line.startsWith("* ") || line.startsWith("- ")) {
          return (
            <div key={i} className="flex gap-2">
              <span className="text-primary mt-1 shrink-0">•</span>
              <span
                className="text-sm"
                dangerouslySetInnerHTML={{
                  __html: formatted.replace(/^[\*\-] /, ""),
                }}
              />
            </div>
          );
        }

        if (line.trim() === "") return <div key={i} className="h-1" />;

        return (
          <p
            key={i}
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: formatted }}
          />
        );
      })}
    </div>
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const MAX_CHARS = 500;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isLoading && isOpen) {
      inputRef.current?.focus();
    }
  }, [isLoading, isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length <= MAX_CHARS) {
      setInputValue(val);
      setCharCount(val.length);
    }
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setCharCount(0);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to get response");

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.message || "No pude generar una respuesta.",
          timestamp: new Date(),
        },
      ]);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      let displayMessage = `⚠️ Error: ${errorMessage}`;

      if (errorMessage.includes("429") || errorMessage.includes("quota")) {
        displayMessage =
          "⚠️ El servicio está temporalmente no disponible por límite de uso. Intentá más tarde.";
      } else if (errorMessage.includes("GEMINI_API_KEY")) {
        displayMessage =
          "⚠️ El chat no está configurado correctamente. Contactá al administrador.";
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: displayMessage, timestamp: new Date() },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <div className="absolute right-16 bottom-3 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.3 }}
              className="bg-dark/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap shadow-lg"
            >
              Chateá con Ada
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 w-2 h-2 bg-dark/90 border-r border-t border-white/10 rotate-45" />
            </motion.div>
          </div>
        )}

        {!isOpen && (
          <span
            className="absolute inset-0 rounded-full bg-primary/40 animate-ping"
            aria-hidden="true"
          />
        )}

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-14 h-14 rounded-full bg-primary text-dark flex items-center justify-center shadow-lg shadow-primary/30 transition-colors duration-200"
          aria-label={isOpen ? "Cerrar chat con Ada" : "Abrir chat con Ada"}
          aria-expanded={isOpen}
          aria-controls="ada-chat-panel"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                aria-hidden="true"
              >
                <FiX size={22} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                aria-hidden="true"
              >
                <RiRobot2Line size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ada-chat-panel"
            role="dialog"
            aria-label="Chat con Ada, asistente de Natalia Navarro"
            aria-modal="true"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] h-[32rem] flex flex-col rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 bg-dark/80 backdrop-blur-md"
          >
            {/* Header */}
            <div className="bg-secondary/90 backdrop-blur-sm px-5 py-3.5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <RiRobot2Line size={16} className="text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-white font-semibold text-sm leading-none">
                      Ada
                    </h2>
                    <span
                      className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"
                      aria-hidden="true"
                    />
                    <span className="sr-only">En línea</span>
                  </div>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Asistente de Natalia
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                aria-label="Cerrar chat"
              >
                <FiX size={18} aria-hidden="true" />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth"
              aria-live="polite"
              aria-label="Conversación con Ada"
              role="log"
            >
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center justify-center h-full gap-3 text-center px-4"
                >
                  <div
                    className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <RiRobot2Line size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">
                      ¡Hola! Soy Ada
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Preguntame lo que quieras sobre Natalia — su experiencia,
                      proyectos o stack técnico.
                    </p>
                  </div>
                </motion.div>
              )}

              <AnimatePresence initial={false}>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-2.5 rounded-2xl ${
                        message.role === "user"
                          ? "bg-primary text-dark rounded-br-sm"
                          : "bg-white/8 text-white border border-white/10 rounded-bl-sm"
                      }`}
                      aria-label={
                        message.role === "user" ? "Tu mensaje" : "Respuesta de Ada"
                      }
                    >
                      {message.role === "assistant" ? (
                        <SimpleMarkdown content={message.content} />
                      ) : (
                        <p className="text-sm break-words">{message.content}</p>
                      )}
                      <p
                        className={`text-xs mt-1.5 ${
                          message.role === "user"
                            ? "text-dark/50 text-right"
                            : "text-gray-500"
                        }`}
                        aria-label={`Enviado a las ${format(message.timestamp, "HH:mm")}`}
                      >
                        {format(message.timestamp, "HH:mm")}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                  role="status"
                  aria-label="Ada está escribiendo"
                >
                  <div className="bg-white/8 border border-white/10 px-4 py-3 rounded-2xl rounded-bl-sm">
                    <div className="flex space-x-1.5" aria-hidden="true">
                      {[0, 0.15, 0.3].map((delay, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"
                          style={{ animationDelay: `${delay}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="shrink-0 border-t border-white/10 bg-dark/60 p-3">
              <form
                onSubmit={handleSendMessage}
                className="flex gap-2 items-center"
                aria-label="Formulario de mensaje"
              >
                <label htmlFor="chat-input" className="sr-only">
                  Escribí tu mensaje para Ada
                </label>
                <input
                  id="chat-input"
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) handleSendMessage();
                  }}
                  placeholder="Escribí tu pregunta..."
                  disabled={isLoading}
                  aria-describedby={charCount > 0 ? "char-counter" : undefined}
                  className="flex-1 bg-white/8 text-white px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary/60 placeholder-gray-500 disabled:opacity-50 border border-white/10 transition-all"
                />
                <motion.button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-dark p-2.5 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center shrink-0"
                  aria-label="Enviar mensaje"
                >
                  <FiSend size={16} aria-hidden="true" />
                </motion.button>
              </form>
              {charCount > 0 && (
                <p
                  id="char-counter"
                  className="text-xs text-gray-500 mt-1.5 text-right px-1"
                  aria-live="polite"
                >
                  {charCount} / {MAX_CHARS}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}