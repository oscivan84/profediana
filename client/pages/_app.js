import React from "react"
import { useRouter } from "next/router"
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { wrapper } from "../redux/store"
import AppConfig from "../components/utils/appConfig"

import 'animate.css';
import '../assets/scss/app.scss'


const MyApp = ({ Component, pageProps }) => {
  
  const router = useRouter()

  return (
      <AppConfig>
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