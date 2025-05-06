import CustomButton from "./ui/CustomButton";

interface ExtensionCardProps {
  cardName: string;
  imageSrc: string;
  cardDescription: string;
}

export default function ExtensionCard({
  cardName,
  imageSrc,
  cardDescription
}: ExtensionCardProps) {
  return (
    <div className="w-85 min-h-48 bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 
                   grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto] gap-x-4 relative">
      
      <div className="row-span-2">
        <img 
          src={imageSrc}
          alt={cardName}
          className="w-16 h-16 object-contain rounded-lg"
        />
      </div>

      
      <h3 className="text-xl font-semibold text-gray-800 col-start-2">
        {cardName}
      </h3>
      
      <p className="text-gray-600 text-sm leading-relaxed col-start-2 
                   -pl-4 border-l-2 border-white -mt-6">
        {cardDescription}
      </p>

      <div className="absolute bottom-4 left-[calc(5px_+_10px)]"> 
        
        <CustomButton
          buttonName="Remove"
          
        />
      </div>
    </div>
  );
}