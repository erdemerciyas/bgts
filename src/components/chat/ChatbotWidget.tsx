'use client';

import { useChat, Message } from 'ai/react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipDismissedRef = useRef(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen && !tooltipDismissedRef.current) {
                setShowTooltip(true);
            }
        }, 2000);
        return () => clearTimeout(timer);
    }, [isOpen]);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
        api: '/api/chat',
        initialMessages: [
            {
                id: '1',
                role: 'assistant',
                content: 'Merhaba! Ben BGTS dijital asistanıyım. Size hizmetlerimiz veya ürünlerimiz hakkında nasıl yardımcı olabilirim?',
            },
        ],
    });

    // Auto-scroll to bottom of messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="mb-4 flex h-[600px] max-h-[85vh] w-[380px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200"
                    >
                        {/* Header */}
                        <div className="relative flex items-center justify-between bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 px-5 py-4 text-white">
                            <div className="flex items-center gap-3">
                                <div className="flex relative h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                    <Bot className="h-6 w-6 text-white" />
                                    <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-slate-900"></span>
                                    </span>
                                </div>
                                <div>
                                    <h3 className="font-semibold leading-none text-white flex items-center gap-1.5">
                                        Dijital Asistan <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
                                    </h3>
                                    <p className="mt-1 text-xs text-blue-100">BGTS Yapay Zeka Destekli Asistan</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                                aria-label="Kapat"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto bg-gray-50/50 p-4 space-y-4 custom-scrollbar">
                            {messages.map((message: Message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex max-w-[85%] gap-2 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        {/* Avatar */}
                                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${message.role === 'user' ? 'bg-orange-500' : 'bg-blue-700'}`}>
                                            {message.role === 'user' ? (
                                                <User className="h-4 w-4 text-white" />
                                            ) : (
                                                <Bot className="h-4 w-4 text-white" />
                                            )}
                                        </div>

                                        {/* Message Bubble */}
                                        <div
                                            className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${message.role === 'user'
                                                ? 'bg-orange-500 text-white rounded-tr-sm'
                                                : 'bg-white text-gray-800 ring-1 ring-gray-100 rounded-tl-sm prose prose-sm prose-blue max-w-none prose-p:leading-relaxed prose-pre:p-0'
                                                }`}
                                        >
                                            {message.role === 'user' ? (
                                                <div style={{ whiteSpace: 'pre-wrap' }}>{message.content}</div>
                                            ) : (
                                                <ReactMarkdown
                                                    components={{
                                                        a: ({ node, ...props }) => {
                                                            // If it's a relative link, use Next.js Link
                                                            if (props.href && props.href.startsWith('/')) {
                                                                return (
                                                                    <Link href={props.href} className="font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors" prefetch={false}>
                                                                        {props.children}
                                                                    </Link>
                                                                );
                                                            }
                                                            // Otherwise regular external link
                                                            return (
                                                                <a {...props} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                                                                    {props.children}
                                                                </a>
                                                            );
                                                        },
                                                    }}
                                                >
                                                    {message.content}
                                                </ReactMarkdown>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="flex gap-2">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-700">
                                            <Bot className="h-4 w-4 text-white" />
                                        </div>
                                        <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-white px-4 py-3 ring-1 ring-gray-100 shadow-sm">
                                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400 [animation-delay:-0.3s]"></span>
                                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400 [animation-delay:-0.15s]"></span>
                                            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400"></span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {error && (
                                <div className="flex justify-center">
                                    <div className="rounded-xl bg-red-50 px-4 py-2 text-xs text-red-600 ring-1 ring-red-100">
                                        Bağlantı hatası oluştu. Lütfen tekrar deneyin.
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="bg-white p-4 border-t border-gray-100">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    if (input.trim()) handleSubmit(e);
                                }}
                                className="relative flex items-end gap-2"
                            >
                                <div className="relative flex-1">
                                    <textarea
                                        rows={1}
                                        value={input}
                                        onChange={handleInputChange}
                                        placeholder="Bir soru sorun..."
                                        className="block w-full resize-none rounded-xl border-gray-200 bg-gray-50 py-3 pl-4 pr-12 text-sm text-gray-900 focus:border-blue-500 focus:bg-white focus:ring-blue-500 transition-colors"
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                e.preventDefault();
                                                if (input.trim()) handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
                                            }
                                        }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:hover:bg-blue-600"
                                >
                                    {isLoading ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                    ) : (
                                        <Send className="h-4 w-4 ml-0.5" />
                                    )}
                                    <span className="sr-only">Gönder</span>
                                </button>
                            </form>
                            <div className="mt-2 text-center">
                                <p className="text-[10px] text-gray-400">Yapay Zeka tarafından desteklenmektedir.</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FAB Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            setIsOpen(true);
                            setShowTooltip(false);
                        }}
                        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-xl shadow-blue-500/30 transition-shadow hover:shadow-2xl hover:shadow-blue-500/40 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                        aria-label="Sohbeti Aç"
                    >
                        <MessageSquare className="h-6 w-6 text-white transition-transform duration-300 group-hover:-rotate-12" />
                        <span className="absolute -right-1 -top-1 flex h-4 w-4">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500 border-2 border-white"></span>
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Welcome Tooltip */}
            <AnimatePresence>
                {!isOpen && showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-[4.5rem] right-0 w-64 bg-white rounded-2xl p-4 shadow-xl border border-blue-50 flex gap-3 origin-bottom-right z-[-1] cursor-pointer"
                        onClick={() => {
                            setIsOpen(true);
                            setShowTooltip(false);
                            tooltipDismissedRef.current = true;
                        }}
                    >
                        {/* Little triangle arrow pointing down */}
                        <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white border-b border-r border-blue-50 transform rotate-45"></div>

                        <div className="bg-blue-50 rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                            <Bot className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1 mt-0.5">
                            <p className="text-sm text-gray-800 font-semibold mb-1">
                                Merhaba! 👋
                            </p>
                            <p className="text-xs text-gray-500 leading-snug">
                                Size şirketimiz hakkında nasıl yardımcı olabilirim?
                            </p>
                        </div>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowTooltip(false);
                                tooltipDismissedRef.current = true;
                            }}
                            className="text-gray-400 hover:text-gray-600 shrink-0 self-start p-1 -mt-1 -mr-2"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
