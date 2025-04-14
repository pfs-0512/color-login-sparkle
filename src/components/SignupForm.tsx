
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { 
  NameFields, 
  EmailField, 
  PhoneField, 
  AddressField, 
  NicknameField, 
  PasswordFields, 
  ReferralCodeField 
} from "./signup/FormFields";
import TermsCheckbox from "./signup/TermsCheckbox";
import SignupHeader from "./signup/SignupHeader";

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
    if (!lastName || !firstName || !email || !nickname || !password || !confirmPassword) {
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
        <SignupHeader />
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <NameFields 
            lastName={lastName}
            setLastName={setLastName}
            firstName={firstName}
            setFirstName={setFirstName}
          />

          <EmailField email={email} setEmail={setEmail} />
          
          <PhoneField phone={phone} setPhone={setPhone} />
          
          <AddressField address={address} setAddress={setAddress} />
          
          <NicknameField nickname={nickname} setNickname={setNickname} />
          
          <PasswordFields 
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
          
          <ReferralCodeField referralCode={referralCode} setReferralCode={setReferralCode} />

          <TermsCheckbox agreeToTerms={agreeToTerms} setAgreeToTerms={setAgreeToTerms} />

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
