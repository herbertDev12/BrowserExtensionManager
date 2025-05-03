import CustomButton from "./ui/CustomButton";

export default function FiterBar(){
    return (
        <div className="fixed z-50 top-[25%] left-[50%] transform flex -translate-x-1/2 -translate-y-1/2 gap-2
                 md:top-[20%] md:left-[75%] md:-translate-x-1/3 md:-translate-y-1/5
                 lg:top-[20%] lg:left-[70%] lg:-translate-x-1 lg:-translate-y-1/5">
            <CustomButton buttonName="All"/>
            <CustomButton buttonName="Active"/>
            <CustomButton buttonName="Inactive"/>
        </div>
    )
}