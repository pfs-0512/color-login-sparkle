import React from "react";
import { Input } from "@/components/ui/input";
import { Mail, User, Phone, Home, Lock, MessageSquare, Search } from "lucide-react";
import RequiredLabel from "./RequiredLabel";

// 名前フィールド (姓・名)
interface NameFieldsProps {
  lastName: string;
  setLastName: (value: string) => void;
  firstName: string;
  setFirstName: (value: string) => void;
}

export const NameFields = ({ lastName, setLastName, firstName, setFirstName }: NameFieldsProps) => (
  <div className="grid grid-cols-2 gap-4">
    <div className="space-y-2">
      <RequiredLabel>姓</RequiredLabel>
      <Input
        id="lastName"
        type="text"
        placeholder="山田"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="border-gray-300 focus:border-cocopita-green focus:ring-cocopita-green"
        required
      />
    </div>
    
    <div className="space-y-2">
      <RequiredLabel>名</RequiredLabel>
      <Input
        id="firstName"
        type="text"
        placeholder="太郎"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="border-gray-300 focus:border-cocopita-green focus:ring-cocopita-green"
        required
      />
    </div>
  </div>
);

// メールアドレスフィールド
interface EmailFieldProps {
  email: string;
  setEmail: (value: string) => void;
}

export const EmailField = ({ email, setEmail }: EmailFieldProps) => (
  <div className="space-y-2">
    <RequiredLabel>メールアドレス</RequiredLabel>
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
        required
      />
    </div>
  </div>
);

// 電話番号フィールド
interface PhoneFieldProps {
  phone: string;
  setPhone: (value: string) => void;
}

export const PhoneField = ({ phone, setPhone }: PhoneFieldProps) => (
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
);

// 郵便番号フィールド
interface PostalCodeFieldProps {
  postalCode: string;
  setPostalCode: (value: string) => void;
  fetchAddress: () => void;
  isLoading: boolean;
}

export const PostalCodeField = ({ postalCode, setPostalCode, fetchAddress, isLoading }: PostalCodeFieldProps) => (
  <div className="space-y-2">
    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
      郵便番号
    </label>
    <div className="relative flex items-center">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <Input
        id="postalCode"
        type="text"
        placeholder="123-4567"
        className="pl-10 border-gray-300 focus:border-cocopita-green focus:ring-cocopita-green flex-1"
        value={postalCode}
        onChange={(e) => {
          const value = e.target.value.replace(/[^\d-]/g, '');
          setPostalCode(value);
        }}
      />
      <button
        type="button"
        onClick={fetchAddress}
        disabled={postalCode.length < 7 || isLoading}
        className="ml-2 px-4 py-2 bg-cocopita-green text-white rounded-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? '検索中...' : '住所検索'}
      </button>
    </div>
    <p className="text-xs text-gray-500">郵便番号を入力して住所を自動取得できます（例: 123-4567）</p>
  </div>
);

// 住所フィールド
interface AddressFieldProps {
  address: string;
  setAddress: (value: string) => void;
}

export const AddressField = ({ address, setAddress }: AddressFieldProps) => (
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
);

// ニックネームフィールド
interface NicknameFieldProps {
  nickname: string;
  setNickname: (value: string) => void;
}

export const NicknameField = ({ nickname, setNickname }: NicknameFieldProps) => (
  <div className="space-y-2">
    <RequiredLabel>ニックネーム</RequiredLabel>
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
        required
      />
    </div>
  </div>
);

// パスワードフィールド
interface PasswordFieldsProps {
  password: string;
  setPassword: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
}

export const PasswordFields = ({ password, setPassword, confirmPassword, setConfirmPassword }: PasswordFieldsProps) => (
  <>
    <div className="space-y-2">
      <RequiredLabel>パスワード</RequiredLabel>
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
          required
        />
      </div>
    </div>

    <div className="space-y-2">
      <RequiredLabel>パスワード（確認のためもう一度）</RequiredLabel>
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
          required
        />
      </div>
    </div>
  </>
);

// 紹介コードフィールド
interface ReferralCodeFieldProps {
  referralCode: string;
  setReferralCode: (value: string) => void;
}

export const ReferralCodeField = ({ referralCode, setReferralCode }: ReferralCodeFieldProps) => (
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
);
