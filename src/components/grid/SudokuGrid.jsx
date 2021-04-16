import React from 'react'

import { gridStore } from '../../utils/Store'
import Cell from './Cell';

import './gridStyles.scss';

export default function SudokuGrid() {

  const { r1, r2, r3, r4, r5, r6, r7, r8, r9 } = gridStore();

  let sudokuGrid = [r1, r2, r3, r4, r5, r6, r7, r8, r9];

  sudokuGrid.forEach(array => {
    array.forEach(num => {
      if (num === 0) {
        array.splice(array.indexOf(num), 1, undefined);
      }
    });
  });

  let tl = [].concat(r1.slice(0,3), r2.slice(0,3), r3.slice(0,3));
  let tm = [].concat(r1.slice(3,6), r2.slice(3,6), r3.slice(3,6));
  let tr = [].concat(r1.slice(6,9), r2.slice(6,9), r3.slice(6,9));
  
  let ml = [].concat(r4.slice(0,3), r5.slice(0,3), r6.slice(0,3));
  let mm = [].concat(r4.slice(3,6), r5.slice(3,6), r6.slice(3,6));
  let mr = [].concat(r4.slice(6,9), r5.slice(6,9), r6.slice(6,9));

  let bl = [].concat(r7.slice(0,3), r8.slice(0,3), r9.slice(0,3));
  let bm = [].concat(r7.slice(3,6), r8.slice(3,6), r9.slice(3,6));
  let br = [].concat(r7.slice(6,9), r8.slice(6,9), r9.slice(6,9));

  return (
    <div className="grid">
      <div className="tl">
        <Cell square={tl} squareID={1} />
      </div>
      <div className="tm">
        <Cell square={tm} squareID={2} />
      </div>
      <div className="tr">
        <Cell square={tr} squareID={3} />
      </div>
      <div className="ml">
        <Cell square={ml} squareID={4} />
      </div>
      <div className="mm">
        <Cell square={mm} squareID={5} />
      </div>
      <div className="mr">
        <Cell square={mr} squareID={6} />
      </div>
      <div className="bl">
        <Cell square={bl} squareID={7} />
      </div>
      <div className="bm">
        <Cell square={bm} squareID={8} />
      </div>
      <div className="br">
        <Cell square={br} squareID={9} />
      </div>
    </div>
  )
}
