import React from 'react'

import Info from './components/Info'
import SudokuGrid from './components/grid/SudokuGrid'

import './styles/App.scss'

function App() {
  return (
    <main className="container">
      <div className="layout">
        {/* <div className="info">
          <Info />
        </div> */}
        <div className="sudokuGrid">
          <SudokuGrid />
        </div>
      </div>
    </main>
  );
}

export default App;
