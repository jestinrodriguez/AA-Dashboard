import { Check, Plus, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";
import { useCategoryStore } from "../store/useCategoryStore";
import { Button } from "./ui/button";
import { useRef } from "react";

type CategorySet1 = "Carbon 1" | "Co2 Distribution" | "Fleet sizing";
type CategorySet2 = "Parking rate" | "Border rate" | "Request rate";
type CategorySet3 = "Variable 1" | "Variable 2" | "Variable 3";
type CategorySet4 = "Variable X" | "Variable Y" | "Variable Z";

const CategorySelector: React.FC = () => {
  const {
    selectedCategoriesSet1,
    setSelectedCategoriesSet1,
    selectedCategoriesSet2,
    setSelectedCategoriesSet2,
    selectedCategoriesSet3,
    setSelectedCategoriesSet3,
    selectedCategoriesSet4,
    setSelectedCategoriesSet4,
  } = useCategoryStore();

  const categoriesSet1: CategorySet1[] = [
    "Carbon 1",
    "Co2 Distribution",
    "Fleet sizing",
  ];
  const categoriesSet2: CategorySet2[] = [
    "Parking rate",
    "Border rate",
    "Request rate",
  ];
  const categoriesSet3: CategorySet3[] = [
    "Variable 1",
    "Variable 2",
    "Variable 3",
  ];
  const categoriesSet4: CategorySet4[] = [
    "Variable X",
    "Variable Y",
    "Variable Z",
  ];

  const handleCategorySelectSet1 = (category: CategorySet1) => {
    if (selectedCategoriesSet1.includes(category)) {
      setSelectedCategoriesSet1(
        selectedCategoriesSet1.filter((item) => item !== category)
      );
    } else {
      if (selectedCategoriesSet1.length < 2) {
        setSelectedCategoriesSet1([...selectedCategoriesSet1, category]);
      } else {
        setSelectedCategoriesSet1([category, selectedCategoriesSet1[1]]);
      }
    }
  };

  const handleCategorySelectSet2 = (category: CategorySet2) => {
    if (selectedCategoriesSet2.includes(category)) {
      setSelectedCategoriesSet2(
        selectedCategoriesSet2.filter((item) => item !== category)
      );
    } else {
      if (selectedCategoriesSet2.length < 2) {
        setSelectedCategoriesSet2([...selectedCategoriesSet2, category]);
      } else {
        setSelectedCategoriesSet2([category, selectedCategoriesSet2[1]]);
      }
    }
  };

  const handleCategorySelectSet3 = (category: CategorySet3) => {
    if (selectedCategoriesSet3.includes(category)) {
      setSelectedCategoriesSet3(
        selectedCategoriesSet3.filter((item) => item !== category)
      );
    } else {
      if (selectedCategoriesSet3.length < 2) {
        setSelectedCategoriesSet3([...selectedCategoriesSet3, category]);
      } else {
        setSelectedCategoriesSet3([category, selectedCategoriesSet3[1]]);
      }
    }
  };

  const handleCategorySelectSet4 = (category: CategorySet4) => {
    if (selectedCategoriesSet4.includes(category)) {
      setSelectedCategoriesSet4(
        selectedCategoriesSet4.filter((item) => item !== category)
      );
    } else {
      if (selectedCategoriesSet4.length < 2) {
        setSelectedCategoriesSet4([...selectedCategoriesSet4, category]);
      } else {
        setSelectedCategoriesSet4([category, selectedCategoriesSet4[1]]);
      }
    }
  };

  const { setHoveredCategory } = useCategoryStore();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (category: string) => {
    timeoutRef.current = setTimeout(() => {
      setHoveredCategory(category);
    }, 1500);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setHoveredCategory(null);
  };

  return (
    <div>
      <div>
        <div>Category 1</div>
        {categoriesSet1.map((category) => (
          <Button
            variant="toggle"
            key={category}
            onClick={() => handleCategorySelectSet1(category)}
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "mr-4 my-2",
              selectedCategoriesSet1.includes(category)
                ? "border-[#C9FF3B] text-[#C8E972FD] bg-[#CCFF001A]"
                : "border-[#EEEEEE] text-[#D5D5D5]"
            )}
          >
            {category}
            <div className="flex items-center ml-2">
              <Sparkles />
              {selectedCategoriesSet1.includes(category) ? (
                <Check className="w-4 h-4 ml-1" />
              ) : (
                <Plus className="w-4 h-4 ml-1" />
              )}
            </div>
          </Button>
        ))}
      </div>
      <div>
        <div>Category 2</div>
        {categoriesSet2.map((category) => (
          <Button
            variant="toggle"
            key={category}
            onClick={() => handleCategorySelectSet2(category)}
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "mr-4 my-2",
              selectedCategoriesSet2.includes(category)
                ? "border-green-400 text-green-400"
                : "border-gray-700 text-white"
            )}
          >
            {category}
            <div className="flex items-center ml-2">
              <Sparkles />
              {selectedCategoriesSet2.includes(category) ? (
                <Check className="w-4 h-4 ml-1" />
              ) : (
                <Plus className="w-4 h-4 ml-1" />
              )}
            </div>
          </Button>
        ))}
      </div>
      <div>
        <div>Category 3</div>
        {categoriesSet3.map((category) => (
          <Button
            variant="toggle"
            key={category}
            onClick={() => handleCategorySelectSet3(category)}
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "mr-4 my-2",
              selectedCategoriesSet3.includes(category)
                ? "border-green-400 text-green-400"
                : "border-gray-700 text-white"
            )}
          >
            {category}
            <div className="flex items-center ml-2">
              <Sparkles />
              {selectedCategoriesSet3.includes(category) ? (
                <Check className="w-4 h-4 ml-1" />
              ) : (
                <Plus className="w-4 h-4 ml-1" />
              )}
            </div>
          </Button>
        ))}
      </div>
      <div>
        <div>Category 4</div>
        {categoriesSet4.map((category) => (
          <Button
            variant="toggle"
            key={category}
            onClick={() => handleCategorySelectSet4(category)}
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "mr-4 my-2",
              selectedCategoriesSet4.includes(category)
                ? "border-green-400 text-green-400"
                : "border-gray-700 text-white"
            )}
          >
            {category}
            <div className="flex items-center ml-2">
              <Sparkles />
              {selectedCategoriesSet4.includes(category) ? (
                <Check className="w-4 h-4 ml-1" />
              ) : (
                <Plus className="w-4 h-4 ml-1" />
              )}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
