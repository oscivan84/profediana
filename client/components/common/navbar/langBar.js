import React, { useState, useEffect } from 'react';
import { selectLangs } from '../../../data/lang/index.js';
import Show from '../../utils/show'
import { useSelector, useDispatch } from 'react-redux'
import { changelang } from '../../../redux/thunks/languageThunk'
import sessionStorage from 'sessionstorage';

const LangBar = () => {

    // redux
    const dispatch = useDispatch();
    const { lang } = useSelector(store => store?.language);

    const [show_menu, setShowMenu] = useState(false);
    const [current_lang, setCurrentLang] = useState({});

    const toggleMenu = () => setShowMenu(prev => (!prev))

    const handleSelectLang = (key) => {
        let result = selectLangs.find(obj => obj.key == key);
        setCurrentLang(result || {});
        dispatch(changelang(key))
    }

    const handleDefaultLang = () => handleSelectLang(sessionStorage.getItem('lang'))

    useEffect(() => {
        if (sessionStorage) handleDefaultLang()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sessionStorage])

    const isObject = Object.keys(current_lang).length;

    return (
        <li className="language-nav list-simple">
            <div className={`translate_wrapper ${show_menu ? 'active' : ''}`}>
                <div className="current_lang">
                    <div className="lang" onClick={toggleMenu}>
                        <Show condicion={isObject}
                            predeterminado={"SEL"}
                        >
                            <i className={`flag-icon ${current_lang?.icon}`}></i>
                            <span className="lang-txt">{current_lang?.key}</span>
                        </Show>
                    </div>
                </div>
                <div className={`more_lang ${show_menu ? 'active' : ''}`}>
                    {selectLangs?.map((lang, index) => 
                        <div className="lang" key={`lang-${index}`}
                            onClick={() => handleSelectLang(lang?.key)}
                        >
                            <i className={`flag-icon ${lang?.icon}`}></i><span className="lang-txt">{lang?.text} <span> {lang?.prefix}</span></span>
                        </div>
                    )}
                </div>
            </div>
        </li>
    )
}

export default LangBar;