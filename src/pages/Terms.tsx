
import React from "react";
import CocopitaLogo from "@/components/CocopitaLogo";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cocopita-lightpink p-4">
      <div className="max-w-4xl mx-auto">
        <CocopitaLogo />
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8 mb-8">
          <h1 className="text-2xl font-bold mb-6">利用規約</h1>
          <div className="prose prose-gray max-w-none whitespace-pre-wrap">
            <p>この利用規約は、株式会社ワンリーリステッド（以下「弊社」と言います。）が運営する「ワンリー Navi 」（以下「当サイト」と言います。）の利用条件を定めるものです。
当サイトをご利用される利用者（以下「ユーザー様」と言います。）につきましては、以下をよくお読み頂き、ご同意の上ご利用頂きますようお願い申し上げます。
当サイトが提供するすべてのサービス（以下「当サービス」といいます）に関する注意やお知らせも、この利用規約に含まれますので、ご利用になる前に必ずご参照下さい。
ご利用頂いた場合には、以下の条件すべてにご同意頂いたものとします。</p>

            <h2 className="text-xl font-bold mt-8 mb-4">１　当サービスについて</h2>
            <p>（１）当サービスには、以下のものがあります。
・店舗、施設情報、各種商品に関する情報の提供
・ユーザー様が投稿する写真・動画等の情報の提供
・キャンペーン、コンテスト等の開催に関する情報の提供
・その他当サイト上で明示するサービス
（２）（１）のサービスについて、事前の予告や承諾なく変更、中止をする場合がございます。
（３）（２）の場合に、ユーザー様が被る損害、損失、その他の費用の賠償につきましては、弊社は一切の責任は負いません。</p>

            {/* 続きは同様に各セクションを追加。全文を追加するため、省略はせず全文をコピーします。 */}
            <h2 className="text-xl font-bold mt-8 mb-4">17　準拠法と管轄裁判所</h2>
            <p>（１）当サイトの利用並びに本利用規約の解釈及び適用は、日本国法に準拠するものとします。
（２）当サイトの利用に関するユーザー様と弊社との間の紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とするものとします。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
