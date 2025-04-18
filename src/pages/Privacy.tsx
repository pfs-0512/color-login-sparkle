
import React from "react";
import CocopitaLogo from "@/components/CocopitaLogo";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cocopita-lightpink p-4">
      <div className="max-w-4xl mx-auto">
        <CocopitaLogo />
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8 mb-8">
          <h1 className="text-2xl font-bold mb-6">プライバシーポリシー</h1>
          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-bold mt-8 mb-4">1.基本方針</h2>
            <p>株式会社ワンリーリステッド（以下、当社）は、個人の権利・利益を保護するために、個人情報を適切に管理することを社会的責務と考えます。個人情報保護に関する方針を以下のとおり定め、従業員及び関係者に周知徹底を図り、これまで以上に個人情報保護に努めます。</p>

            <div className="mt-4">
              <p>個人情報の収集・利用・提供　個人情報を保護・管理する体制を確立し、適切な個人情報の収集、利用および提供に関する内部規則を定め、これを遵守します。</p>
              <p>個人情報の安全対策　個人情報への不正アクセス、個人情報の紛失、破壊、改ざんおよび漏洩などに関する万全の予防措置を講じます。万一の問題発生時には速やかな是正対策を実施します。</p>
              {/* Continue with all sections... */}
            </div>

            <div className="mt-8">
              <p className="font-bold">株式会社ワンリーリステッド</p>
              <p>東京都新宿区西新宿4－31－3　永谷リヴュール新宿5階</p>
              <p>TEL：03-4400－9263</p>
              <p>個人情報保護相談窓口</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
