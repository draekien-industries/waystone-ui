import React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { start, done } from 'nprogress';
import 'nprogress/nprogress.css';
import { Waystone } from '@waystone/components';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  React.useEffect(() => {
    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', done);
    router.events.on('routeChangeError', done);
  }, [router]);

  return (
    <Waystone>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: { opacity: 0 },
          pageAnimate: { opacity: 1 },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Waystone>
  );
};

export default App;
