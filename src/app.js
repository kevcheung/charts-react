import React from "react";
import axios from "axios";
import { Chart } from "react-google-charts";
import "./index.css";

class App extends React.Component {
  state = {
    // name: '',
    // email: '',
    // dob: '',
    player_data: [],
  };

  // getData = this.getData.bind(this);

  setName = (name) => {
    this.setState({ name: name.target.value });
  };

  setEmail = (email) => {
    this.setState({ email: email.target.value });
  };

  setDob = (dob) => {
    this.setState({ dob: dob.target.value });
  };

  preventDefault = (e) => {
    e.preventDefault();
  };

  //TEST AXIOS REQUESTS FOR MONGODB
  // getInfo = (req) => {
  //   axios.get(`http://localhost:3001/testGet/${req}`).then((result) => {
  //     console.log('SUCCESS!!!!', result.data[0]);
  //   });
  //   // fetch("http://localhost:3001/testGet/Kevin").then((response) => {
  //   //   return response.json()
  //   // }).then(response => {
  //   //   console.log(response);
  //   // })
  // };

  // changeEmail = (name, email) => {
  //   axios.put(`http://localhost:3001/testPatch/${name}`, {email}).then(
  //     (result) => {
  //       console.log('SUCCESS!!!!', result.data[0])
  //     }
  //   )
  // }

  // addInfo = (name, email, DOB) => {
  //   axios.post(`http://localhost:3001/testPost`, {name, email, DOB}).then(
  //     (result) => {
  //       console.log('SUCCESS!!!!', result.data[0])
  //     }
  //   )
  // }

  // deleteInfo = (name) => {
  //   axios.delete(`http://localhost:3001/testDelete/${name}`).then(
  //     (result) => {
  //       console.log('DELETED!!!!', result.data)
  //     }
  //   )
  // }

  getData = () => {
    let arr = [];
    axios
      .get(
        "https://free-nba.p.rapidapi.com/stats?&seasons[]=2020&rapidapi-key=Tsi7MqmHldmshWfR6xz0wykg2mchp1y6gN7jsnqsZK6bSe3Szi"
      )
      .then((stat) => {
        // this.setState({
        //   player_data: stat.data.data
        // })
        // console.log(stat.data.data[0])
        // this.setState({
        //   player_data: 

        // })
        stat.data.data.map((id) => {
          // arr = [id.player.first_name + " " + id.player.last_name, id.pts, id.fg_pct]
          arr.push([id.player.first_name + " " + id.player.last_name, id.pts, id.fg_pct])
          console.table(arr)
        })
        this.setState({
          player_data: arr
        })
        // console.log(arr)
        // console.log(this.state.player_data[0])
        // console.log(stat.data.data[0].player.first_name, stat.data.data[0].player.last_name, stat.data.data[0].pts)
      });
  };

  // getPlayers = () => {
  //   axios
  //     .get(
  //       "https://free-nba.p.rapidapi.com/players?&rapidapi-key=Tsi7MqmHldmshWfR6xz0wykg2mchp1y6gN7jsnqsZK6bSe3Szi"
  //     )
  //     .then((players) => {
  //       console.log("PLAYERS!!!!", players.data.data);
  //     });
  // };

  componentDidMount(){
    this.getData()
  }

  render() {
    let data = [];
    // this.getData();
    // console.log('RENDERED!!!!', Object.prototype.toString.call(this.state.player_data[0]))
    console.table(this.state.player_data)
    // this.state.player_data.map((id) => {
    //   console.log(id)
    //   data.push([id.player.first_name + " " + id.player.last_name, id.pts, id.fg_pct])
    // });
    // console.log("DATA????", data)
    return (
      <div>
        {/* <form onSubmit={this.preventDefault}> //TEST FORM FOR MONGODB
          <input
            value={this.state.name}
            onChange={(e) => this.setName(e)}
            type='text'
            placeholder='NAME'
            />
          <input
            value={this.state.email}
            onChange={(e) => this.setEmail(e)}
            type='text'
            placeholder='EMAIL'
          />
          <input
            value={this.state.dob}
            onChange={(e) => this.setDob(e)}
            type='text'
            placeholder='DOB'
          />
          <button onClick={() => this.getInfo(this.state.name)}>Get</button>
          <button onClick={() => this.changeEmail(this.state.name, this.state.email)}>Patch</button>
          <button onClick={() => this.addInfo(this.state.name, this.state.email, this.state.dob)}>Post</button>
          <button onClick={() => this.deleteInfo(this.state.name)}>Delete</button>
        </form>
        <button onClick={() => this.getPlayers()}>Players</button> */}
        {/* <button onClick={() => this.getData()}>Data</button> */}
        <Chart
          width={"3000px"}
          height={"500px"}
          chartType="Bar"
          loader={<div>Gathering Data....</div>}
          data={[
            ["Players", "PTS", "FG%"],
          // this.state.player_data.map((name, pts, fg) => {
          //     [name, pts, fg]
          //   }),
            // data,
            ...this.state.player_data
          ]}
          options={{
            // Material design options
            chart: {
              title: "NBA Player Data"
            },
          }}
          // For tests
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    );
  }
}

export default App;
