class CocktailItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }

  set drink(drink) {
    this._drink = drink;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    :host {
      position: absolute;
      margin-top: 10px;
      width: 70%;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #272121;
      color: #EEEEEE;
      opacity: 0.9;
      border-radius: 10px;
      overflow: hidden;
    }

    .cocktail-img {
      width: 100%;
      object-fit: cover;
      max-width: 350px;
      align-items: center;
      justify-content: center;
      float: left;
      padding: 10px;
    }

    .cocktail-info > h2 {
      font-family: cursive;
      font-weight: bold;
      margin-bottom: 0px;
    }

    .cocktail-info > p {
      padding-right: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10; /* number of lines to show */
    }

    .li {
      padding-bottom: 5px;
    }
    </style>
    <img class="cocktail-img" src=" ${this._drink.strDrinkThumb} " alt="Image">
    <div class="cocktail-info">
      <h2> ${this._drink.strDrink} </h2>
      <small><i> - ${this._drink.strCategory} - </i></small>
      <p> ${this._drink.strInstructions} </p>
    </div>
      
    <div class="row" style="display: flex; justify-content: space-around;">
      <div class="col-4">
      <p><b>Ingredients:</b></p>
      <li>
        ${this._drink.strIngredient1}
      </li>
      <li>
        ${this._drink.strIngredient2}
      </li>
      <li>
        ${this._drink.strIngredient3}
      </li>
      <li>
        ${this._drink.strIngredient4}
      </li>
      <li>
        ${this._drink.strIngredient5}
      </li>
      </div>
      <div class="col-4">
      <p><b>Measure:</b></p>
      <li>
        ${this._drink.strMeasure1}
      </li>
      <li>
        ${this._drink.strMeasure2}
      </li>
      <li>
        ${this._drink.strMeasure3}
      </li>
      <li>
        ${this._drink.strMeasure4}
      </li>
      <li>
        ${this._drink.strMeasure5}
      </li>
      </div>
      <div class="col-4">
      <p><b>Category:</b></p>
      <p> ${this._drink.strAlcoholic} </p>
      <p><b>Serve in:</b></p>
      <p> ${this._drink.strGlass} </p>
      </div>
    </div>
    `;
  }
}

customElements.define("cocktail-item", CocktailItem);