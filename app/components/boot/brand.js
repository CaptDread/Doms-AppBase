import styles from "../../page.module.css";
import Image from "next/image";

export default function DatsMyLogo(){
    return(
        <>
            <section className={styles.brandShow}>
                <figure>
                    <Image src={"./../../captainsLogo.png"} alt={"Logo Designed by the Captain Himself!"}/>
                </figure>
            </section >
        </>
    )
}