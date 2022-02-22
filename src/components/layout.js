import * as React from "react"
import "../components/i18n"

import "water.css/out/water.css"
import Icon from "../images/icon.png";
import {useTranslation} from "react-i18next";
import {Link} from "gatsby";
import LanguageToggle from "./language-toggle";

const Layout = ({ title, children }) => {
    const {t} = useTranslation();
    return (
        <main>
            <LanguageToggle/>
            <section className="text-center">
                <Link to="/">
                    <img src={Icon} className="h-100" alt="Logo Dérives"/>
                </Link>
                <h1 className="mt-0">{t('name')}</h1>
                <h4 className="mt-0"><i>{t('index.description')}</i></h4>
            </section>
            <section className="text-center">
                <Link to="/about">{t('navbar.about')}</Link> | <Link to="/gallery">{t('navbar.gallery')}</Link> | <Link to="/privacy">{t('navbar.privacy')}</Link>
            </section>
            <hr className="my-20"/>
            <h3>{title}</h3>
            {children}
        </main>
    )
}

export default Layout