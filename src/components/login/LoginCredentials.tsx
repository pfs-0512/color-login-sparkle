
import React from "react";
import { Input } from "@/components/ui/input";
import { Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

interface LoginCredentialsProps {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handlePasswordResetClick: () => void;
}

const LoginCredentials = ({ 
  email, 
  setEmail, 
  password, 
  setPassword,
  handlePasswordResetClick
}: LoginCredentialsProps) => {
  return (
    <div className="space-y-5">
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

      <div className="text-right mb-4">
        <Link 
          to="/forgot-password" 
          className="text-cocopita-blue hover:underline text-sm"
        >
          パスワードをお忘れですか？
        </Link>
      </div>
    </div>
  );
};

export default LoginCredentials;
