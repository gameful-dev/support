import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Installation Instructions',
    Svg: require('@site/static/img/undraw_walking_around_-25-f5.svg').default,
    description: (
      <>
        First time playing one of our games? Use the following steps to get up and
        running as soon as possible.
      </>
    ),
    button_text: "Get started",
    url: "/docs/",
  },
  {
    title: 'Behind the scenes',
    Svg: require('@site/static/img/undraw_right_direction_tge8.svg').default,
    description: (
      <>
        Would you like to know about the latest and greatest features we're currently working on?
        Visit out dev log for monthly updates on what's cooking'.
      </>
    ),
    button_text: "Read our devlog",
    url: "/blog/",
  },
  {
    title: 'Speak to a human',
    Svg: require('@site/static/img/undraw_hang_out_re_udl4.svg').default,
    description: (
      <>
        If you can't find what you're looking for on our website. Join our Discord community
        reach out directly to a member of the development team.
      </>
    ),
    button_text: "Join us on Discord",
    url: "https://discord.gg/BypB7jMRWW",
  },
];

function Feature({Svg, title, description, button_text, url}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link
          className="button button--secondary"
          to={url}>
          {button_text}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
