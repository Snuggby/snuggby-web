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
            <main className="layout" style={
                {
                    minHeight: "calc(100vh - 75px - 250px);"
                }
            }>{props.children}</main>
            <Footer />
        </>
    )
}


export default Layout