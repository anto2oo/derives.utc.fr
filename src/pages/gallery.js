import * as React from "react"
import "../components/i18n"
import {useTranslation} from "react-i18next";

import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";


const AboutPage = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('gallery.title')}>
            <section className="text-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VvIykePgJeU"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
            </section>
            <section className="text-center">
                <figure>
                    <StaticImage src="../images/image0.jpg"  alt="Début d'une dérive"  width="300"/>
                    <figcaption>{t('gallery.image0')}</figcaption>
                </figure>
                <figure>
                    <StaticImage src="../images/image2.jpg" alt="Dérive à la campagne"  width="300"/>
                    <figcaption>{t('gallery.image2')}</figcaption>
                </figure>
                <figure>
                    <StaticImage src="../images/image3.jpg" alt="Dérive en ville"  width="300"/>
                    <figcaption>{t('gallery.image3')}</figcaption>
                </figure>
                <figure>
                    <StaticImage src="../images/image4.jpg" alt="Dérive en mouvement" width="300"/>
                    <figcaption>{t('gallery.image4')}</figcaption>
                </figure>
                <figure>
                    <StaticImage src="../images/team.jpg" alt="La fine équipe"/>
                    <figcaption>{t('gallery.team')}</figcaption>
                </figure>

            </section>
        </Layout>
    )
}

export default AboutPage
