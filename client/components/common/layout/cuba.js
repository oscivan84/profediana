import React, { useEffect } from 'react'
import { NavbarCuba } from '../navbar'
import Sidebar from '../sidebar'
import { FooterDashboard } from '../footer'
import { ChevronUp } from 'react-feather'
import { resizeScreen } from '../../../redux/thunks/screenThunk'
import { useDispatch } from 'react-redux'

const LayoutCuba = ({ children = null }) => {

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
            {/* <!-- tap on top starts--> */}
            <div className="tap-top">
                <ChevronUp/>
            </div>
            {/* <!-- tap on tap ends--> */}
            {/* <!-- page-wrapper Start--> */}
            <div className="page-wrapper null compact-wrapper" id="pageWrapper">
                <NavbarCuba/>                   
                {/* <!-- Page Body Start--> */}
                <div className="page-body-wrapper horizontal-menu">
                    {/* <!-- Page Sidebar Start--> */}
                    <Sidebar/>
                    {/* <!-- Page Sidebar Ends--> */}
                    <div className="page-body">
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                    {/* <!-- footer start--> */}
                    <FooterDashboard/>
                </div>
            </div>
        </>
    );
}

export default LayoutCuba;