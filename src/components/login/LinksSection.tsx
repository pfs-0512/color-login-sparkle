
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const LinksSection = () => {
  return (
    <div className="text-center text-sm space-y-3 pt-2">
      <Separator className="mb-3" />
      <div className="flex flex-col space-y-2">
        <a 
          href="https://onelilisted.com/user-manual/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground"
        >
          新規登録・ポイントチャージご利用方法
        </a>
        <a 
          href="https://onelinavi.com/terms.html"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground"
        >
          利用規約
        </a>
        <a 
          href="https://onelinavi.com/privacy.html"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground"
        >
          プライバシーポリシー
        </a>
        <Link to="/signup">
          <button 
            className="w-full px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors border border-input bg-background hover:bg-accent hover:text-accent-foreground mt-3"
            type="button"
          >
            新規登録
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LinksSection;
