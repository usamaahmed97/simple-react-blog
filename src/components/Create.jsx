import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Ahmed");
  const [isPending, setIsPending] = useState(false);

  const blogPostEndPoint = "http://localhost:8000/blogs";
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);
    fetch(blogPostEndPoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
    });
    navigate("/");
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <label>Blog Body:</label>
        <textarea
          rows={25}
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          required
        ></textarea>
        <label>Blog Author:</label>
        <select
          name="authors"
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          id="authors"
        >
          <option>Usama</option>
          <option>Ahmed</option>
          <option>Qasmi</option>
        </select>
        {isPending ? (
          <button disabled>Add Blog...</button>
        ) : (
          <button>Add Blog</button>
        )}
      </form>
    </div>
  );
};

export default Create;
