import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main className={styles.body}>
      <div className={styles.bodyPage}>
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

        <div>
          <div className={styles.thumbnailBannerHome}>
            <h1 className={styles.tittleBanner}>Modern Creative <br></br>Media<br></br>Entertainment </h1>
            <br></br>
            <div>
              <a href='#' className={styles.buttonLets}>Let's Business</a>
            </div>
          </div>
        </div>
        <div className={styles.medsosPage}>
          <div>
            <h1 className={styles.tittleMedsos}>BIXFEEDS.</h1>
            <h1 className={styles.tittleMedsos}>MEDIA SOCIAL CONTENT</h1>
          </div>
          <br></br>
          <div className="row">
            <div className="col-md-4">
              <div className={styles.cardMedsos}>
                <div className={styles.imgCardMedsos}>
                
                </div>
                <div>
                  <h6 className={styles.titleCardMedsos}>Katanya sih ga selingkuh....</h6>
                  <a className={styles.watchNow}>Watch now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.cardMedsos}>
                <div className={styles.imgCardMedsos}>
                
                </div>
                <div>
                  <h6 className={styles.titleCardMedsos}>Katanya sih ga selingkuh....</h6>
                  <a className={styles.watchNow}>Watch now</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.cardMedsos}>
                <div className={styles.imgCardMedsos}>
                
                </div>
                <div>
                  <h6 className={styles.titleCardMedsos}>Katanya sih ga selingkuh....</h6>
                  <a className={styles.watchNow}>Watch now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
            <div className={styles.aboutSection}>
              <div className='row'>
                <div className='col-md-6'>
                  <div className={styles.imgAbout}>
                    
                  </div>
                </div>
                <div className='col-md-6'>
                  <span className={styles.abouSub}>About</span>
                  <br></br><br></br>
                  <h1 className={styles.tittleAbout}>BIXFEEDS.
                    <br></br>MEDIA MODERN PREUNEUR
                  </h1>
                  <br></br>
                  <span className={styles.descAbout}>Lorem ipsum dolor sit amet consectetur. Tortor semper vehicula laoreet neque elit in massa orci etiam. Pretium est neque diam id a. Eget enim mi senectus feugiat faucibus id sit purus. Blandit placerat sit .</span>
                  <div className='d-flex justify-content-end'>
                    <a href='#' className={styles.buttonReadMore}>Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.businessSection}>
              <div>
                <h1 className={styles.tittleBusiness}>Let’s Business 
                  <br></br>and Services</h1>
              </div>
              <div className='row'>
                <div className='col-md-4'>
                  <h1 className='fw-bold text-white'>1.
                    <br></br>
                    Partnership
                  </h1>
                  <span className='text-white'>Lorem ipsum dolor sit amet consectetur. Tortor semper vehicula laoreet neque elit in massa orci etiam. Pretium est neque diam id a. Eget enim mi senectus feugiat faucibus id sit purus. Blandit placerat sit .</span>
                </div>
                <div className='col-md-4'>
                  <h1 className='fw-bold text-white'>2.
                    <br></br>
                    Partnership
                  </h1>
                  <span className='text-white'>Lorem ipsum dolor sit amet consectetur. Tortor semper vehicula laoreet neque elit in massa orci etiam. Pretium est neque diam id a. Eget enim mi senectus feugiat faucibus id sit purus. Blandit placerat sit .</span>
                </div>
                <div className='col-md-4'>
                  <h1 className='fw-bold text-white'>3.
                    <br></br>
                    Partnership
                  </h1>
                  <span className='text-white'>Lorem ipsum dolor sit amet consectetur. Tortor semper vehicula laoreet neque elit in massa orci etiam. Pretium est neque diam id a. Eget enim mi senectus feugiat faucibus id sit purus. Blandit placerat sit .</span>
                </div>
              </div>
              <div className='text-center'>
                <span className='text-white'>For more information</span>
                <br></br>
                <span className='text-white'>bixfeedsid@gmail.com</span>
              </div>
            </div>
        <br></br><br></br>
      </div>
    </main>
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
    </>
  )
}
