import React, { useState, useEffect } from 'react'

import './cellStyles.scss';

export default function Cell({ square, squareID }) {

  const [tlc, setTlc] = useState({ val: square[0], isLocked: false });
  const [tmc, setTmc] = useState({ val: square[1], isLocked: false });
  const [trc, setTrc] = useState({ val: square[2], isLocked: false });
  const [mlc, setMlc] = useState({ val: square[3], isLocked: false });
  const [mmc, setMmc] = useState({ val: square[4], isLocked: false });
  const [mrc, setMrc] = useState({ val: square[5], isLocked: false });
  const [blc, setBlc] = useState({ val: square[6], isLocked: false });
  const [bmc, setBmc] = useState({ val: square[7], isLocked: false });
  const [brc, setBrc] = useState({ val: square[8], isLocked: false });
  
  const [boxes, setBoxes] = useState([tlc, tmc, trc, mlc, mmc, mrc, blc, bmc, brc]);
  const [lockedAll, setLockedAll] = useState(false);
  
  useEffect(() => {
    boxes.forEach(box => {
      if (box.val !== undefined) {
        box.isLocked = true;
      }
    });
    setLockedAll(true);


  }, [boxes]);

  const handleInput = (e) => {
    e.target.value = e.target.value.replace(/[^1-9]/g,'');
  }

  if (lockedAll) {
    return (
      <div className="cell">
        <input type="text" maxLength="1" disabled={tlc.isLocked} className={tlc.isLocked ? "tlc locked" : "tlc"} value={tlc.val} onChange={handleInput}/>
        <input type="text" maxLength="1" disabled={tmc.isLocked} className={tmc.isLocked ? "tmc locked" : "tmc"} value={tmc.val} onChange={handleInput}/>
        <input type="text" maxLength="1" disabled={trc.isLocked} className={trc.isLocked ? "trc locked" : "trc"} value={trc.val} onChange={handleInput}/>
        <input type="text" maxLength="1" disabled={mlc.isLocked} className={mlc.isLocked ? "mlc locked" : "mlc"} value={mlc.val} onChange={handleInput}/>
        <input type="text" maxLength="1" disabled={mmc.isLocked} className={mmc.isLocked ? "mmc locked" : "mmc"} value={mmc.val} onChange={handleInput}/>
        <input type="text" maxLength="1" disabled={mrc.isLocked} className={mrc.isLocked ? "mrc locked" : "mrc"} value={mrc.val} onChange={handleInput}/>
        <input type="text" maxLength="1" disabled={blc.isLocked} className={blc.isLocked ? "blc locked" : "blc"} value={blc.val} onChange={handleInput}/>
        <input type="text" maxLength="1" disabled={bmc.isLocked} className={bmc.isLocked ? "bmc locked" : "bmc"} value={bmc.val} onChange={handleInput}/>
        <input type="text" maxLength="1" disabled={brc.isLocked} className={brc.isLocked ? "brc locked" : "brc"} value={brc.val} onChange={handleInput} />
      </div>
    )
  } else {
    return (
      <React.Fragment></React.Fragment>
    )
  }

}
