
import { useEffect } from "react";
import LoginForm from "@/components/LoginForm";
import CocopitaLogo from "@/components/CocopitaLogo";

const Index = () => {
  // This effect logs the page load
  useEffect(() => {
    console.log("Login page loaded");
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-cocopita-lightpink">
      <div className="w-full max-w-md">
        <CocopitaLogo />
        <LoginForm />
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2025 COCOPiTA All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
