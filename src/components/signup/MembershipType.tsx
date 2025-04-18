
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface MembershipTypeProps {
  membershipType: string;
  setMembershipType: (value: string) => void;
}

const MembershipType = ({ membershipType, setMembershipType }: MembershipTypeProps) => {
  return (
    <RadioGroup
      value={membershipType}
      onValueChange={setMembershipType}
      className="space-y-3 mb-4"
    >
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="current" id="current" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="current" className="text-sm font-normal text-gray-700">
            現PTA会員
          </Label>
        </div>
      </div>

      <div className="flex items-start space-x-2">
        <RadioGroupItem value="past" id="past" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="past" className="text-sm font-normal text-gray-700">
            過去にPTA会員に在籍（賛助会員として新規に参加する）
            <p className="text-xs text-gray-500 mt-1">※賛助会員に対する費用は一切発生いたしません。</p>
          </Label>
        </div>
      </div>

      <div className="flex items-start space-x-2">
        <RadioGroupItem value="new" id="new" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="new" className="text-sm font-normal text-gray-700">
            賛助会員として新規に参加する
            <p className="text-xs text-gray-500 mt-1">※賛助会員に対する費用は一切発生いたしません。</p>
          </Label>
        </div>
      </div>

      <div className="flex items-start space-x-2">
        <RadioGroupItem value="without_membership" id="without_membership" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="without_membership" className="text-sm font-normal text-gray-700">
            賛助会員として入会せずにココピタを利用する
          </Label>
        </div>
      </div>
    </RadioGroup>
  );
};

export default MembershipType;
