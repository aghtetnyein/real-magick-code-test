import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <section className="space-y-8">
      <div class="border-b border-[#2b2d42] px-4 md:px-20 py-4 z-10 fixed top-0 w-screen bg-white">
        <h1 className="font-bold">React Fetch API</h1>
      </div>
      {data.length <= 0 ? (
        <div className="w-screen h-[90vh] flex items-center justify-center">
          <h1 className="text-sm">Loading...</h1>
        </div>
      ) : (
        <ul className="mx-4 md:mx-20 py-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <li
              key={item.id}
              className="p-4 border border-[#2b2d42] rounded-md flex flex-col justify-between"
            >
              <p className="text-xl font-bold mb-4">{item.title}</p>
              <p className="text-sm">{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
