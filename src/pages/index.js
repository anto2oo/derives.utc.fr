import * as React from "react"
import "../components/i18n"
import {useTranslation} from "react-i18next";

import "water.css/out/water.css"
import "../css/iphone.css"
import "../css/custom.css"

import AppStoreIcon from "../images/appstore.svg"
import PlayStoreIcon from "../images/googleplay.svg"
import DemoVideo from "../video/demo.mp4"
import Layout from "../components/layout";


const IndexPage = () => {

    return (
        <Layout>
            <section className="text-center">
                <div className="mt-30">
                    <a href="https://apps.apple.com/">
                        <img src={AppStoreIcon} alt="Apple App Store Badge" className="h-50"/>
                    </a>
                    <a className="ml-16" href="https://play.google.com">
                        <img src={PlayStoreIcon} alt="Google Play Badge" className="h-50"/>
                    </a>
                </div>
            </section>

            <section className="text-center">
                <div className="temp-wrapper">
                    <div className="px">
                        <div className="px__body">
                            <div className="px__body__cut"/>
                            <div className="px__body__speaker"/>
                            <div className="px__body__sensor"/>

                            <div className="px__body__mute"/>
                            <div className="px__body__up"/>
                            <div className="px__body__down"/>
                            <div className="px__body__right"/>
                        </div>

                        <div className="px__screen">
                            <div className="px__screen__">
                                <div className="px__screen__frame">
                                    <video src={DemoVideo} controls autoPlay muted/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default IndexPage
