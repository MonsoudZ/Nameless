export default function Form(props) {
  const checkIfDisabled = () => {
    // some condition check
    return false;
  };
  return (
    <form onSubmit={props.handleSubmit}>
      <label class="bg-purple-200 text-black  py-1 px-1 border border-200 rounded">Name</label>
      <input
        type="text"
        value={props.name} 
        onChange={(e) => props.setName(e.target.value)}
      />
      <br />
      <br />
      <label class="bg-purple-200 text-black  py-1 px-1 border border-200 rounded">Comment</label>
      <input
        type="text"
        value={props.comment}
        onChange={(e) => props.setComment(e.target.value)}
      />
      <br />
      <br />
      <label class="bg-purple-200 text-black  py-1 px-1 border border-200 rounded">Category </label>
      <input
        type="text"
        value={props.category} 
        onChange={(e) => props.setCategory(e.target.value)} />
     
      <br />
      <br />
      <button class="bg-green-500 active:bg-green-700 text-black font-bold py-2 px-4 border border-500 rounded"disabled={checkIfDisabled()}>{props.type}Finish</button>
    </form>
    
  );
}
