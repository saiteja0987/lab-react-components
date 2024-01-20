import './App.css';
import GallaryFooter from './components/GallaryFooter.jsx';
import Gallarybody from './components/Gallarybody.jsx';
import Gallaryheader from './components/Gallaryheader.jsx';

function App(props) {
  const imageData = props.Data
  return (
    <div>
      <Gallaryheader/>
      <Gallarybody imageData={imageData}/>
      <GallaryFooter/>
    </div>
  )
}

export default App;
