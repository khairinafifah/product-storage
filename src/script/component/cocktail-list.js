import './cocktail-item.js';
 
class CocktailList extends HTMLElement {
   constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: "open"});
  }

   set drinks(drinks) {
      this._drinks = drinks;
      this.render();
   }

   render() {
      this.shadowDOM.innerHTML = "";
      this._drinks.forEach(drink => {
        const cocktailItemElement = document.createElement("cocktail-item");
        cocktailItemElement.drink = drink
        this.shadowDOM.appendChild(cocktailItemElement);
      })
   }
 
   renderError(message) {
      this.shadowDOM.innerHTML = "";
      this.shadowDOM.innerHTML += `
      <style>
      .placeholder {
         font-weight: bold;
         text-align: center;
         padding: 20px;
         position: absolute;
         width: 50%;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         color: #EEEEEE;
         background-color: #272121;
         opacity: 0.8;
         border-radius: 10px;
       }
      </style>
      <h2 class="placeholder"> ${message} </h2>`;
   }
}
 
customElements.define("cocktail-list", CocktailList);