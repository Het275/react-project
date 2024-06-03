import React from "react";

function Home({ name, seeds }) {
  // const seeds = [1, 2, 5, 6]
  const myObject = [
    {
      id: 1,
      myProject: "React",
      author: "Stark",
    },
    {
      id: 2,
      myProject: "JavaScript",
      author: "Thor",
    },
    {
      id: 3,
      myProject: "HTML",
      author: "Steve",
    },
  ];
  return (
    <>
      <ol>
        {myObject.map((object) => {
          return (
            <div key={object.id} className="flex">
              <li>
                {object.myProject} - {object.author}
              </li>
            </div>
          );
        })}
      </ol>
    </>
  );
}

export default Home;
