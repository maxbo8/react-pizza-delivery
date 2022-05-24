import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import './scss/app.scss';

function App() {
  return (
      <div className="wrapper">
          <Header />
          <div className="content">
              <div className="container">
                  <div className="content__top">
                      <Categories />
                      <Sort />
                  </div>
                  <h2 className="content__title">Все пиццы</h2>
                  <div className="content__items">
                      <PizzaBlock title="Мексиканская" price={500}/>
                      <PizzaBlock title="Американо" price={400}/>
                      <PizzaBlock title="4 сыра" price={350}/>
                      <PizzaBlock title="Гавайи" price={380}/>
                      <PizzaBlock title="Форева" price={600}/>
                      <PizzaBlock title="Вудсток" price={390}/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
