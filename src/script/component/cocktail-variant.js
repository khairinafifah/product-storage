// const baseUrl = "www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";
class Variations extends HTMLElement {
   connectedCallback() {
      this.render();
   }

   // static cocktail = () => {
   //    fetch(`${baseUrl}`)
   //    .then(response => {
   //       return response.json();
   //    })
   // }

   // set drink(drink) {
   //    this._drink = drink;
   //    this.render();
   //  }

   // static getBook = () => {
   //    fetch(`${baseUrl}/list`)
   //     .then(response => {
   //       return response.json();
   //    })
   //    .then(responseJson => {
   //       if(responseJson.error) {
   //          showResponseMessage(responseJson.message);
   //       } else {
   //          renderAllBooks(responseJson.books);
   //       }
   //    })
   //     .catch(error => {
   //       showResponseMessage(error);
   //    })
   // };
 
   render() {
      // this.innerHTML = "";
      // drink.forEach(_drink => {
         
      this.innerHTML = `
      <div class="card-columns">
         <div class="card">
         <img class="card-img" src="https://www.thecocktaildb.com/images/media/drink/lnjoc81619696191.jpg" alt="Card image">
         </div>

         <div class="card">
         <div class="card-body">
            <h5 class="card-title">Latest Drinks</h5>
            <p class="card-text">Several latest drinks we got:</p>
            <ul>
               <li>
               Mountain Bramble,
               </li>
               <li>
               Pink Moon,
               </li>
               <li>
               The Galah,
               </li>
               <li>
               Winter Paloma,
               </li>
               <li>
               Snowday,
               </li>
               <li>
               etc.
               </li>
            </ul>
         </div>
         </div>

         <div class="card p-3">
         <blockquote class="blockquote mb-0 card-body">
            <p  style="font-family: 'Times New Roman', Times, serif; color: #FF4D00;">There cannot be good living where there is not good drinking.</p>
            <footer class="blockquote-footer">
               <small class="text-muted">
               Someone famous, <cite title="Source Title">Benjamin Franklin</cite>
               </small>
            </footer>
         </blockquote>
         </div>

         <div class="card">
         <div class="card-body">
            <h5 class="card-title">Alcoholic</h5>
            <p class="card-text">Some of alcholic cocktails:</p>
            <ul>
               <li>
               Barracuda,
               </li>
               <li>
               Bloody Mary,
               </li>
               <li>
               Dirty Martini,
               </li>
               <li>
               Blueberry Mojito,
               </li>
               <li>
               Gin Sour,
               </li>
               <li>
               etc.
               </li>
            </ul>
         </div>
         </div>

         <div class="card text-center p-3">
         <blockquote class="blockquote">
            <p style="font-weight: bold; color: #FF4D00;">YOU ARE THE <span style="font-family: 'Times New Roman', Times, serif; color: #443737;">GIN</span> TO MY <span style="font-family: 'Times New Roman', Times, serif; color: #443737;">TONIC</span></p>
            <footer class="blockquote-footer">
               <small class="text-muted">
               Do a search on search bar for <cite title="Source Title">Gin and Tonic</cite>
               </small>
            </footer>
            </blockquote>
         </div>

         <div class="card">
         <div class="card-body">
            <h5 class="card-title">Non Alcoholic</h5>
            <p class="card-text">Some of non alcholic cocktails:</p>
            <ul>
               <li>
               Lassi - Sweet,
               </li>
               <li>
               Lassi - A South Indian Drink,
               </li>
               <li>
               Castillian Hot Chocolate,
               </li>
               <li>
               Alice Cocktail,
               </li>
               <li>
               Cranberry Punch,
               </li>
               <li>
               etc.
               </li>
            </ul>
         </div>
         </div>

         <div class="card">
         <img class="card-img" src="https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg" alt="Card image">
         </div>

         <div class="card p-3 text-right">
         <blockquote class="blockquote mb-0">
            <p style="font-family: 'Times New Roman', Times, serif; font-weight: bold; color: #FF4D00;"><i>If life gives you limes, make margaritas.</i></p>
            <footer class="blockquote-footer">
               <small class="text-muted">
               a quote by <cite title="Source Title">Jimmy Buffett</cite>
               </small>
            </footer>
         </blockquote>
         </div>

         <div class="card">
         <img class="card-img" src="https://www.thecocktaildb.com/images/media/drink/iprva61606768774.jpg" alt="Card image">
         </div>

         <div class="card">
         <div class="card-body">
            <h5 class="card-title">Random Drinks</h5>
            <p class="card-text">Some of non alcholic cocktails:</p>
            <ul>
               <li>
               Strawberry Margarita,
               </li>
               <li>
               Tia-Maria,
               </li>
               <li>
               Pink Penocha,
               </li>
               <li>
               Whiskey Sour,
               </li>
               <li>
               Hot Chocolate to Die for,
               </li>
               <li>
               etc.
               </li>
            </ul>
         </div>
         </div>

         <div>
         <footer class="blockquote-footer" style="color: brown;">
            <h5>You can search one of those recipe using <cite><strong>Seacrh Bar</strong></cite> on Navigation Bar!</h5>
         </footer>
         </div>
      </div>`;
   // });
   }
}
 
customElements.define("cocktail-variant", Variations);