import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../app/api/auth/[...nextauth]/route";
import { prisma } from "../dependencies/prisma";
import PostCard from "./post-card";

const Feed = async () => {
  const session = await getServerSession(nextAuthOptions);

  if (!session?.user?.id) return "No user found";

  const posts = await prisma.post.findMany({
    where: {
      authorId: session.user.id,
    },
    include: {
      author: true,
    },
  });

  return (
    <div className="w-full h-full flex flex-col items-center">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.content}
          author={post.author.name}
        />
      ))}
    </div>
  );
};

export default Feed;
