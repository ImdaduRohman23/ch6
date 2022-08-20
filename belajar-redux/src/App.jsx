import PersonContainer from './components/PersonContainer'

import Github from './components/Github'
import TambahKurang from './components/TambahKurang'
import CardTable from './components/CardTable'

import Uploader from './components/Uploader'
import Player from './components/Player'
import Modalimage from './components/Modalimage'
import Pdf from './components/Pdf'


function App() {
  
  return (
    <div className="App">
      <Uploader />
      <hr /> <hr />
      <Player />
      <hr /> <hr />
      <Modalimage />
      <hr /> <hr />
    </div>

    // <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
    //   <Pdf />
    // </Worker>

  )
}

export default App
