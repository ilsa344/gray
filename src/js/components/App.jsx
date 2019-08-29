import React, { Component } from "react";
import data from "./data"
import Nav from "./Nav"
import Header from "./Header"
import About from "./About"
import Projects from "./Projects"
import Sign from "./Sign"
import Contact from "./Contact"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data:data
    };
  };
  render() { 
    return ( 
      <div>
        <Nav nav={this.state.data[0].nav}/>
        <Header header={this.state.data[0].header}/>
        <About  about={this.state.data[0].about}/>
        <Projects projects={this.state.data[0].projects} />
        <Sign sign= {this.state.data[0].sign} />
        <Contact contact={this.state.data[0].contact} />
      </div>
      
     );
  }
}
 
export default App;