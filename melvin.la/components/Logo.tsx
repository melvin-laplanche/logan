import { ReactComponent as Android } from "./svg/android.svg";
import { ReactComponent as Angular } from "./svg/angular.svg";
import { ReactComponent as Apple } from "./svg/apple.svg";
import { ReactComponent as Aws } from "./svg/aws.svg";
import { ReactComponent as C } from "./svg/c.svg";
import { ReactComponent as Cpp } from "./svg/cpp.svg";
import { ReactComponent as Django } from "./svg/django.svg";
import { ReactComponent as Docker } from "./svg/docker.svg";
import { ReactComponent as ElasticSearch } from "./svg/elasticsearch.svg";
import { ReactComponent as Electron } from "./svg/electron.svg";
import { ReactComponent as Git } from "./svg/git.svg";
import { ReactComponent as Go } from "./svg/go.svg";
import { ReactComponent as GoogleCloud } from "./svg/google-cloud.svg";
import { ReactComponent as Grpc } from "./svg/grpc.svg";
import { ReactComponent as Heroku } from "./svg/heroku.svg";
import { ReactComponent as Java } from "./svg/java.svg";
import { ReactComponent as Javascript } from "./svg/javascript.svg";
import { ReactComponent as Mongodb } from "./svg/mongodb.svg";
import { ReactComponent as Mysql } from "./svg/mysql.svg";
import { ReactComponent as Nodejs } from "./svg/nodejs.svg";
import { ReactComponent as Postgres } from "./svg/postgres.svg";
import { ReactComponent as Python } from "./svg/python.svg";
import { ReactComponent as Reactjs } from "./svg/reactjs.svg";
import { ReactComponent as Reasonml } from "./svg/reasonml.svg";
import { ReactComponent as Redis } from "./svg/redis.svg";
import { ReactComponent as Swift } from "./svg/swift.svg";
import { ReactComponent as Typescript } from "./svg/typescript.svg";
import { ReactComponent as Unknown } from "./svg/unknown.svg";

export {
  Android,
  Angular,
  Apple,
  Aws,
  C,
  Cpp,
  Django,
  Docker,
  ElasticSearch,
  Electron,
  Git,
  Go,
  GoogleCloud,
  Grpc,
  Heroku,
  Java,
  Javascript,
  Mongodb,
  Mysql,
  Nodejs,
  Postgres,
  Python,
  Reactjs,
  Reasonml,
  Redis,
  Swift,
  Typescript,
  Unknown,
};

export default function Logo() {
  switch (name) {
    case "android":
      return <Android />;
    case "angular":
      return <Angular />;
    case "apple":
      return <Apple />;
    case "aws":
      return <Aws />;
    case "c":
      return <C />;
    case "cpp":
      return <Cpp />;
    case "django":
      return <Django />;
    case "docker":
      return <Docker />;
    case "elasticSearch":
      return <ElasticSearch />;
    case "electron":
      return <Electron />;
    case "git":
      return <Git />;
    case "go":
      return <Go />;
    case "googleCloud":
      return <GoogleCloud />;
    case "grpc":
      return <Grpc />;
    case "heroku":
      return <Heroku />;
    case "java":
      return <Java />;
    case "javascript":
      return <Javascript />;
    case "mongodb":
      return <Mongodb />;
    case "mysql":
      return <Mysql />;
    case "nodejs":
      return <Nodejs />;
    case "postgres":
      return <Postgres />;
    case "python":
      return <Python />;
    case "reactjs":
      return <Reactjs />;
    case "reasonml":
      return <Reasonml />;
    case "redis":
      return <Redis />;
    case "swift":
      return <Swift />;
    case "typescript":
      return <Typescript />;
    default:
      return <Unknown />;
  }
}
