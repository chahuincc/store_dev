import React from 'react'
import getProducts from '@/app/utils/admin/getProducts'
import CategorySlider from '../CategorySlider'

async function CategoryTopBar() {

    // Fetch all products
    const products = await getProducts();

    // Extract unique categories and one representative image for each
    const categoriesMap = new Map();

    if (Array.isArray(products)) {
        products.forEach(product => {
            if (product.category && !categoriesMap.has(product.category)) {
                categoriesMap.set(product.category, {
                    category: product.category,
                    image: product.img || product.img2 || '/loadingImg.jpg' // Use first available image
                });
            }
        });
    }

    const categories = Array.from(categoriesMap.values());

    return (
        <div>
            <CategorySlider categories={categories} />
        </div>
    )
}

export default CategoryTopBar
