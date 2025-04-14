import { create } from 'zustand'

type CategorySet1 = 'Carbon 1' | 'Co2 Distribution' | 'Fleet sizing'
type CategorySet2 = 'Parking rate' | 'Border rate' | 'Request rate'
type CategorySet3 = 'Variable 1' | 'Variable 2' | 'Variable 3'
type CategorySet4 = 'Variable X' | 'Variable Y' | 'Variable Z'

type AllCategories =
  | CategorySet1
  | CategorySet2
  | CategorySet3
  | CategorySet4;

interface CategoryState {
  selectedCategoriesSet1: CategorySet1[]
  selectedCategoriesSet2: CategorySet2[]
  selectedCategoriesSet3: CategorySet3[]
  selectedCategoriesSet4: CategorySet4[]
  setSelectedCategoriesSet1: (categories: CategorySet1[]) => void
  setSelectedCategoriesSet2: (categories: CategorySet2[]) => void
  setSelectedCategoriesSet3: (categories: CategorySet3[]) => void
  setSelectedCategoriesSet4: (categories: CategorySet4[]) => void
  hoveredCategory: string | null
  setHoveredCategory: (category: AllCategories | null) => void
  loadingCategory: boolean;
  setLoadingCategory: (loading: boolean) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategoriesSet1: [],
  selectedCategoriesSet2: [],
  selectedCategoriesSet3: [],
  selectedCategoriesSet4: [],
  setSelectedCategoriesSet1: (categories) => set({ selectedCategoriesSet1: categories }),
  setSelectedCategoriesSet2: (categories) => set({ selectedCategoriesSet2: categories }),
  setSelectedCategoriesSet3: (categories) => set({ selectedCategoriesSet3: categories }),
  setSelectedCategoriesSet4: (categories) => set({ selectedCategoriesSet4: categories }),
  hoveredCategory: null,
  setHoveredCategory: (category) => set({ hoveredCategory: category }),
  loadingCategory: false,
  setLoadingCategory: (loading) => set({ loadingCategory: loading }),
}))