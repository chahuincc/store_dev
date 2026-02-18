import ProductList from '@/app/components/ProductList'
import getProductSubCategory from '@/app/utils/getProductSubCategory'
import getProductCategory from "@/app/utils/getProductCategory"
import CategoryTopBar from "@/app/components/CategoryTopBar"
import SubCategoryMenu from "@/app/components/SubCategoryMenu"
import React, { Suspense } from 'react'
import Loading from '@/app/components/UI/Loading'

export const generateMetadata = async ({ params }) => {
  return {
    title: 'store-chahuin - ' + params.category
  }
}

const SubCategory = async ({ params }) => {

  const { category, subCategory } = params
  const category_subCategory = `${category}-${subCategory}`

  // Fetch data in parallel
  const [data, dataResponse] = await Promise.all([
    getProductSubCategory(category_subCategory),
    getProductCategory(category)
  ]);

  const subCategoriesFilter = [];
  dataResponse?.forEach((item) => {
    const { subCategory } = item
    if (!subCategoriesFilter.includes(subCategory)) {
      subCategoriesFilter.push(subCategory);
    }
  });

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <CategoryTopBar currentCategory={category} />
      <SubCategoryMenu category={category} subCategories={subCategoriesFilter} />
      <Suspense fallback={<Loading />}>
        <ProductList filterData={data} />
      </Suspense>
    </div>
  )
}


export default SubCategory