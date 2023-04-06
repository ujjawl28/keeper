import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [click,isClick] = useState(false);
  const [str, setStr] = useState({
    title: "",
    content: ""
  });

  function solve1(e) {
    setStr({ ...str, title: e.target.value });
  }
  function solve2(e) {
    setStr({ ...str, content: e.target.value });
  }

  function submitNote(e) {
    e.preventDefault();
    props.onChecked(str);
    setStr({ title: "", content: "" });
  }

 function expand(){
  isClick(true)
 }

  return (
    <div>
      <form className="create-note">
      {click && <input
          name="title"
          placeholder="Title"
          onChange={solve1}
          value={str.title}
        />
      }
        
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={click ? 3 : 1}
          onClick={expand}
          onChange={solve2}
          value={str.content}
        />
        <Zoom in={click}>
        <Fab onClick={submitNote}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
