import React from 'react';

class MainPage extends React.Component {
  render(){
    let app = document.getElementById('app');
    app.style.backgroundImage	=	"url(images/Fotolia_130262458_L.jpg)";
    return (
      <div className="mainPage">
        <div className="container">
          <section className="banner">
            <h1>Witaj na stronie poświęconej produktom  pochodzącym z czystej, dziewiczej, peruwiańskiej przyrody. </h1>
          </section>
          <section className="welcomeText">
            <div className="paragraphs">
              <p>Na stronie znajdziesz przydatne informacje, opisy i zastosowanie niektórych ziół i żywności – wszystko po to, by dać Ci możliwość poznania i przyjrzenia się nieocenionym darom natury i wykorzystania ich w żywieniu czy leczeniu. Po szersze informacje zapraszam Cię do zielnika.</p>
              <p>Po kliknięciu na ikonkę kup teraz zostaniesz przekierowany na stronę sklepu czeskiej firmy Uncaria CR, z którą współpracuję przy propagowaniu kultury i wytworów potomków Inków oraz ludów Amazonii. Kupując wpisz kod „medea” a dostaniesz rabat. W sklepie znajdziesz między innymi unikalne mączki z canihua, peruwiańskiego bobu czy kiwicha, najlepszej jakości olej sacha inchi, suszony sok z trzciny cukrowej oraz przepyszne algarrobo.</p>
              <p className="sign">Monika Ptak-Korbacz</p>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default MainPage;
