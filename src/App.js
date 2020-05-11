import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import parser from './parser';

function App() {
  const [value, setValue] = useState('');
  const [offset, setOffset] = useState(0);
  const [parsed, setParsed] = useState('Formated GFF output will appear here');
  const [chr, setChr] = useState('chr22');
  const [program, setProgram] = useState('fgenesh');

  function parse() {
    let result;
    switch (program) {
      case 'geneid':
        result = parser.geneID(value, { offset, chr });
        break;
      case 'genescan':
        result = parser.genescan(value, { offset, chr });
        break;
      case 'fgenesh':
      default:
        result = parser.fgenesh(value, { offset, chr });
    }

    setParsed(result);
  }

  return (
    <div className="App">

      <h1> GFF Formatter</h1>
      <p>
        Generates GFF output from different program outputs (FGenesh, GeneID and GeneScan)
      </p>
      <textarea className="Input" value={value} onChange={e => setValue(e.target.value)} id="input" ></textarea>

      <label htmlFor="offset"> Offset:
        <input id="offset" type="number" value={offset} onChange={e => setOffset(e.target.value)} />
      </label>

      <label htmlFor="offset"> Chromosome:
        <input id="chr" type="text" value={chr} onChange={e => setChr(e.target.value)} />
      </label>

      <label htmlFor="offset"> Program:
      <select id="program" value={program} onChange={e => setProgram(e.target.value)}>
          <option value="fgenesh">FGENESH</option>
          <option value="geneid">GeneID</option>
          <option value="genescan">GeneScan</option>
        </select>
      </label>

      <button value="parse" onClick={parse} > GENERATE GFF </button>

      <pre>
        {parsed}
      </pre>
    </div>
  );
}

export default App;
