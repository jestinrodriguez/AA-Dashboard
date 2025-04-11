// src/components/CategorySelector.tsx

import { useCategoryStore } from '../store/useCategoryStore'

type CategorySet1 = 'Carbon 1' | 'Co2 Distribution' | 'Fleet sizing'
type CategorySet2 = 'Parking rate' | 'Border rate' | 'Request rate'
type CategorySet3 = 'Variable 1' | 'Variable 2' | 'Variable 3'
type CategorySet4 = 'Variable X' | 'Variable Y' | 'Variable Z'

const CategorySelector: React.FC = () => {
  const { 
    selectedCategoriesSet1, 
    setSelectedCategoriesSet1, 
    selectedCategoriesSet2, 
    setSelectedCategoriesSet2, 
    selectedCategoriesSet3, 
    setSelectedCategoriesSet3,
    selectedCategoriesSet4, 
    setSelectedCategoriesSet4 
  } = useCategoryStore()

  const categoriesSet1: CategorySet1[] = ['Carbon 1', 'Co2 Distribution', 'Fleet sizing']
  const categoriesSet2: CategorySet2[] = ['Parking rate', 'Border rate', 'Request rate']
  const categoriesSet3: CategorySet3[] = ['Variable 1', 'Variable 2', 'Variable 3']
  const categoriesSet4: CategorySet4[] = ['Variable X', 'Variable Y', 'Variable Z']

  const handleCategorySelectSet1 = (category: CategorySet1) => {
    if (selectedCategoriesSet1.includes(category)) {
      setSelectedCategoriesSet1(selectedCategoriesSet1.filter((item) => item !== category))
    } else {
      if (selectedCategoriesSet1.length < 2) {
        setSelectedCategoriesSet1([...selectedCategoriesSet1, category])
      } else {
        setSelectedCategoriesSet1([category, selectedCategoriesSet1[1]])
      }
    }
  }

  const handleCategorySelectSet2 = (category: CategorySet2) => {
    if (selectedCategoriesSet2.includes(category)) {
      setSelectedCategoriesSet2(selectedCategoriesSet2.filter((item) => item !== category))
    } else {
      if (selectedCategoriesSet2.length < 2) {
        setSelectedCategoriesSet2([...selectedCategoriesSet2, category])
      } else {
        setSelectedCategoriesSet2([category, selectedCategoriesSet2[1]])
      }
    }
  }

  const handleCategorySelectSet3 = (category: CategorySet3) => {
    if (selectedCategoriesSet3.includes(category)) {
      setSelectedCategoriesSet3(selectedCategoriesSet3.filter((item) => item !== category))
    } else {
      if (selectedCategoriesSet3.length < 2) {
        setSelectedCategoriesSet3([...selectedCategoriesSet3, category])
      } else {
        setSelectedCategoriesSet3([category, selectedCategoriesSet3[1]])
      }
    }
  }

  const handleCategorySelectSet4 = (category: CategorySet4) => {
    if (selectedCategoriesSet4.includes(category)) {
      setSelectedCategoriesSet4(selectedCategoriesSet4.filter((item) => item !== category))
    } else {
      if (selectedCategoriesSet4.length < 2) {
        setSelectedCategoriesSet4([...selectedCategoriesSet4, category])
      } else {
        setSelectedCategoriesSet4([category, selectedCategoriesSet4[1]])
      }
    }
  }

  return (
    <div>
      <h3>Select Two Categories from Set 1</h3>
      <div>
        {categoriesSet1.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelectSet1(category)}
            style={{
              margin: '10px',
              padding: '10px',
              backgroundColor: selectedCategoriesSet1.includes(category) ? 'lightblue' : 'white',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <h3>Select Two Categories from Set 2</h3>
      <div>
        {categoriesSet2.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelectSet2(category)}
            style={{
              margin: '10px',
              padding: '10px',
              backgroundColor: selectedCategoriesSet2.includes(category) ? 'lightblue' : 'white',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <h3>Select Two Categories from Set 3</h3>
      <div>
        {categoriesSet3.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelectSet3(category)}
            style={{
              margin: '10px',
              padding: '10px',
              backgroundColor: selectedCategoriesSet3.includes(category) ? 'lightblue' : 'white',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <h3>Select Two Categories from Set 4</h3>
      <div>
        {categoriesSet4.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelectSet4(category)}
            style={{
              margin: '10px',
              padding: '10px',
              backgroundColor: selectedCategoriesSet4.includes(category) ? 'lightblue' : 'white',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div>
        <h4>Selected Categories from Set 1:</h4>
        <ul>
          {selectedCategoriesSet1.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Selected Categories from Set 2:</h4>
        <ul>
          {selectedCategoriesSet2.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Selected Categories from Set 3:</h4>
        <ul>
          {selectedCategoriesSet3.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Selected Categories from Set 4:</h4>
        <ul>
          {selectedCategoriesSet4.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CategorySelector
