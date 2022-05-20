import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Adoption',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        EU DCC is used by more than 60 different countries.
        More than 1.8 billion certificates haven been issued by EU Member States and EEA countries alone.
        Even more non-EU countries have also adopted the EU DCC, either scanning them at the border, or issuing them, or both.
      </>
    ),
  },
  {
    title: 'Specification',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Encoding and signing the Electronic Health Certificate (HCERT), as a candidate to be adapted and adopted by eHealth authorities and other stakeholders as they see fit.
      </>
    ),
  },
  {
    title: 'Certificates',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        EU Digital COVID Certificate refers collectively to 3 types of certificates: <strong>vaccination</strong>, <strong>recovery</strong> and <strong>test</strong>.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
