
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, User, Phone, Home, Lock, MessageSquare, UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // バリデーション
    if (!lastName || !firstName || !email || !phone || !address || !password || !confirmPassword) {
      toast({
        title: "入力エラー",
        description: "必須項目をすべて入力してください。",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "パスワードエラー",
        description: "パスワードと確認用パスワードが一致しません。",
        variant: "destructive",
      });
      return;
    }
    
    if (!agreeToTerms) {
      toast({
        title: "利用規約エラー",
        description: "利用規約とプライバシーポリシーに同意してください。",
        variant: "destructive",
      });
      return;
    }

    // 登録処理（デモ用）
    toast({
      title: "登録完了",
      description: "ユーザー登録が完了しました。",
    });
    
    // 実際にはAPI呼び出しなどで登録処理を行う
    console.log({
      lastName,
      firstName,
      email,
      phone,
      address,
      nickname,
      password,
      referralCode,
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="signup-card p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">新規ユーザー登録</h2>
          <p className="text-cocopita-blue text-sm">[新規登録・ポイントチャージご利用方法]</p>
        </div>
        
        <p className="text-gray-600 mb-6">
          以下の必要事項にご入力の上、「登録する」ボタンを押してください。
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                姓
              </label>
              <Input
                id="lastName"
                type="text"
                placeholder="山田"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border-gray-300 focus:border-cocopita-green focus:ring-cocopita-green"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                名
              </label>
              <Input
                id="firstName"
                type="text"
                placeholder="太郎"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border-gray-300 focus:border-cocopita-green focus:ring-cocopita-green"
              />
            </div>
          </div>

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
                placeholder="info@example.com"
                className="pl-10 border-gray-300 focus:border-cocopita-green focus:ring-cocopita-green"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              電話番号
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="phone"
                type="tel"
                placeholder="09012345678"
                className="pl-10 border-gray-300 focus:border-cocopita-green focus:ring-cocopita-green"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              住所
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Home className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="address"
                type="text"
                placeholder="東京都新宿区西新宿1-2-3"
                className="pl-10 border-gray-300 focus:border-cocopita-green focus:ring-cocopita-green"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="nickname" className="block text-sm font-medium text-gray-700">
              ニックネーム
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="nickname"
                type="text"
                placeholder=""
                className="pl-10 border-gray-300 focus:border-cocopita-green focus:ring-cocopita-green"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
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
                placeholder=""
                className="pl-10 border-gray-300 focus:border-cocopita-green focus:ring-cocopita-green"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              パスワード（確認のためもう一度）
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="confirmPassword"
                type="password"
                placeholder=""
                className="pl-10 border-gray-300 focus:border-cocopita-green focus:ring-cocopita-green"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700">
              紹介コード（お持ちの方のみ）
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MessageSquare className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="referralCode"
                type="text"
                placeholder=""
                className="pl-10 border-gray-300 focus:border-cocopita-green focus:ring-cocopita-green"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-start space-x-2 mt-4">
            <Checkbox 
              id="terms" 
              checked={agreeToTerms}
              onCheckedChange={(checked) => {
                setAgreeToTerms(checked as boolean);
              }}
            />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="terms"
                className="text-sm font-normal text-gray-700 cursor-pointer"
              >
                <span className="text-cocopita-blue">利用規約</span>と<span className="text-cocopita-blue">プライバシーポリシー</span>に同意します
              </Label>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-orange-400 hover:bg-orange-500 focus:ring-offset-orange-500 flex items-center justify-center gap-2 py-6 text-base mt-6"
          >
            登録する
          </Button>

          <div className="text-center mt-4">
            <Link 
              to="/" 
              className="text-cocopita-blue hover:underline text-sm"
            >
              すでにアカウントをお持ちの方はこちら
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
