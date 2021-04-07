import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <Link href={`/${post.Slug}`}>
              <a>
                <h2>{post.Title}</h2>
              </a>
            </Link>
            <span>{post.User?.username}</span>
          </div>
        ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
