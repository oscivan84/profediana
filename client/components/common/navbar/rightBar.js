import React from 'react';
import LangBar from './langBar';
import NotifyBar from './notifyBar';
import UserBar from './userBar';
import { Maximize } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../../redux/thunks/screenThunk'

const RightBar = () => {

    // redux
    const dispatch = useDispatch()
    const { dark } = useSelector(store => store?.screen)

    const handleToggleTheme = () => dispatch(toggleTheme())

    return (
        <div className="nav-right col-8 pull-right right-header p-0">
            <ul className="nav-menus">
                {/* Cambio de idioma */}
                <LangBar/>
                {/* notify */}
                <NotifyBar/>
                {/* toggle theme */}
                <li>
                    <div className="mode" onClick={handleToggleTheme}>
                        <i className={`fa ${dark ? 'fa-lightbulb-o' : 'fa-moon-o'}`}></i>
                    </div>
                </li>
                <li className="maximize">
                    <a className="text-dark" href="#!" >
                        <Maximize/>
                    </a>
                </li>
                {/* user bar */}
                <UserBar/>
            </ul>
        </div>
    )
}

export default RightBar;