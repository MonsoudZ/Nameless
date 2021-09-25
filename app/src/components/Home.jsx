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
              <div class=" flex-initial rounded-t-lg p-3 flex justify-center pb-20 pl-6 ">
                <div class=" flex-initial h-20 lg:h-2 lg:w-2 flex rounded-t lg:rounded-t-none lg:rounded-l text-center">
                </div>
                <div class=" flex-initial border-r border-b border-l border-gray-800 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b-15 lg:rounded-b-none lg:rounded-r p-3 justify-between leading-normal md:max-w-lg ">
                  <div class="flex p-1 flex-initial ">
                    <div class=" w-15 flex-initial ">
                    </div>
                    <form class="flex-wrap flex-initial ">
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

          
                {/* <div class="flex items-baseline my-8">
                  <div class="space-x-2 flex text-sm font-medium">
                    <label>
                      <input class="w-9 h-9 flex items-center justify-center rounded-full bg-purple-700 text-white" name="size" type="radio" value="xs" checked>
                        XS
                      </input>
                    </label>
                    <label>
                      <input class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" value="s">
                        S
                      </input>
                    </label>
                    <label>
                      <input class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" value="m">
                        M
                      </input>
                    </label>
                    <label>
                      <input class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" value="l">
                        L
                      </input>
                    </label>
                    <label>
                      <input class="w-9 h-9 flex items-center justify-center rounded-full border-2 border-gray-200" name="size" type="radio" value="xl">
                        XL
                      </input>
                    </label>
                  </div> */}


