import React from 'react';
import App, {Container} from 'next/app';
import Head from 'next/head';
import Layout from "../components/layout/Layout";
import {PageTransition} from 'next-page-transitions'

export default class MyApp extends App {
    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <React.Fragment>
                <Head>
                    <title>Borna Sepic</title>
                    <meta
                        key="description"
                        name="description"
                        content=""
                    />
                </Head>
                <Container>
                    <Layout>
                        <PageTransition timeout={500} classNames="page-transition">
                            <Component {...pageProps} />
                        </PageTransition>
                    </Layout>
                </Container>
            </React.Fragment>
        );
    }
}