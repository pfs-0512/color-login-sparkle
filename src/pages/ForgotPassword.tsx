
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import CocopitaLogo from "@/components/CocopitaLogo";
import { Button } from "@/components/ui/button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "エラー",
        description: "メールアドレスを入力してください。",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would call an API to send a password reset email
    toast({
      title: "送信完了",
      description: "パスワード再設定メールを送信しました。",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-cocopita-lightpink">
      <div className="w-full max-w-md">
        <CocopitaLogo />
        
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <h1 className="text-xl font-bold text-center mb-6">パスワードを忘れた方</h1>
          
          <p className="text-sm text-gray-700 mb-6">
            パスワードを再設定するためのご案内をメールにてお送りいたします。
            ご登録のメールアドレスを入力してください。
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                ご登録のメールアドレス
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
            
            <Button 
              type="submit" 
              className="w-full bg-orange-500 hover:bg-orange-600 flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" />
              パスワード再設定メールを送信
            </Button>
            
            <div className="border-t border-gray-200 pt-4 mt-4">
              <Button
                type="button"
                variant="secondary"
                className="w-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center gap-2"
                asChild
              >
                <Link to="/">
                  <ArrowLeft className="h-4 w-4" />
                  ログインページにもどる
                </Link>
              </Button>
            </div>
          </form>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2025 COCOPiTA All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
