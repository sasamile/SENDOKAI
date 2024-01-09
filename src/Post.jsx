import { useEffect } from "react";
import { useState } from "react";

function Post() {
  const [senkus, setSenkus] = useState([]);

  async function Api() {
    try {
      const res = await fetch("https://nodejs-api-b6yf.onrender.com/1");
      const data = await res.json();

      setSenkus(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    Api();
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-300 to-gray-600 w-full py-12">
      <h1 className=" text-center text-6xl font-bold uppercase font-Over text-black/70">Sendokai</h1>
    <ul className="wrapper grid md:grid-cols-2 gap-12  py-12 w-[90%]">
      
      {senkus?.map((user) => (
        <li
          key={user.id}
          className="flex bg-gradient-to-t to-gray-700 from-gray-400  gap-4 p-6 rounded-2xl max-sm:flex-wrap justify-center md:flex-col xl:flex-row"
        >
          <img
            src={user.imagen}
            alt="logo"
            width={300}
            height={50}
            className="rounded-lg xl:w-[250px]"
          />
          <div className="grid place-items-center">
            <p className="text-5xl font-bold text-white font-Over">{user.name}</p>
            <div className="text-center">
              <p className="text-white/40 text-xl">Habilidad</p>
              <div className="flex items-center gap-3">
                <div className="bg-green-500 w-3 h-3 rounded-full">

                </div>
                <p className="text-2xl font-bold text-white">
                  {user.habilidades}
                </p>
              </div>
            </div>

            <img
              src={user.url}
              alt="logo"
              width={300}
              height={60}
              className="rounded-3xl"
            />
          </div>
        </li>
      ))}
    </ul>
    </section>
  );
}

export default Post;
