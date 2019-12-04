import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

export default props => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
                <link
          rel="stylesheet"
          href="/static/bootstrap.css"
        />
                <link
          rel="stylesheet"
          href="/static/style.css"
        />
        <link
          rel="stylesheet"
          href="/static/style.css.map"
        />
        <link
          rel="stylesheet"
          href="/static/responsive.css"
        />
<link
        rel="stylesheet"
        href="/static/assets/vendor.bundled751.css?ver=100"
      />
        <link
          rel="stylesheet"
          href="/static/assets/styled751.css?ver=100"
        />
      <script scr="/static/js/jquery.bundled751.js"></script>
      <script scr="/static/js/scriptd751.js"></script>

      </Head>

      <Header />
      {props.children}
    </Container>
  );
};
