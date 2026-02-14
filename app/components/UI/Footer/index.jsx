import React from 'react'
import Image from 'next/image'
import styles from './footer.module.scss';
import Link from 'next/link'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Column 1: Brand & Social */}
        <div className={styles.column}>
          <div className={styles.logoWrapper}>
            <span className={styles.textLogo}>Store</span>
          </div>
          <p className={styles.description}>
            Tu tienda de confianza para productos textiles de alta calidad. Diseño, comodidad y estilo en un solo lugar.
          </p>
          <div className={styles.socialIcons}>
            <Link href={'https://facebook.com'} target="_blank" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </Link>
            <Link href={'https://instagram.com'} target="_blank" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </Link>
            <Link href={'https://tiktok.com'} target="_blank" className={styles.socialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.76v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.63 2.58-4.9 2.09-1.81 5.19-2.29 7.74-.95h.02c.04.14.07.29.11.44.82 2.87-1.12 5.86-4.08 6.13-1.49.14-3.03-.43-3.96-1.66-.6-.79-.81-1.81-.69-2.79.13-1.06.66-2.04 1.51-2.7 1.07-.82 2.47-1 3.79-.5.25.09.48.22.7.37.02-3.07.01-6.14.01-9.21-.01-.07-.02-.13-.03-.2z" /></svg>
            </Link>
          </div>
        </div>

        {/* Column 2: Explorar */}
        <div className={styles.column}>
          <h3>Explorar</h3>
          <ul className={styles.linkList}>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/product/all/all">Tienda</Link></li>
            <li><Link href="#">Sobre Nosotros</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>

        {/* Column 3: Ayuda */}
        <div className={styles.column}>
          <h3>Ayuda</h3>
          <ul className={styles.linkList}>
            <li><Link href="#">Términos y Condiciones</Link></li>
            <li><Link href="#">Política de Privacidad</Link></li>
            <li><Link href="#">Envíos y Devoluciones</Link></li>
            <li><Link href="#">Preguntas Frecuentes</Link></li>
          </ul>
        </div>

        {/* Column 4: Contacto */}
        <div className={styles.column}>
          <h3>Contacto</h3>
          <ul className={styles.contactList}>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span>chahuin.store@gmail.com</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span>+54 11 1234 5678</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>Av. Bartolome Mitre, CABA</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Store Chahuin. Todos los derechos reservados.</p>
        </div>
        <div className={styles.paymentIcons}>
          {/* Replaced generic text with SVGs or styled text boxes for payment */}
          <div className={styles.paymentBadge}>VISA</div>
          <div className={styles.paymentBadge}>MASTERCARD</div>
          <div className={styles.paymentBadge}>MP</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer