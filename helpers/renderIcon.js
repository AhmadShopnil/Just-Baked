import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faGitAlt,
  faGithub,
  faGithubAlt,
  faHtml5,
  faJs,
  faLaravel,
  faNodeJs,
  faPhp,
  faReact,
  faShopify,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const renderIcon = (iconName) => {
  switch (iconName) {
    case "faHtml5":
      return <FontAwesomeIcon icon={faHtml5} />;
    case "faDatabase":
      return <FontAwesomeIcon icon={faDatabase} />;
    case "faReact":
    case "faReact":
      return <FontAwesomeIcon icon={faReact} />;
    case "faLaravel":
      return <FontAwesomeIcon icon={faLaravel} />;
    case "faPhp":
      return <FontAwesomeIcon icon={faPhp} />;
    case "faWordpress":
      return <FontAwesomeIcon icon={faWordpress} />;
    case "faShopify":
      return <FontAwesomeIcon icon={faShopify} />;
    case "faJs":
      return <FontAwesomeIcon icon={faJs} />;
    case "faDatabase":
      return <FontAwesomeIcon icon={faDatabase} />;
    case "faCss3Alt":
      return <FontAwesomeIcon icon={faCss3Alt} />;
    case "faBootstrap":
      return <FontAwesomeIcon icon={faBootstrap} />;
    case "faNodeJs":
      return <FontAwesomeIcon icon={faNodeJs} />;
    case "faGithub":
      return <FontAwesomeIcon icon={faGithub} />;
    case "faGithubAlt":
      return <FontAwesomeIcon icon={faGithubAlt} />;
    case "faGitAlt":
      return <FontAwesomeIcon icon={faGitAlt} />;
    default:
      return null;
  }
};
