import React from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

const SubCategoryMenu = ({ category, subCategories }) => {
    return (
        <div className={styles.subMenuContainer}>
            <ul className={styles.subMenu}>
                <li>
                    <Link className={styles.authLink} href={`/product/${category}/all`} scroll={false}>
                        Todos
                    </Link>
                </li>
                {subCategories?.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={styles.authLink} href={`/product/${category}/${item}`} scroll={false}>
                                {item}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SubCategoryMenu
