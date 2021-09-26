import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchNames } from "../services";
import Delete from "./Delete";

import { useParams } from "react-router";

export default function Home() {
  const [name, setName] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getNames = async () => {
      setName(await fetchNames(id));
    };
    getNames();
    // eslint-disable-next-line
  }, []);

 

    return (
      <div>
        {name.map((name) => {
          return (
            <div>
              <div class=" flex-initial sm:relative rounded-t-lg p-3 flex justify-center pb-20 pl-6">
                <div class=" flex-initial sm:relative h-20 sm:h-2 sm:w-2 flex rounded-t lg:rounded-t-none lg:rounded-l text-center">
                </div>
                <div class=" flex-initial border-r border-b border-l border-gray-800 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b-15 lg:rounded-b-none lg:rounded-r p-3 justify-between leading-normal sm:max-w-min ">
                  <div class="flex sm:relative p-1 flex-initial ">
                    <div class=" w-15 sm:relative flex-initial ">
                    </div>
                    <form class="flex-wrap sm: max-w-min flex-initial ">
                      <div class="flex-wrap items-baseline flex-initial ">
                        <h1 class="flex text-yellow-900 font-bold mb-2.5">
                          {name.fields.name}
                        </h1>
                        <hr class="border-1"/>
                        <div class=" flex-initial text-xl leading-7  text-yellow-900">
                          {name.fields.comment}
                        </div>
                      </div>
                      <div class="flex pt-10 space-x-3 mb-4 text-sm font-semibold">
                        <div class=" flex space-x-80">
                          <Link to={`/names/${name.id}/edit`} class="flex text-justify bg-blue-500 hover:bg-blue-900 text-white py-2 px-4 rounded-full">Edit</Link>
                          <Delete> id={name.id} </Delete>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        )
        }
      </div>
    )
  }

          

