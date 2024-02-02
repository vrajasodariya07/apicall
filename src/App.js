import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';
import { FaGithub, FaTwitter, FaHeart } from "react-icons/fa";

function App() {

  let [data, setdata] = useState([]);
  let [val, setval] = useState('');
  let [demo, setdemo] = useState([]);



  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setdata(response.data.results);
        setdemo(response.data.results);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

  }, [])

  let dataHandler = () => {
    let arr = [];

    arr = demo.filter((ele) => {
      return ele.name === val;
    })
    setdata(arr);
    console.log(arr);
  }

  return (
    <>

      {
        data.length == "0" ? <Loader></Loader> : <div>

          <div className="nav">
            <Container>
              <Row>
                <Col>
                  <div>
                    <ul className='d-flex justify-content-center align-items-center m-0'>
                      <li>Docs</li>
                      <li>About</li>
                      <li>
                        <a href="">SUPPORT US</a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <section className='heading'>
            <Container>
              <Row>
                <Col>
                  <div>
                    <h1 className='m-0 text-center'>The Rick and Morty API</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className='text-center'>
            <Container>
              <Row>
                <Col>
                  <input type="text" name="" id="" onChange={(e) => { setval(e.target.value) }} />
                  <input type="button" value="Click Here" onClick={dataHandler} />
                </Col>
              </Row>
            </Container>
          </section>

          <section className='item'>
            <Container>
              <Row>
                {
                  data.map((ele, ind) => {
                    return (
                      <Col className='box my-2' sm={6}>
                        <div className="bx d-flex h-100 align-items-center">
                          <div className="img">
                            <img src={ele.image} alt="" />
                          </div>
                          <div className="info p-3">
                            <div>
                              <h2 className='m-0'>{ele.name}</h2>
                              <div className='d-flex align-items-center'>
                                <div className='dot' style={{ backgroundColor: ele.status == "Alive" ? "#55cc44" : ele.status == "Dead" ? "#d63d2e" : "#9e9e9e" }}></div>
                                <span>{ele.status} - {ele.species}</span>
                              </div>
                            </div>
                            <div className='my-2'>
                              <span className='l'>Last known location:</span><br></br>
                              <a className='ln'>{ele.location.name}</a>
                            </div>
                            <div>
                              <span className='l'>First seen in:</span><br></br>
                              <a className='ln'>{ele.origin.name}</a>
                            </div>
                          </div>
                        </div>
                      </Col>
                    )
                  })
                }
                <Col></Col>
              </Row>
            </Container>
          </section>

          <footer className='footer'>
            <Container>
              <Row className='text-center'>
                <div>
                  <ul className='m-0 d-flex justify-content-center'>
                    <li>CHARACTERS: 826</li>
                    <li>LOCATIONS: 126</li>
                    <li>EPISODES: 51</li>
                  </ul>
                </div>
                <div className='mt-2'>
                  <a href="">SERVER STATUS</a>
                </div>
                <div className='my-4 icon'>
                  <ul className='m-0 d-flex justify-content-center p-0'>
                    <li><FaGithub /></li>
                    <li><FaTwitter /></li>
                    <li><FaHeart /></li>
                  </ul>
                </div>
                <div>
                  <span>❮❯ by <a href="" className='line'>Axel Fuhrmann</a> 2024</span>
                </div>
              </Row>
            </Container>
          </footer>

        </div>
      }

    </>
  );
}

export default App;
