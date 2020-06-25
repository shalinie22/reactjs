import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactlist: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4040/contacts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ contactlist: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
          <table style={{border:"1px solid black",borderCollapse:"collapse"}}>
              <tr style={{border:"1px solid black"}}>
                  <td style={{border:"1px solid black"}}>name</td>
                 
                  <td style={{border:"1px solid black"}}>Mobile no</td>
                  <td style={{border:"1px solid black"}}>Email</td>
                  
              </tr>
              
        
          {this.state.contactlist.map((contacts, index) => (
              
            <tr key={index}>
             <td style={{border:"1px solid black"}}> {contacts.name.first} {contacts.name.last}</td> <td style={{border:"1px solid black"}}>{contacts.mobile}</td> <td style={{border:"1px solid black"}}>{contacts.email}</td>
            </tr>
          ))}
         
    
        </table>
        
      </div>
    );
  }
}

export default Contact;