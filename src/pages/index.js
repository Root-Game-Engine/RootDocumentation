import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {Redirect} from '@docusaurus/router';
import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Root Game Engine Documentation`}
      description="Documentation for the Root Game Engine.">
      <main>
        return <Redirect to="/docs/Introduction/"></Redirect>
      </main>
    </Layout>
  );
}
