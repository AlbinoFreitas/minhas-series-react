import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function NewGenre() {
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  const onChange = event => {
    setName(event.target.value);
  }

  const saveGenre = () => {
    if (!name.length) {
      return;
    }

    axios
      .post('/api/genres', { name })
      .then(res => {
        setSuccess(true);
      });
  }

  if (success) {
    return <Redirect to='/generos'/>
  }

  return (
    <div className='container'>
      <h1>Gênero</h1>

      <form action=''>
        <div className='form-group'>
          <label htmlFor="name">Nome</label>
          <input type="text" value={name} className='form-control' id='name' onChange={onChange} />
        </div>
        <button type='button' className='btn btn-primary' onClick={saveGenre}>Salvar</button>
      </form>
    </div>
  );
}

export default NewGenre;