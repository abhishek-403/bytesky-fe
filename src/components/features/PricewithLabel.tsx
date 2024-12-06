import { cn } from "@/lib/utils";

type PricewithLabelProps = {
    price : string ;
    label : string ;
    className? : string ;
}

export function PricewithLabel({price , label , className} : PricewithLabelProps) {
  return (
    <div className = {cn("flex flex-col gap-4 pr-2 pb-2 pt-2" , className)}>
        <div className="text-[#ff6522] font-semibold text-5xl">
            {price}
        </div>
        <div className="text-gray-200 text-xl">
            {label}
        </div>
    </div>
  )
}