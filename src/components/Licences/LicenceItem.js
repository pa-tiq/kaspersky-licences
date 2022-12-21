import './LicenceItem.css';
import React, {useEffect, useRef, useState} from 'react';
import Card from '../UI/Card/Card';

const qtd_licencas = [
  { om:"4CTA", qtd:60 },
  { om:"12BSUP", qtd:152},
  { om:"12RM", qtd:285},
  { om:"HMAM", qtd:264},
  { om:"CECMA", qtd:133},
  { om:"CRO12"  , qtd:116},
  { om:"4CGEO"  , qtd:175},
  { om:"3CIAFESP", qtd:142},
  { om:"2GPTE"  , qtd:162},
  { om:"Cia C CMA" , qtd:31 },
  { om:"7BPE", qtd:38 },
  { om:"12GAAAESL" , qtd:60 },
  { om:"CMA"  , qtd:268},
  { om:"4BIM", qtd:73 },
  { om:"PQRMNT12", qtd:137},
  { om:"1BIS", qtd:185},
  { om:"4BAVEX", qtd:160},
  { om:"1BCOMGESL" , qtd:82 },
  { om:"CIGS", qtd:39 },
  { om:"CMM"  , qtd:400},
  { om:"12CGCFE", qtd:62 },
]

function LicenceItem(props){

  const [title,setTitle] = useState(props.title);
  const [qtdDisponibilizada,setQtdDisponibilizada] = useState(0);
  const [edit,setEdit] = useState(null);
  
  const inputForm = useRef(null);

  useEffect(() => {
    qtd_licencas.forEach((item)=>{
      console.log(item.om,props.title);
      if(item.om === props.title){        
        setQtdDisponibilizada(item.qtd);
      }
    });
  },[title]);

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
    <h2>
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
            {qtdDisponibilizada > 0 ?? <div className='expense-item__price'>{`Qtd Disponibilizada: ${qtdDisponibilizada}`}</div>}
            <div className='expense-item__price'>{props.qtd}</div>
        </div>
      </Card>
    </li>
  );
}

export default LicenceItem;