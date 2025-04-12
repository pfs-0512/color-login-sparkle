
import React from "react";
import Image from "@/components/ui/image";

const CocopitaLogo = () => {
  return (
    <div className="text-center mb-6 flex justify-center items-center">
      <Image 
        src="/lovable-uploads/8ea52db0-c39c-475b-a84c-aa880f74b351.png" 
        alt="CocopitaLogo" 
        className="max-h-20 object-contain" // Changed from max-h-24 to max-h-20
      />
    </div>
  );
};

export default CocopitaLogo;

