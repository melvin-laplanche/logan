import Android from "./svg/android.svg";
import Angular from "./svg/angular.svg";
import Apple from "./svg/apple.svg";
import Aws from "./svg/aws.svg";
import C from "./svg/c.svg";
import Cpp from "./svg/cpp.svg";
import Django from "./svg/django.svg";
import Docker from "./svg/docker.svg";
import ElasticSearch from "./svg/elasticsearch.svg";
import Electron from "./svg/electron.svg";
import Git from "./svg/git.svg";
import Go from "./svg/go.svg";
import GoogleCloud from "./svg/google-cloud.svg";
import Grpc from "./svg/grpc.svg";
import Heroku from "./svg/heroku.svg";
import Java from "./svg/java.svg";
import Javascript from "./svg/javascript.svg";
import Mongodb from "./svg/mongodb.svg";
import Mysql from "./svg/mysql.svg";
import Nodejs from "./svg/nodejs.svg";
import Postgres from "./svg/postgres.svg";
import Python from "./svg/python.svg";
import Reactjs from "./svg/reactjs.svg";
import Reasonml from "./svg/reasonml.svg";
import Redis from "./svg/redis.svg";
import Swift from "./svg/swift.svg";
import Typescript from "./svg/typescript.svg";
import Unknown from "./svg/unknown.svg";

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

export default function Logo({ name }: { name: string }) {
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
