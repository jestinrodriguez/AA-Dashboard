import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center border border-gray-300 rounded-2xl px-3 py-2 w-full max-w-md shadow-sm">
      <Search className="text-gray-400 mr-2" size={20} />
      <input
        type="text"
        placeholder="Search..."
        className="outline-none w-full text-sm bg-transparent"
      />
    </div>
  );
}
