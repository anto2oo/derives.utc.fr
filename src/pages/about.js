import * as React from "react"
import "../components/i18n"
import {useTranslation} from "react-i18next";

import Layout from "../components/layout";


const AboutPage = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('about.title')}>
            <p><i>{t('about.description')}</i></p>

            <p>{t('about.explain1')}</p>

            <p>{t('about.explain2')}</p>
            <p>{t('about.modes')}
                <ul>
                    <li>{t('about.mode1')}</li>
                    <li>{t('about.mode2')}</li>
                </ul>
            </p>
            <p>{t('about.thanks')}</p>
        </Layout>
    )
}

export default AboutPage
