
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import Navbar from "./navbar";


function App() {
  return <React.Fragment>
    <div>
      <navbar/>
    </div>

    <h1 className='text-center text-danger text-capitalize my-5' > 
      Welcome to the Coursera
    </h1>
    <div className="container">
  <div className="row">
    <div className="col-sm"><div class="card width:100" >
  <img src="https://picsum.photos/200" class="card-img-top" alt="..." height="200px" />
  <div class="card-body">
    <h5 class="card-title">Web Design</h5>
    <p class="card-text">Lastupdated:04/03/2022</p>
    <p class="card-text"> Lesson 1  Minutes:60</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
<div className="col-sm"><div class="card" >
  <img src="https://picsum.photos/201/302" class="card-img-top" alt="..." height="200px" />
  <div class="card-body">
    <h5 class="card-title">Sales Marketting</h5>
    <p class="card-text">Lastupdated:04/03/2022</p>
    <p class="card-text"> Lesson 1  Minutes:60</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
<div className="col-sm"><div class="card" >
  <img src="https://picsum.photos/202/303" class="card-img-top" alt="..." height="190px" />
  <div class="card-body">
    <h5 class="card-title">Full Stack Developer</h5>
    <p class="card-text">Lastupdated:04/03/2022</p>
    <p class="card-text"> Lesson 1  Minutes:60</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
<div className="col-sm"><div class="card" >
  <img src="https://picsum.photos/203/304" class="card-img-top" alt="..." height="200px" />
  <div class="card-body">
    <h5 class="card-title">Python</h5>
    <p class="card-text">Lastupdated:04/03/2022</p>
    <p class="card-text"> Lesson 1  Minutes:60</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
<div className="col-sm"><div class="card" >
  <img src="https://picsum.photos/204/305" class="card-img-top" alt="..." height="100px" />
  <div class="card-body">
    <h5 class="card-title">DSA Algorithm</h5>
    <p class="card-text">Lastupdated:04/03/2022</p>
    <p class="card-text"> Lesson 1  Minutes:60</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
    <div className="col-sm"><div class="card" >
  <img src="https://picsum.photos/205/306" class="card-img-top" alt="..." height="100px" />
  <div class="card-body">
    <h5 class="card-title">Wordpress</h5>
    <p class="card-text">Lastupdated:04/03/2022</p>
    <p class="card-text"> Lesson 1  Minutes:60</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
    <div className="col-sm"><div class="card" >
  <img src="https://picsum.photos/206/307" class="card-img-top" alt="..."  height="100px" />
  <div class="card-body">
    <h5 class="card-title">Blockchain</h5>
    <p class="card-text">Lastupdated:04/03/2022</p>
    <p class="card-text"> Lesson 1  Minutes:60</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div></div>
  
</div>
</div>
  </React.Fragment>
};  

export default App;
