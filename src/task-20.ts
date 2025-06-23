import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data.slice(0, 3);
};

const logThreePosts = async (): Promise<void> => {
  const posts = await fetchPosts();
  posts.forEach((post) => {
    console.log(`Post - ${post.title} ${post.body}`);
  });
};

logThreePosts();
