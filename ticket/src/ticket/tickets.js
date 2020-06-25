import React from "react";

class tickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketslist: [],
      agentlist: [],
      contactlist:[]
    };
  }
  componentDidMount() {
    fetch("http://localhost:4040/tickets")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ ticketslist: data });
        return fetch("http://localhost:4040/agents");
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ agentlist: data });
        return fetch("http://localhost:4040/contacts");
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ contactlist: data });
      })
      .catch((err) => {
      });
  }
 
  agentname = (agentid) => {
    const name = this.state.agentlist.reduce((acc, value) => {
      if (value.id === agentid) return value.name.first + " " + value.name.last;
      else return acc;
    }, " ");
    return name;
  };

  contactno= (agentid) => {
    const no = this.state.contactlist.reduce((acc, value) => {
      if (value.id === agentid) return value.mobile;
      else return acc;
    }, " ");
    return no;
  };

  render() {
    return (
      <div>
         <table style={{border:"1px solid black",borderCollapse:"collapse"}}>
              <tr style={{border:"1px solid black"}}>
                  
                  <td style={{border:"1px solid black"}}>Subject</td>
                  <td style={{border:"1px solid black"}}>Description</td>

                  <td style={{border:"1px solid black"}}>contact no</td>
                  <td style={{border:"1px solid black"}}>agent name</td>
                  
              </tr>
          {this.state.ticketslist.map((value, index) => (
              
             <tr key={index}>
             <td style={{border:"1px solid black"}}> {value.subject}</td> 
          <td style={{border:"1px solid black"}}>{value.description}</td>
             <td style={{border:"1px solid black"}}>{this.contactno(value.contactId)}</td> 
             <td style={{border:"1px solid black"}}>{this.agentname(value.agentId)}</td> 
            </tr>
          ))}
        </table>
  
      </div>
    );
  }
}

export default tickets;