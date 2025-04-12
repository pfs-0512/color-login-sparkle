import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "@/components/ui/image";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is just for demonstration purposes
    if (email && password) {
      toast({
        title: "ログイン成功",
        description: "ダッシュボードへリダイレクトします。",
      });
    } else {
      toast({
        title: "ログイン失敗",
        description: "メールアドレスとパスワードを入力してください。",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="login-card p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">ログイン</h2>
          <p className="text-gray-600 text-sm">アカウント情報を入力してください</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              メールアドレス
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="email"
                type="email"
                placeholder="example@cocopita.jp"
                className="pl-10 border-gray-300 focus:border-cocopita-green focus:ring-cocopita-green"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              パスワード
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-10 border-gray-300 focus:border-cocopita-green focus:ring-cocopita-green"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full btn-blue flex items-center justify-center gap-2 py-6 text-base"
          >
            <LogIn className="h-5 w-5" />
            ログイン
          </Button>

          <div className="text-center text-sm space-y-3 pt-2">
            <p className="text-right border-b border-gray-300 pb-2">
              <a href="#" className="text-cocopita-blue hover:underline">
                パスワードをお忘れですか？
              </a>
            </p>
            <Button 
              variant="outline" 
              className="w-full mt-3"
            >
              新規登録
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <h3 className="text-lg font-bold text-gray-800">紹介ムービー</h3>
            <Image 
              src="/lovable-uploads/3b67550b-144e-4c48-b504-dbb857ce5220.png" 
              alt="紹介ムービー" 
              className="w-12 h-12 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
