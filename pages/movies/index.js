import Link from "next/link";
import { movies } from "../../lib/data";
import Head from "next/head";

export default function Movies() {
  return (
    <>
      <Head>
        <title>List of Movies</title>
      </Head>
      <h1>List of Movies</h1>
      <ul>
        {movies.map(({ id, slug, title }) => (
          <li key={id}>
            <Link href={`/movies/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
