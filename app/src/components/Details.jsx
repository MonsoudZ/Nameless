import { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { Link } from "react-router-dom";
import { fetchComment } from "../services";
// import CommentBar from "./CommentBar";
// import Delete from "./Delete";

export default function Details() {
  const [name, setName] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getName = async () => {
      setName(await fetchComment(id));
      setLoading(false);
    };

    getName();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>LOADING!!!!</div>;
  }

  return (
    <div>
<div class="max-w-sm w-full lg:max-w-full lg:flex">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
      <div class="text-gray-900 font-bold text-xl mb-2">{name.fields.name}</div>
      <h4></h4>
      </p>
      <p class="text-gray-700 text-base">{name.fields.comment}</p>
    </div>
    <div class="flex items-center">
      <div class="text-sm">
        <p class="text-gray-900 leading-none">{name.fields.category}</p>
        {/* <p class="text-gray-600">Aug 18</p> */}
      </div>
    </div>
  </div>
      </div>
      


      );
    }




      {/* <h1>{name.fields.name}</h1>
      <h4>{name.fields.comment}</h4>
      <h4>{name.fields.category}</h4>
  <br />
      <div>
        <Link to={`/names/${id}/edit`} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Edit</Link>
      </div>
      <br />
      <div>
        <Delete id={id} />
      </div> */}
    {/* </div> */}
    