
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "@/components/ui/image";

interface VideoDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const VideoDialog = ({ isOpen, setIsOpen }: VideoDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="mt-4 flex items-center justify-center gap-4 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setIsOpen(true)}>
          <h3 className="text-sm font-bold text-gray-800">紹介ムービーはこちら</h3>
          <Image 
            src="/lovable-uploads/3b67550b-144e-4c48-b504-dbb857ce5220.png" 
            alt="紹介ムービー" 
            className="w-8 h-8 object-cover rounded-md cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[850px] p-0">
        <div className="responsive-video">
          <iframe 
            src="https://www.youtube.com/embed/RCPM4nh6Oxw?autoplay=1" 
            title="COCOPiTA 紹介ムービー" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="w-full aspect-video h-[500px]"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;
