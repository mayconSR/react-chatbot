'use client';

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useChat } from "ai/react";


export function Chat() {

  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>React Chatbot</CardTitle>
        <CardDescription>Implementado com IA</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 overflow-y-scroll h-full">
        {messages.map((message, index) => (
          <div key={message.id} className="flex gap-2 text-slate-600 text-small items-start">
            {message.role === 'user' && (
              <Avatar className="mt-2">
                <AvatarFallback>Maycon</AvatarFallback>
                <AvatarImage src='https://github.com/mayconsr.png' />
              </Avatar>
            )}
            {message.role === 'assistant' && (
              <Avatar className="mt-2">
                <AvatarFallback>🤖</AvatarFallback>
                <AvatarImage src='' />
              </Avatar>
            )}
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">{message.role === 'user' ? 'Usuario' : 'Ai'}</span>
              {message.content}
            </p>
          </div>
        ))}
      </CardContent>
      <CardFooter className="space-x-2">
        <form className="flex gap-2 w-full" onSubmit={handleSubmit}>
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Digite sua mensagem..."
            className="flex-1"
          />
          <Button type="submit" className="flex-shrink-0">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  )
}