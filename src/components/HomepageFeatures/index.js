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
    url: "",
  },
  {
    title: 'Troubleshooting',
    Svg: require('@site/static/img/undraw_right_direction_tge8.svg').default,
    description: (
      <>
        Having problems when playing on of our games? Head over to our FAQ area to see if we
        can answer your questions.
      </>
    ),
    button_text: "Frequently Asked Questions",
    url: "",
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
    url: "",
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
