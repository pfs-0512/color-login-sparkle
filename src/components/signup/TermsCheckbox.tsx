
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

interface TermsCheckboxProps {
  agreeToTerms: boolean;
  setAgreeToTerms: (value: boolean) => void;
}

const TermsCheckbox = ({ agreeToTerms, setAgreeToTerms }: TermsCheckboxProps) => (
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
        <Link 
          to="/terms" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-cocopita-blue hover:underline"
        >
          利用規約
        </Link>
        と
        <Link 
          to="/privacy" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-cocopita-blue hover:underline"
        >
          プライバシーポリシー
        </Link>
        に同意します
      </Label>
    </div>
  </div>
);

export default TermsCheckbox;
