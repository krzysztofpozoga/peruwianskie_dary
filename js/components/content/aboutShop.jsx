import React from 'react';

class AboutShop extends React.Component {
  render(){
    let app = document.getElementById('app');
    if (window.innerWidth >= 768) {
      app.style.backgroundImage	=	"url(images/Fotolia_130262458_L.jpg)";
    }  
    return (
        <div className="aboutShop">
          <div className="container">
            <h2>O SKLEPIE</h2>
            <p>Właścicielem sklepu jest czeska firma Uncaria ČR ( rok założenia 2001) zajmująca się  już od 14 lat sprowadzaniem naturalnych  skarbów przyrody -  zioł prosto z andyjskiej i amazońskiej  naturalnej apteki, darów peruwiańskich ogrodów, superfoods, Bio Organic i Wild.</p>
            <p>Sklep jest skonstruowany w języku polskim  jako odpowiedź na liczne Państwa prośby o jego założenie kierowane pod czeskim adresem. </p>
            <p>Magazyn wspomnianych wspaniałości znajduje się w Czechach, czyli mimo że sklep internetowy  znajduje się na polskich stronach to zakup jest de facto dokonywany w Czechach, skąd po złożeniu zamówienia i wybraniu sposobu zapłaty paczka zostanie bezwłocznie wysłana.</p>
            <p>Chcąc ograniczyć w jak największym stopniu koszty ponoszone przez Państwo:</p>
            <ul>
              <li>założyliśmy nasze konto w polskim Banku ING (oszczędzając wysokich kosztów przelewu do czeskiego banku)</li>
              <li>wysyłkę za pośrednictwem kuriera  PPL / DHL ( w Polsce DHL)</li>
            </ul>
            <p>Paczka  z Czech powinna dotrzeć do Państwa najdalej do 5 dni. O nadaniu paczki zostaniecie Państwo powiadomieni e -mailem.</p>
            <ul>
              <li>Koszty wysyłki pokrywa Zamawiający.</li>
              <li>Koszt ten wynosi 27,00 PLN </li>
              <li>Przy zamówieniu na ponad 250,00  PLN - koszt wysyłki pokrywa  firma Uncaria ČR.</li>
              <li>Podane wyżej koszty dotyczą tylko wysyłki na teren Polski.</li>
              <li>W przypadku wysyłki do innego kraju prosimy o kontakt w celu ustalenia kosztów.</li>
            </ul>
            <p>SERDECZNIE ZAPRASZAMY NA WYGODNE ZAKUPY W POLSKICH CENACH Z WYSYŁKĄ Z CZESKIEJ REPUBLIKI.</p>
            <p>Cieszymy się, że możemy być bliżej Was!</p>
          </div>
        </div>
    )
  }
}

export default AboutShop;
