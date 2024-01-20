import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Gallarybody from './components/Gallarybody';
import Gallaryheader from './components/Gallaryheader';

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
