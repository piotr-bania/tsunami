import React from 'react'
import Head from 'next/head'
import { motion as m } from 'framer-motion'
import Hero from '../components/homepage/Hero'


export default function Home() {

    return (
        <m.div
            initial={{opacity: 0, transition: {duration: 1}}}
            animate={{opacity: 1, transition: {delay: 1, duration: 1}}}
            exit={{opacity: 0, transition: {duration: 1}}}
            transition={{duration: 1, ease: 'easeOut', delay: 0}}
            >
            <Head>
                <title>Tsunami Clapham | Sushi Restaurant</title>
                <meta name="description" content="Tsunami Clapham | Sushi Restaurant" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo/logo.svg" />
            </Head>

            <main>
                <Hero />
            </main>
        </m.div>
    )
}