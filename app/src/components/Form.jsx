export default function Form(props) {
  const checkIfDisabled = () => {
    // some condition check
    return false;
  };
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
      />
      <br />
      <label>Comment</label>
      <input
        type="text"
        value={props.comment}
        onChange={(e) => props.setComment(e.target.value)}
      />
      <br />
      <label>Category</label>
      <input
        type="text"
        value={props.category}
        onChange={(e) => props.setCategory(e.target.value)} />
     
      <br />
      <button class="bg-green-500 active:bg-green-700 ..."disabled={checkIfDisabled()}>{props.type}Finish</button>
    </form>
  );
}
