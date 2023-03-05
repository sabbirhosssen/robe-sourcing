import axios from "axios";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [datas, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(res.data);
    };
    fetchData();
  }, []);
  // const { data } = useQuery("quote", () => getQuote());
  console.log(datas);

  const content = datas.map((post) => (
    <div key={post.id}>
      <h3>{post?.title}</h3>
      <p>{post?.content}</p>
    </div>
  ));
  return (
    <div>
      {content}
      <h1 className="text-green-400"> projects</h1>
    </div>
  );
};

export default Projects;
