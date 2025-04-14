
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

interface LinksSectionProps {
  openLinkInNewTab: (url: string) => void;
}

const LinksSection = ({ openLinkInNewTab }: LinksSectionProps) => {
  return (
    <div className="text-center text-sm space-y-3 pt-2">
      <Separator className="mb-3" />
      <div className="flex flex-col space-y-2">
        <Button 
          onClick={() => openLinkInNewTab('https://onelilisted.com/user-manual/')}
          variant="outline" 
          className="w-full"
          type="button"
        >
          新規登録・ポイントチャージご利用方法
        </Button>
        <Button 
          onClick={() => openLinkInNewTab('https://onelinavi.com/terms.html')}
          variant="outline" 
          className="w-full"
          type="button"
        >
          利用規約
        </Button>
        <Button 
          onClick={() => openLinkInNewTab('https://onelinavi.com/privacy.html')}
          variant="outline" 
          className="w-full"
          type="button"
        >
          プライバシーポリシー
        </Button>
        <Link to="/signup">
          <Button 
            variant="outline" 
            className="w-full mt-3"
            type="button"
          >
            新規登録
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LinksSection;
