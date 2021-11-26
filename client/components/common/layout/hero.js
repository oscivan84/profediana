import React, { useEffect } from 'react'
import { Simple } from '../top-bar';
import { NavbarSimple } from '../navbar';
import { FooterHero } from '../footer';
import { resizeScreen } from '../../../redux/thunks/screenThunk'
import { useDispatch } from 'react-redux'

const LayoutHero = ({ children = null }) => {
  // redux
  const dispatch = useDispatch()

  const isObjectWindow = typeof window == 'object';

  const handleResize = () => dispatch(resizeScreen())

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
          <Simple/>
          <NavbarSimple/>
          {children}
          <FooterHero/>
      </>
  );
}

export default LayoutHero;