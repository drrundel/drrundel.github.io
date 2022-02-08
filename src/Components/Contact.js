import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var skillmessage = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="contact">
      <div className="row contact">
<div className="three columns header-col">
   <h1><span></span></h1>
</div>
<div className="nine columns main-col">
<h2><span>Contact</span></h2>
</div>
{/* <p>{message}</p>
   <p className="name">{name}</p>
   <p className="up">{state}</p>
   <p className="up">{email}</p>
   <p className="up">{phone}</p>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} target="_blank" className="button"><i className="fa fa-folder-open"></i>Open Resume</a>
                  </p>
               </div>
            </div>*/}
</div> 
<div className="row">
<div className="three columns header-col">
   
</div>
         <div className="nine columns main-col">
            <div className="row">
               <div className="columns contact-details">
               <p>{message}</p>
               <p>
                     <a href={resumeDownload} target="_blank" className="button download"><i className="fa fa-folder-open"></i>Open Resume</a>
                  </p>
   <p className="name">{name}</p>
   <p className="up">{state}</p>
   <p className="up">{email}</p>
   <p className="up">{phone}</p>

   </div>
               <div className="four columns download">
                  
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default Contact;
