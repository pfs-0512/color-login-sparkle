
import React from "react";
import { Asterisk } from "lucide-react";

interface RequiredLabelProps {
  children: React.ReactNode;
}

const RequiredLabel = ({ children }: RequiredLabelProps) => (
  <div className="flex items-center gap-1">
    <span className="block text-sm font-medium text-gray-700">{children}</span>
    <span className="text-red-500 mr-1">◆</span>
    <Asterisk className="h-3 w-3 text-red-500" />
  </div>
);

export default RequiredLabel;
