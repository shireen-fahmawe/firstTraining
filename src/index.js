import React from "react";
import ReactDOM from "react-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hobbies: ["hobby1", "hobby2", "hobby3", "hobby4", "hobby5"],
      selectedHobby: "",
      selectedHobbies: [],
      hobbiesHistory: [],
      hobbiyInput: "",
      Msg: ""
    };
  }

  render() {
    let textInput;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Hobbies:</h3>
            <ol>
              {this.state.hobbies.map(hobby => (
                <li
                  onClick={e =>
                    this.setState({
                      Msg: "",
                      selectedHobby: hobby,
                      selectedHobbies: this.state.selectedHobbies.concat([hobby]),
                      hobbiesHistory: [`The user select: ${[hobby]}`].concat(this.state.hobbiesHistory)
                      // hobbiesHistory: this.state.hobbiesHistory.concat(`The user select: ${[hobby]}`)

                    })
                  }
                >
                  {hobby}
                </li>
              ))}
            </ol>
            <button type="button" onClick={function () {
              if (this.state.hobbies.includes(this.state.hobbiyInput)) {
                this.setState({
                  Msg: "hobby exists",
                  hobbiyInput: "",
                  hobbiesHistory: [`The user try to add exists hobby: ${this.state.hobbiyInput} `].concat(this.state.hobbiesHistory)
                })
              } else if (this.state.hobbiyInput == "") {
                this.setState({
                  Msg: "Hobby input empty",
                  hobbiesHistory: [`The user try to add empty hobby`].concat(this.state.hobbiesHistory)
                  // hobbiesHistory: this.state.hobbiesHistory.concat(`The user try to add empty hobby`)
                })

              } else {
                this.setState({
                  Msg: "",
                  hobbies: this.state.hobbies.concat([this.state.hobbiyInput]),
                  hobbiesHistory: [`The user add: ${[[this.state.hobbiyInput]]}`].concat(this.state.hobbiesHistory),
                  // hobbiesHistory: this.state.hobbiesHistory.concat(`The user add: ${[[this.state.hobbiyInput]]}`),
                  hobbiyInput: ""
                })
              }

            }.bind(this)}>Add hobbies</button>


            <input type="text" name="name" id="input" value={this.state.hobbiyInput} onChange={function (e) {
              this.setState({ hobbiyInput: e.target.value })
            }.bind(this)} />
            <div><small>{this.state.Msg}</small></div>
          </div>
          <div className="col">

            {/* <div>Selected Hobby is: {this.state.selectedHobby}</div> */}
            <div>
              <h3>Selected Hobbies:</h3>
              {this.state.selectedHobbies.map((hobby, index) => (
                <p key={index}
                  onClick={e => {
                    this.setState({
                      Msg: "",
                      // hobbiesHistory: this.state.hobbiesHistory.concat(`The user delete: ${hobby}`)
                      hobbiesHistory: [`The user delete: ${hobby}`].concat(this.state.hobbiesHistory)

                    })
                    this.state.selectedHobbies.splice(index, 1)
                    // const filteredHobbies = this.state.selectedHobbies.filter(
                    //   hby =>hby != hobby                        
                    // );
                    // this.setState({ selectedHobbies: this.state.selectedHobbies });
                  }}
                >
                  {hobby}
                </p>
              ))}
            </div>
            <div>

            </div>
          </div>
          <div className="col">
            <h3>Hobbies History:</h3>
            {this.state.hobbiesHistory.map(hobby => (
              <p>{hobby}</p>
            ))}


          </div>


        </div>
      </div>



    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
