import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import { FaExclamationTriangle } from "react-icons/fa";
export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h2>Not Found!</h2>
        <h4>Sorry There is no page here!</h4>
      </div>
    </Layout>
  );
}
