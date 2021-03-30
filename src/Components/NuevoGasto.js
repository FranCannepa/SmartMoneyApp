import React, { useState, Fragment } from 'react';

const NewGasto = () => {
  /* const url = 'http://localhost:4000/NuevoGasto';
  const [valor, setvalor] = useState("");
  const [tipog, settipog] = useState("");
  const [infog, setinfog] = useState("");
  const [tipom, settipom] = useState("");
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { valor, infog, tipog, tipom };
      console.log(body);

      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);




    } catch (err) {
      console.error(err.message);
    }
  } */
  const [valor, setvalor] = useState("");
  const [tipog, settipog] = useState("");
  const [infog, setinfog] = useState("");
  const [tipom, settipom] = useState("");
  
    const onSubmitForm = async e =>{
      e.preventDefault();
      try {
        const body = { valor, infog, tipog, tipom };
        const response = await fetch('http://localhost:4000/nuevogasto', {
          method: "POST",
          mode : "cors",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify(body),
          
         
      });
      console.log(response);
      
      } catch (err) {
        console.error(err.message);
      }
    }

  return (
    <Fragment>
      <h1>NuevoGasto</h1>

      <form onSubmit={onSubmitForm}>
        <input type="number" placeholder="Valor" value={valor} onChange={e => setvalor(e.target.value)} />
        <br></br>
        <input type="text" placeholder="Tipo Gasto" value={tipog} onChange={e => settipog(e.target.value)} />
        <br></br>
        <input type="text" placeholder="Descripcion" value={infog} onChange={e => setinfog(e.target.value)} />
        <br></br>
        <input type="text" placeholder="Moneda" value={tipom} onChange={e => settipom(e.target.value)} />
        <br></br>
        <button>SUBMIT</button>
      </form>

    </Fragment>
  )
}

export default NewGasto;

/* const [valor, infog, tipog, tipom, setvalor, setinfog, settipog, settipom] = useState("");


 <input type="text" placeholder="Tipo Gasto" value={tipog} onChange={e => settipog(e.target.value)} />
       <br></br>
       <input type="number" placeholder="Valor" value={valor} onChange={e => setvalor(e.target.value)} />
       <br></br>
       <input type="text" placeholder="Descripcion" value={infog} onChange={e => setinfog(e.target.value)} />
       <br></br>
       <input type="text" placeholder="Moneda" value={tipom} onChange={e => settipom(e.target.value)} />
       <br></br>
       <button>SUBMIT</button>
       </form>
       </div> */