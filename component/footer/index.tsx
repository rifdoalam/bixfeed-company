import Image from "next/image";
import styles from './Footer.module.css'

export default function Footer(){
     return(<>
          <footer className={styles.footer}>
               <div className='row'>
               <div className='col-md-3'>
                    <Image src='/images/bixfeed-logo.png' width={250} height={100} alt=''/>
               </div>
               <div className='col-md-3'>
                    <h5>Business contact</h5>
                    <br></br>
                    <div className={styles.pageFooter}>
                    <li  className={styles.listPage}>0899128129</li>
                    <li  className={styles.listPage}>089912812910210201</li>
                    </div>
               </div>
               <div className='col-md-3'>
                    <h5>Page</h5>
                    <br></br>
                    <div className={styles.pageFooter}>
                    <li className={styles.listPage}>Home</li>
                    <li className={styles.listPage}>About Us</li>
                    <li className={styles.listPage}>Teams</li>
                    <li className={styles.listPage}>Contact</li>
                    </div>
               </div>
               <div className='col-md-3'>
                    <h5>Social Media</h5>
                    <div>
                    <a></a>
                    </div>
               </div>
               </div>
          </footer>
          <div className={styles.copyright}>
               <span>&copy; BIXFEEDS. 2023 All Rights Reserved.</span>
          </div>
     </>)
}