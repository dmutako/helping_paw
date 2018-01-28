import React, { Component } from 'react';
import './App.css';
import Filteredlist from './Filteredlist';
import Sortedlist from './Sortedlist';

const dogs = [
  {name: "Bernese Mountain Dog", type: "boofer", text: "boofiest boofer", url: "bernesemountaindog.jpg", coat: "floofy as h*ck", color: "C"},
  {name: "Corgi", type: "pupper", text: "Booteous maximus", url: "corgi.jpeg", coat: "furry", color: "A"},
  {name: "Pit Bull", type: "boofer", text: "presh", url: "pitbull.jpg", coat: "bald", color: "C"},
  {name: "Dachsund", type: "pupper", text: "weenie boi", url: "dachsund.png", coat: "hairy", color: "B"},
  {name: "German Shepherd", type: "woofer", text: "he protec, he don't atac, and he cute as h*c", url: "german_shepherd.png", coat: "furry", color: "C"},
  {name: "Shiba Inu", type: "doggo", text: "OG doge", url: "ShibaInu.jpg", coat: "furry", color: "A"},
  {name: "Goldendoodle", type: "doggo", text: "fake good boy", url: "golden_doodle.jpg", coat: "hairy", color: "B"},
  {name: "Golden Retriever", type: "woofer", text: "good boy", url: "goldenretriever.jpg", coat: "hairy", color: "A"},
  {name: "Shetland Sheepdog", type: "doggo", text: "floofer", url: "Shetland_Sheepdog.jpg", coat: "floofy as h*ck", color: "B"},
  {name: "Maltese", type: "pupper", text: "snowball queen", url: "Maltese.jpg", coat: "floofy as h*ck", color: "A"},
  {name: "Labrador", type: "woofer", text: "dark chocolate", url: "lab.jpg", coat: "bald", color: "C"},
  {name: "Great Dane", type: "boofer", text: "fake Scooby real cute", url: "great_dane.png", coat: "bald", color: "C"}
];



class App extends Component {
    render() {
        return (
          <div>
            <div className="App">
              <header className="App-header">
                <h1 className="App-title">Doge!</h1>
              </header>
              <Filteredlist items={dogs} />
            </div>
            
            
          </div>
        );
    }
}

export default App;


/*
<img src={logo} className="App-logo" alt="logo" />
<p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
*/
