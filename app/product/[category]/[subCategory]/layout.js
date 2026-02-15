import Link from "next/link"
import styles from "./stylesProduct.module.scss"
import getProductCategory from "@/app/utils/getProductCategory"
import CategoryTopBar from "@/app/components/CategoryTopBar"
import SubCategoryMenu from "@/app/components/SubCategoryMenu"

const ProductsLayout = async ({ children, params }) => {

  const { category } = params
  const dataResponse = await getProductCategory(category)

  const subCategoriesFilter = [];
  dataResponse?.forEach((item) => {
    const { subCategory } = item
    if (!subCategoriesFilter.includes(subCategory)) {
      subCategoriesFilter.push(subCategory);
    }
  });


  return (
    <div className={`${styles.contDetail}`}>

      <div className={styles.mainContent}>
        <CategoryTopBar />
        <SubCategoryMenu category={category} subCategories={subCategoriesFilter} />
        {children}
      </div>
    </div>
  )
}

export default ProductsLayout