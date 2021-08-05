import { Col, Container, Row } from 'reactstrap';
import './App.css';
import Todos from './components/Todos';

function App() {

  
  return (
    <div className='App'>
      <Container>
        <Row>
          <Col>
           <Todos/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

