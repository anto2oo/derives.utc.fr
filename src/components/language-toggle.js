import * as React from "react"
import i18n from './i18n';
import {useEffect, useState} from "react";

const LanguageToggle = () => {

    const [language, setLanguage] = useState(i18n.language)

    useEffect(() => {
        i18n.changeLanguage(language)
    }, [language])

    return (
        <div style={{position: 'fixed', top: 0, right: 0, margin: 5}}>
            {language == 'fr'
                && <button onClick={() => setLanguage('en')}>🇬🇧</button>
                || <button onClick={() => setLanguage('fr')}>🇫🇷</button>}
        </div>
    )
}

export default LanguageToggle