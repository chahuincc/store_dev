import Link from "next/link"
import styles from "./stylesProduct.module.scss"

const ProductsLayout = async ({ children }) => {

  return (
    <div className={`${styles.contDetail}`}>
      <div className={styles.mainContent}>
        {children}
      </div>
    </div>
  )
}

export default ProductsLayout