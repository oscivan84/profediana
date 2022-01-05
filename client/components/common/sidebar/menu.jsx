import React, { Fragment } from 'react';
import Show from '../../utils/show';
import Link from 'next/link'

const Menu = ({ menu, t }) => {

    const NavLink = ({ child }) => {
        return (
            <Link href={`${child.key}`}>
                <a className={`sidebar-link sidebar-title --active`}>
                    {/* icono */}
                    {child.icon || null}
                    {/* titulo */}
                    <span className="lan-1">{t(child?.text)}</span>
                    {/* badge */}
                    <label className="badge badge-warning">{child?.info}</label>
                </a>
            </Link>
        )
    }

    const NavSub = ({ child }) => {
        return (
            <>
                <a href="" className={`sidebar-link sidebar-title --active`}>
                    {/* icono */}
                    {child.icon || null}
                    {/* titulo */}
                    <span className="lan-1">{t(child?.text)}</span>
                    {/* badge */}
                    <label className="badge badge-warning">{child?.info}</label>
                    {/* menu acordion */}
                    <div className="according-menu">
                        {true ?
                            <i className="fa fa-angle-down"></i>
                            : <i className="fa fa-angle-right"></i>
                        }
                    </div>
                </a>
                {/* sub menu */}
                <ul className="sidebar-submenu" >
                    {child?.children?.map((item, indexI) =>
                        <li key={`list-menu-item-child-${indexI}`}>
                            <a href="javascript" className={`${true ? '--active' : ''}`}>{t(item?.text)}
                                <span className="sub-arrow">
                                    <i className="fa fa-chevron-right"></i>
                                </span>
                            </a>
                        </li>
                    )}
                </ul>
            </>
        )
    }

    return (
        <Fragment>
            <li className="sidebar-list">
                {/* sub */}
                <Show condicion={menu.type == 'sub'}
                    predeterminado={<NavLink child={menu} />}
                >
                    <NavSub child={menu} />
                </Show>
            </li>
        </Fragment>
    )
}

export default Menu;