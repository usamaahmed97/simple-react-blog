import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const blogEndPoint = `http://localhost:8000/blogs/${blogId}`;
  const { data, isPending } = useFetch(blogEndPoint);

  const handleDelete = () => {
    fetch(blogEndPoint, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending ? (
        <div>Loading...</div>
      ) : (
        data && (
          <article>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <p>Written By {data.author}</p>
            <button onClick={handleDelete}>Delete Blog</button>
          </article>
        )
      )}
    </div>
  );
};

export default BlogDetails;
