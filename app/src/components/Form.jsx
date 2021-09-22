import DropDown from "./DropDown"
export default function Form(props) {
  const checkIfDisabled = () => {
    // some condition check
    return false;
  };
  return (
    <form onSubmit={props.handleSubmit} class=" w-full ">
      <div class="flex w-full -mx-2 mb-6">
        <div class="w-full md:w-1/2 px-1 ml-20 mb-6 md:mb-0 text-justify">
          Name 
          <label class="flex  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            <input class="py-1 px-1  bg-gray-200 text-gray-700 border border-gray-200rounded"
              type="text"
              value={props.name}
              onChange={(e) => props.setName(e.target.value)} />
          </label>
        </div>
      </div>
      <div class="flex -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-1 ml-20 mb-6 md:mb-0 text-justify">
          Comment
          <label class="flex uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2" for="text">
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              value={props.comment}
              onChange={(e) => props.setComment(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div class="block appearance-none text-left ml-60 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <DropDown />
      </div>
      < br />
      < button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" disabled={checkIfDisabled()} > {props.type}</button >
    </form>
  )
  }


    /* <form onSubmit={props.handleSubmit}> */
    /* <label class="bg-purple-200 text-black  py-1 px-1 border border-200 rounded">Name</label> */
    //         <input class="py-1 px-1 border border-200 rounded"
    //           type="text"
    //           value={props.name} 
    //           onChange={(e) => props.setName(e.target.value)} />
    //         <br />
    //         <br />
    //         <label class="bg-purple-200 text-black  py-1 px-1 border border-200 rounded">Comment</label>
    //         <input class="py-1 px-1 border border-200 rounded"
    //           type="text"
    //           value={props.comment}
    //           onChange={(e) => props.setComment(e.target.value)}
    //         />
    //         <br />
    //         <br />
    //         <label class="bg-purple-200 text-black  py-1 px-1 border border-200 rounded">Category </label>
    //         <input class="py-1 px-1 border border-200 rounded"
    //           type="text"
    //           value={props.category} 
    //           onChange={(e) => props.setCategory(e.target.value)} />
    //       
    // < button class="bg-green-500 active:bg-green-700 text-black font-bold py-2 px-4 border border-500 rounded"disabled = { checkIfDisabled() } > { props.type }</button >


