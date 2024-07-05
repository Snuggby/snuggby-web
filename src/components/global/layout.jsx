import Head from "next/head"
import Footer from "./footer"
import Header from "./header"

const Layout = (
    props
) => {
    return (
        <>
            <Head>
                <title>Snuggby</title>
            </Head>
            <Header />
            <main className="layout">{props.children}</main>
            {/* <Footer /> */}
        </>
    )
}


export default Layout