import React from 'react';

class Contact extends React.Component {
  render(){
    return (
      <div className="contact">
        <div className="container">
          <div className="data">
            <h2>Kontakt</h2>
            <div className="info">
              <div className="left">
                <img className="icon home" src="images/home.jpg"/>
                <img className="icon tel" src="images/tel.jpg"/>
                <img className="icon email" src="images/email.jpg"/>
              </div>
              <div className="right">
                <hr></hr>
                <div>Adres:</div>
                <p>UNCARIA ČR, s.r.o</p>
                <p>Smetanova 3</p>
                <p>466 01 JABLONEC n/NISOU</p>
                <p>ČESKA REPUBLIKA</p>
                <hr></hr>
                <div>Telefon:</div>
                <p>Uncaria ČR - 00 420 483 330 600</p>
                <p>PL - 783 777 080</p>
                <hr></hr>
                <div>E-mail:</div>
                <p>odnowa.jedzeniowa@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
