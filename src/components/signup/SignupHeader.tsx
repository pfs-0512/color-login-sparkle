
import React from "react";

const SignupHeader = () => (
  <>
    <div className="text-center mb-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">新規ユーザー登録</h2>
    </div>
    
    <p className="text-gray-600 mb-5">
      以下の必要事項にご入力の上、「登録する」ボタンを押してください。
      <span className="text-red-500 ml-1">
        <span className="text-red-500 inline-block h-3 w-3">*</span> 印は必須項目です
      </span>
    </p>
  </>
);

export default SignupHeader;
