"use client"
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './categorySlider.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function CategorySlider({ categories, currentCategory }) {

    // Find the index of the current category to set as initialSlide
    const initialSlideIndex = categories.findIndex(cat => cat.category === currentCategory);
    const validInitialSlide = initialSlideIndex !== -1 ? initialSlideIndex : 0;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: validInitialSlide,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ]
    };

    return (
        <div className={styles.categorySlider}>
            <Slider {...settings}>
                {categories.map((cat, index) => (
                    <div key={index} className={styles.categoryCard}>
                        <Link href={`/product/${cat.category}/all`} scroll={false}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={cat.image || '/placeholder.png'}
                                    alt={cat.category}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className={styles.categoryName}>
                                {cat.category}
                            </div>
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default CategorySlider
