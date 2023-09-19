import Head from "next/head";
import Navbar from "../navbar";
import Footer from "../footer";
import { ReactNode } from "react";
export default function Layout({children,}:{children:ReactNode}){
     return(<>
     <Head>
        <title>{"BIXFEEDS"}</title>
        <link rel="icon" href="/images/icon.png" type="image/png" />
        <meta name="description" content="Website Japan Halal" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
     </Head>
     <div>
          <Navbar/>
               {children}
          <Footer/>
     </div>
     </>)
}