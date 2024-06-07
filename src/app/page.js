import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>React Chatbot</CardTitle>
          <CardDescription>Implementado com IA</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex gap-2 text-slate-600 text-small items-start">
            <Avatar className="mt-2">
              <AvatarFallback>MS</AvatarFallback>
              <AvatarImage src="https://github.com/mayconsr.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">Usuario</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a molestie justo. Proin in iaculis est. Sed volutpat sit amet lorem at convallis. Mauris porta maximus magna ut tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
          <div className="flex gap-2 text-slate-600 text-small items-start">
            <Avatar className="mt-2">
              <AvatarFallback>🤖</AvatarFallback>
              <AvatarImage src="https://avatars.dicebear.com/api/avataaars/1234.svg" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">REACTBOT</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a molestie justo. Proin in iaculis est. Sed volutpat sit amet lorem at convallis. Mauris porta maximus magna ut tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="Digite sua mensagem" />
          <Button>Enviar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
