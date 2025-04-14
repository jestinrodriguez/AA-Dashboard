import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getIntroOfPage = (label: string) => {
  if (label === "January") {
    return "Higher car charging demand as cold weather reduces battery efficiency.";
  }
  if (label === "February") {
    return "Consistent charging activity, with a focus on maintaining battery health in lower temperatures.";
  }
  if (label === "March") {
    return "Gradual increase in charging as vehicles prepare for longer commutes in spring.";
  }
  if (label === "April") {
    return "More frequent charging sessions as electric vehicles are used for road trips during the spring break.";
  }
  if (label === "May") {
    return "Increased car charging for vacations and longer weekend trips.";
  }
  if (label === "June") {
    return "Peak charging demand due to summer road trips and extended daylight hours.";
  }
  return "";
};