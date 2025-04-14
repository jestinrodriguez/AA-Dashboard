import { getIntroOfPage } from "../lib/utils";

interface CustomPayloadItem {
    name: string;
    value: string | number;
    [key: string]: any; 
  }
  
  interface CustomTooltipProps {
    active?: boolean;
    payload?: CustomPayloadItem[];
    label?: string;
  }
  
  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="bg-[#2c2d2f] p-2 sm:p-3 rounded-md shadow-lg w-full max-w-[50vw] sm:max-w-xs transition-all duration-200 ease-out animate-fadeIn border border-[#3b3c3f]">
      <p className="text-[10px] sm:text-xs text-[#e4e4e7] font-medium mb-1">
        {label}
      </p>
      <p className="text-base sm:text-lg font-bold text-[#C8E972] flex items-center gap-1 mb-1">
        ⚡ {payload[0].value}
      </p>
      <p className="text-[10px] sm:text-xs text-[#a1a1aa] mb-1">
        {getIntroOfPage(label ?? '')}
      </p>
      <p className="text-[10px] sm:text-xs text-[#d1d1d6] italic leading-tight">
        View energy trend insights for this month.
      </p>
    </div>
  );
};

export default CustomTooltip;
