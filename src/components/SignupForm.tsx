
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { 
  NameFields, 
  EmailField, 
  PhoneField, 
  PostalCodeField,
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
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // 郵便番号から住所を取得する関数
  const fetchAddress = async () => {
    // 郵便番号からハイフンを除去
    const cleanedPostalCode = postalCode.replace(/-/g, "");
    
    if (cleanedPostalCode.length !== 7) {
      toast({
        title: "エラー",
        description: "有効な郵便番号を入力してください（7桁）",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${cleanedPostalCode}`);
      const data = await response.json();
      
      if (data.status === 200 && data.results) {
        const addressData = data.results[0];
        const fullAddress = `${addressData.address1}${addressData.address2}${addressData.address3}`;
        
        setAddress(fullAddress);
        toast({
          title: "住所取得完了",
          description: "郵便番号から住所を取得しました",
        });
      } else {
        toast({
          title: "住所取得エラー",
          description: "郵便番号に該当する住所が見つかりませんでした",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("住所取得エラー:", error);
      toast({
        title: "エラー",
        description: "住所の取得中にエラーが発生しました",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
      postalCode,
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
          
          <PostalCodeField 
            postalCode={postalCode} 
            setPostalCode={setPostalCode} 
            fetchAddress={fetchAddress}
            isLoading={isLoading}
          />
          
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
