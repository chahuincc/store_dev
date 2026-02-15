import React from 'react';
import Image from 'next/image';
import styles from './nosotros.module.scss';

const Nosotros = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.imageSection}>
                    <div className={styles.landscapeWrapper}>
                        <Image
                            src="/nosotros_landscape.png"
                            alt="Landscape"
                            width={600}
                            height={400}
                            className={styles.landscapeImage}
                        />
                    </div>
                    <div className={styles.portraitWrapper}>
                        <Image
                            src="/nosotros_portrait.png"
                            alt="Portrait"
                            width={400}
                            height={600}
                            className={styles.portraitImage}
                        />
                    </div>
                </div>

                <div className={styles.textSection}>
                    <h1 className={styles.title}>Acerca de nosotros</h1>
                    <div className={styles.description}>
                        <p>
                            Nosotros..
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nosotros;
