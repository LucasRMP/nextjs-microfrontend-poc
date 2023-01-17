import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { GetServerSideProps } from "next";

export default function Home({ date }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        {date}
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      date: new Date().toString(),
    },
  };
};
