import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Declarative API Gateway Management',
    Svg: require('@site/static/img/code-square-svgrepo-com.svg').default,
    description: (
      <>
        Simplify and streamline API gateway setup by defining routes and middleware directly in code, enabling seamless and intuitive configuration.
      </>
    ),
  },
  {
    title: 'RESTful API Gateway management',
    Svg: require('@site/static/img/api-app-svgrepo-com.svg').default,
    description: (
      <>
        Simplify the management of your API Gateway with powerful tools.
      </>
    ),
  },
  {
    title: 'Reverse and WebSocket Proxying',
    Svg: require('@site/static/img/server-proxy-svgrepo-com.svg').default,
    description: (
      <>
        Facilitate smooth backend integration by forwarding client requests to backend servers and enabling real-time communication via WebSocket support.
      </>
    ),
  },
  {
    title: 'Security and Authentication Middleware',
    Svg: require('@site/static/img/security-svgrepo-com.svg').default,
    description: (
      <>
      <ul><li>Protect APIs with support for JWT, Basic-Auth, and OAuth authentication.</li>
      <li>Implement CORS policies, add custom headers, and block common exploits (e.g., SQL injection and XSS)</li>
      </ul>
      </>
    ),
  },
  {
    title: 'Monitoring and Rate Limiting',
    Svg: require('@site/static/img/monitoring-svgrepo-com.svg').default,
    description: (
      <>
      <ul>
        <li>Log requests and responses comprehensively.</li>
        <li>Use in-memory or Redis-based rate limiting to manage request flow and prevent overload</li>
      </ul>
      </>
    ),
  },
  {
    title: 'Load Balancing and TLS Support',
    Svg: require('@site/static/img/load-balancer-svgrepo-com.svg').default,
    description: (
      <>
        Ensure high performance and secure communication with round-robin load balancing and TLS integration.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
