
import React from "react";

const SignupHeader = () => (
  <>
    <div className="text-center mb-5">
      <p className="text-cocopita-orange font-bold text-2xl mb-2">
        PTA会員向け800円プラン<br />
        お申込みフォーム
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">新規ユーザー登録</h2>
      <p className="text-sm text-gray-600 mt-2">
        ※お申込み後、2ヶ月無料でご利用いただけます。<br />
        （プランの変更に関しては加入後に500円・300円プランに変更可能です。）
      </p>
    </div>
    
    <p className="text-gray-600 mb-5">
      以下の必要事項をご入力の上、登録ボタンを押してください。
      <span className="text-red-500 ml-1">
        <span className="text-red-500 inline-block h-3 w-3">*</span> 印は必須項目です
      </span>
    </p>
  </>
);

export default SignupHeader;

