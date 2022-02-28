import '../styles/tailwind.css';
import Layout from '../components/Layout';
import { SessionProvider } from 'next-auth/react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';
import { RecoilRoot } from 'recoil';
function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={apolloClient}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ApolloProvider>
    </SessionProvider>
    // </Layout>
  );
}

export default MyApp;
