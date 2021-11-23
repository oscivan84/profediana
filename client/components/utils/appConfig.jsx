import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Head from 'next/head'
import { defaultLang } from '../../redux/thunks/languageThunk'
import { resizeScreen } from '../../redux/thunks/screenThunk'

const AppConfig = ({ children = null }) => {

    // redux
    const dispatch = useDispatch();
    const { title } = useSelector(state => state.screen)

    const isObjectWindow = typeof window == 'object';

    const handleResize = () => dispatch(resizeScreen())

    useEffect(() => {
        dispatch(defaultLang())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (isObjectWindow) handleResize()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isObjectWindow])
    
    useEffect(() => {
        if (isObjectWindow) window?.addEventListener('resize', handleResize);
        return () => isObjectWindow ? window?.removeEventListener('resize', handleResize) : null
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isObjectWindow]);

    return (
        <>
            <Head>
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i&amp;display=swap"/>
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900&amp;display=swap"/>
            {/* eslint-disable-next-line @next/next/no-css-tags */}
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css"/>
            <title>{title}</title>
            </Head>

            {children}
        </>
    )
}

export default AppConfig;