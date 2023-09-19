import Layout from "@/component/layout";
import styles from "./About.module.css";
export default function About(){
     return(<>
          <Layout>
               <div className={styles.about}>
                    <br></br><br></br><br></br>
                    <div className={styles.aboutPage}>
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
                                   </div>
                              </div>
                         </div>
                         <br></br><br></br>
                         <div className={styles.visiSection}>
                              <h1>Visi</h1>
                              <span>Lorem ipsum dolor sit amet consectetur. Orci morbi pellentesque tincidunt mauris. Massa commodo integer risus diam eget vestibulum sed duis orci. Morbi id laoreet pellentesque morbi etiam vulputate. Ultrices accumsan sed sit neque aliquam lacinia vestibulum in eget. Tristique aliquam massa porttitor etiam fermentum imperdiet cras sapien.</span>
                         </div>
                         <br></br><br></br>
                         <div className={styles.misiSection}>
                              <h1>Misi</h1>
                              <span>Lorem ipsum dolor sit amet consectetur. Orci morbi pellentesque tincidunt mauris. Massa commodo integer risus diam eget vestibulum sed duis orci. Morbi id laoreet pellentesque morbi etiam vulputate. Ultrices accumsan sed sit neque aliquam lacinia vestibulum in eget. Tristique aliquam massa porttitor etiam fermentum imperdiet cras sapien.</span>
                         </div>
                         <br></br><br></br><br></br><br></br>
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
                         <br></br><br></br><br></br><br></br>
                    </div>
               </div>
          </Layout>
     </>)
}