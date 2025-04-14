
import React from "react";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

interface LoginButtonProps {
  type?: "button" | "submit" | "reset";
}

const LoginButton = ({ type = "submit" }: LoginButtonProps) => {
  return (
    <Button 
      type={type}
      className="w-full btn-blue flex items-center justify-center gap-2 py-6 text-base"
    >
      <LogIn className="h-5 w-5" />
      ログイン
    </Button>
  );
};

export default LoginButton;
