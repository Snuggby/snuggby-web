import Layout from "@/components/global/layout";
import '../styles/globals.css'; // Import Tailwind CSS

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
