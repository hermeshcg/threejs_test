import Description from './components/Description';
import Header from './components/Header';
import View from './components/View';
import { Row } from './styles';

function App() {
  return (
    <>
      <Header />
      <Row>
        <Description />
        <View />
      </Row>
    </>
  );
}

export default App;
