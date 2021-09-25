import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import Form from "./Form";



const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/nameless`;

const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function NewComment() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [category, setCategory] = useState("");


  // History
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      comment,
      category,
    };

    console.log(fields)
    const res = await axios.post(URL, { fields }, config);
    toast("Created Comment");
    history.push(`/nameless/${res.data.id}`);
  };

  return (
    <div>
      <h3 class="text-gray-900 text-align-center font-bold text-xl mb-2  boarder border-gray-300 pt-4">Create a new Post </h3>
      <Form
        name={name}
        setName={setName}
        comment={comment}
        setComment={setComment}
      category={category}
        setCategory={setCategory}
        handleSubmit={handleSubmit}
        type={"Create"}
      />
    </div>
  );
}
