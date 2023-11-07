import React from "react";
import PizzaItem from "./PizzaItem";
import pizzas from "../assets/pizzas.json";

function PizzasList() {

  return (
    <div className="content__items">
       {pizzas.map((pizza)=>{
        return <PizzaItem key={pizza.id} imageUrl={pizza.imageUrl} name={pizza.name} types={pizza.types} sizes={pizza.sizes} price={pizza.price}/>
       })}
    </div>
  );
}

export default PizzasList;
