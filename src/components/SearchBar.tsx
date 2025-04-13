import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center border border-[#5A5A5A] rounded-sm px-3 py-2 w-full shadow-sm bg-[#2C2E334D]">
      <Search className="mr-2" size={20} />
      <input
        type="text"
        placeholder="Search"
        className="outline-none w-full text-sm"
      />
    </div>
  );
}
