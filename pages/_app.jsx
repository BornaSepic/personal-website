import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Layout from "../components/layout/Layout";

export default class MyApp extends App {
    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <React.StrictMode>
                <Head>
                    <title>Borna Sepic</title>
                    <meta
                        key="description"
                        name="description"
                        content=""
                    />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </React.StrictMode>
        );
    }
}