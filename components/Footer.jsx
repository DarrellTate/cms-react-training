import styles from "@styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Image
                    src='/assets/logo.svg'
                    alt="Logo"
                    height={75}
                    width={75}
                />
            </div>

            <div className={styles.info}>
                <a href="/privacy" className={styles.item}>
                    Privacy Policy
                </a>
                <span>|</span>
                <a href="/tos" className={styles.item}>
                    Terms of Service
                </a>
            </div>

            <div className={styles.copyright}>
                Copyright 2022. Comic Closet, LLC. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;