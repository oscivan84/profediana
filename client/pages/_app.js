import React from "react"
import { useRouter } from "next/router"
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { wrapper } from "../redux/store"
import AppConfig from "../components/utils/appConfig"
import Head from 'next/head';

import 'animate.css';
import '../assets/scss/app.scss'
import '../assets/scss/Modal.css'


const MyApp = ({ Component, pageProps }) => {
  
  const router = useRouter()

  return (
      <AppConfig>
        <Head>
          <link
            href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
            rel="stylesheet"
          ></link>
        </Head>
        <SwitchTransition mode="out-in">
          <CSSTransition key={router.pathname} classNames='page' timeout={300}>
            <Component {...pageProps} />
          </CSSTransition>
        </SwitchTransition>
      </AppConfig>
  )
}


MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps }
}


export default wrapper.withRedux(MyApp);