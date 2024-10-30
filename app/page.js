'use client'

import { useState } from "react"


export default function Home() {
  // formula: (medida do pe + 1) / 0.666

  const [medida, setMedida] = useState('')
  const [shoeSize, setShoeSize] = useState('')
  const [type, setType] = useState('cm')
  const [visible, setVisible] = useState(false)

  function calculate(){
    setVisible(true)
    if(type === 'inch'){
      const inchToCm = 2.54
      let calc1 = parseFloat(medida) * inchToCm +1
      let calc2 = calc1 / 0.666
      
      setShoeSize(calc2.toFixed(0))
    }else{
      
      let calc = (parseFloat(medida) +1) / 0.666
      
      
      setShoeSize(calc.toFixed(0))
    }
  }

  return (
   
    <div className="flex flex-col gap-4 items-center  justify-center h-screen">
      <h1 className="font-bold text-2xl mx-10 mb-12">Nunca mais se engane a escolher o seu sapato!</h1>

      <div className="flex flex-col gap-4 items-center justify-center bg-slate-100 mx-32 rounded p-5 shadow-lg max-w-96">
      <h2 className="font-bold">Como proceder?</h2>
      <p className="">Coloque o seu pé descalço sobre uma folha e faça um ponto no calcanhar e outro no dedo grande do pé,
        meça o comprimento entre os dois pontos.
      </p>
      <span className="flex gap-2">
      <input value={medida} onChange={(e) => setMedida(e.target.value)} type="number" placeholder="Inserir aqui"></input> 

      <select onChange={(e) => setType(e.target.value)}>
        <option>cm</option>
        <option>inch</option>
      </select>

      </span>
      <button onClick={calculate} className="bg-gray-400 p-2 rounded px-8 shadow-lg hover:opacity-70 duration-200">Calcular</button>
      <p> {visible?`O seu numero de calçado é o ${shoeSize}`:''}
      
      </p>
      </div>

    </div>
  );
}
