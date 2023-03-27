import React from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'

import '../styles/globals.scss'
import '../styles/layout/navbar.scss'
import '../styles/layout/footer.scss'
import Layout from '../components/layout/Layout'



function MyApp({ Component, pageProps, router }) {

    return (
        <Layout>
            <Component {...pageProps} key={router.route} />
        </Layout>
    )
}

export default MyApp