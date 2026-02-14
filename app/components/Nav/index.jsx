"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './nav.module.scss';
import Link from 'next/link'
import { useCartContext } from '@/app/context/CartContext';
import { useAuthContext } from '@/app/context/AuthContext';
import ButtonLogout from '../UI/ButtonLogout';
import getName from '@/app/tools/getName';

function Nav() {
    const { cart } = useCartContext()
    const { user } = useAuthContext()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                {/* Mobile Menu Button */}
                <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                {/* Logo */}
                <Link href={'/'} className={styles.logoInfo}>
                    <div className={styles.logoWrapper}>
                        <span className={styles.textLogo}>Store</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className={styles.desktopNav}>
                    <Link href="/" className={styles.navLink}>Inicio</Link>
                    <Link href="/product/all/all" className={styles.navLink}>Tienda</Link>
                    <Link href="#" className={styles.navLink}>Nosotros</Link>
                    <Link href="#" className={styles.navLink}>Contacto</Link>
                </div>

                {/* Icons Area */}
                <div className={styles.actionsArea}>
                    {/* Search Icon (Visual only) */}
                    <div className={styles.iconBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>

                    {/* User Icon & Dropdown */}
                    <div className={styles.userWrapper} onMouseEnter={() => setIsUserMenuOpen(true)} onMouseLeave={() => setIsUserMenuOpen(false)}>
                        <div className={styles.iconBtn} onClick={toggleUserMenu}>
                            {user.photoURL ? (
                                <Image
                                    src={user.photoURL}
                                    width={28}
                                    height={28}
                                    alt="User"
                                    className={styles.userAvatar}
                                />
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            )}
                        </div>

                        {/* User Dropdown */}
                        {/* We use inline style or a class for conditional visibility if needed, but here simple conditional rendering works */}
                        {isUserMenuOpen && (
                            <div className={styles.userDropdown}>
                                {user.logged ? (
                                    <>
                                        <div className={styles.userInfo}>Hola, {getName(user.displayName)}</div>
                                        {user.rol === 'admin' && <Link href="/admin" className={styles.dropdownItem}>Panel Admin</Link>}
                                        <div className={styles.dropdownItemContainer}><ButtonLogout text="Cerrar Sesión" /></div>
                                    </>
                                ) : (
                                    <div className={styles.dropdownItemContainer}>
                                        <Link href="/LoginOrRegister" className={styles.dropdownItem}>Iniciar Sesión</Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Cart Icon */}
                    <Link href="/cart" className={styles.cartWrapper}>
                        <div className={styles.iconBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            {cart.length > 0 && <span className={styles.cartBadge}>{cart.length}</span>}
                        </div>
                    </Link>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`${styles.mobileDrawer} ${isMenuOpen ? styles.open : ''}`}>
                <div className={styles.drawerHeader}>
                    <span onClick={toggleMenu} className={styles.closeBtn}>&times;</span>
                </div>
                <div className={styles.drawerLinks}>
                    <Link href="/" onClick={toggleMenu}>Inicio</Link>
                    <Link href="/product/all/all" onClick={toggleMenu}>Tienda</Link>
                    <Link href="#" onClick={toggleMenu}>Nosotros</Link>
                    <Link href="#" onClick={toggleMenu}>Contacto</Link>
                    {user.logged ? (
                        <>
                            {user.rol === 'admin' && <Link href="/admin" onClick={toggleMenu}>Panel Admin</Link>}
                            <div className={styles.mobileLogout}><ButtonLogout text="Cerrar Sesión" /></div>
                        </>
                    ) : (
                        <Link href="/LoginOrRegister" onClick={toggleMenu}>Iniciar Sesión</Link>
                    )}
                </div>
            </div>
            {/* Overlay for mobile menu */}
            {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
        </nav>
    )
}

export default Nav