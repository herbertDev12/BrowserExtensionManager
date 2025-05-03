interface CustomButtonProps{
  buttonName : string
}

export default function CustomButton({buttonName} : CustomButtonProps) {
  return (
    <button className="
      w-full max-w-xs md:max-w-md lg:max-w-lg 
      h-12                                    
      bg-black text-black                      
      shadow-md                               
      !rounded-full         
      font-bold text-lg                        
      flex items-center justify-center         
      px-6 py-3                                           
      ">
      {buttonName}
    </button>
  );
}


