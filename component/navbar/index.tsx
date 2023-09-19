import Image from "next/image";
import styles from './Navbar.module.css'

export default function Navbar(){
     return(<>
         <div className={styles.navbarSection}>
               <nav className={styles.navbar}>
                    <div>
                         <Image src='/images/bixfeed-logo.png' width={140} height={80} alt=''/>
                    </div>
                    <ul className={styles.navGroup}>
                         <li><a href='#'>Home</a></li>
                         <li><a href='#'>About</a></li>
                         <li><a href='#'>Teams</a></li>
                         <li><a href='#'>Contact</a></li>
                    </ul>
               </nav>
         </div>
     </>)
}