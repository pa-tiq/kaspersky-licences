import './LicenceItem.css';
import React, {useEffect, useRef, useState} from 'react';
import Card from '../UI/Card/Card';

function LicenceItem(props){

  const [title,setTitle] = useState(props.title);
  const [edit,setEdit] = useState(null);
  
  const inputForm = useRef(null);

  useEffect(() => {
    setTitle(props.title);
  },[props.title]);

  useEffect(() => {
    if(inputForm.current) inputForm.current.focus();
  },[edit]);
  

  function showEditor(e){
    setEdit({
      item: e.target.id,
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    const input = e.target.firstChild.value;
    setTitle(input);
    setEdit(null);
  }

  function handleBlur(e){
    setEdit(null);
  }

  function handleKeyDown(e){
    if(e.key === "Escape"){
      setEdit(null);
    }
  }

  const editTitleOnDoubleClick = (
    <h2 onDoubleClick={showEditor}>
        {
          edit ?
            <div id={props.id}>
              <form onSubmit={handleSubmit} onBlur={handleBlur} onKeyDown={handleKeyDown}> 
                <input ref={inputForm} type="text" className='input' defaultValue={title}/>
              </form>
            </div>
          : 
            <div>{title}</div>
        }
    </h2>
  );

  return (
    <li>
      <Card className='expense-item'>
        <div className='expense-item__description'>      
            {editTitleOnDoubleClick}
            <div className='expense-item__price'>{props.qtd}</div>
        </div>
      </Card>
    </li>
  );
}

export default LicenceItem;