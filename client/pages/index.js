import React, { Fragment } from "react";
import { guest } from "../helpers/authServerSideProps";
import { connect } from "react-redux";
import Home from "../components/home";
import { LayoutHero } from "../components/common/layout";
import Head from "next/head";

const IndexPage = () => (
  <Fragment>
    <Head>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        ></link>
      </Head>
    <LayoutHero>
      <Home />
    </LayoutHero>
  </Fragment>
);

export const getServerSideProps = guest("SofSol");

export default connect((state) => state)(IndexPage);
