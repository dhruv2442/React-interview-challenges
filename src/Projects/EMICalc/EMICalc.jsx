import React, { useState } from 'react'

const EMICalc = () => {
    const [cost, setCost] = useState(0);
    const [interest, setInterest] = useState(10);
    const [fee, setFee] = useState(10);
    const [downPayment, setDownPayment] = useState(0);
    const [tenure, setTenure] = useState(12);
    const [emi, setEmi] = useState(0);
  return (
    <>
        <h2>EMI Calculator</h2>
        <div>
            <span className="title">
                Total Cost of Asset
            </span>
            <input 
                type="number" 
                value={cost} 
                onChange={(e)=>setCost(e.target.value)}
                placeholder='Total Cost of Asset'
            />
        </div>
        <div>
            <span className="title">
                Interest Rate (in %)
            </span>
            <input 
                type="number" 
                value={cost} 
                onChange={(e)=>setInterest(e.target.value)}
                placeholder='Interest Rate (in %)'
            />
        </div>
        <div>
            <span className="title">
                Processing Fee (in %)
            </span>
            <input 
                type="number" 
                value={cost} 
                onChange={(e)=>setFee(e.target.value)}
                placeholder='Processing Fee (in %)'
            />
        </div>
        <div>
            <span className="title">
                Down Payment
            </span>
            <input 
                type="range"
                min={0}
                max={cost}
                value={downPayment} 
                onChange={updateEmi}
            />
        </div>
        <div>
            <span className="title">
                Loan per Month
            </span>
            <input 
                type="range"
                min={calculateEmi(cost)}
                max={calculateEmi(0)}
                value={emi} 
                onChange={updateDownPayment}
            />
        </div>

    </>
  )
}

export default EMICalc