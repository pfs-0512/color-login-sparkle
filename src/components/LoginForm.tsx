
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import LoginHeader from "@/components/login/LoginHeader";
import LoginCredentials from "@/components/login/LoginCredentials";
import LoginButton from "@/components/login/LoginButton";
import VideoDialog from "@/components/login/VideoDialog";
import LinksSection from "@/components/login/LinksSection";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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

  const handlePasswordResetClick = () => {
    window.location.href = "https://onelinavi.com/password_reset.html";
  };

  const openLinkInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="login-card p-8">
        <LoginHeader />

        <form onSubmit={handleSubmit} className="space-y-5">
          <LoginCredentials 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handlePasswordResetClick={handlePasswordResetClick}
          />

          <LoginButton />

          <VideoDialog 
            isOpen={isVideoOpen}
            setIsOpen={setIsVideoOpen}
          />

          <LinksSection openLinkInNewTab={openLinkInNewTab} />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
