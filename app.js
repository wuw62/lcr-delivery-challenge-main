import { cardData } from "./cardData.js"

const gstPercentage = 0.13;
const cost = document.getElementById("total-cost");
const miles = document.getElementById("total-miles");
const gst = document.getElementById("GST-HST");

const retrieveData = (index) => {
    cost.innerHTML = cardData[index].cost * (1 + gstPercentage);
    miles.innerHTML = cardData[index].amount;
    gst.innerHTML = cardData[index].cost * gstPercentage;
}

const b1Amount = document.getElementById("b1_amount");
const b2Amount = document.getElementById("b2_amount");
const b3Amount = document.getElementById("b3_amount");

const b1Cost = document.getElementById("b1_cost");
const b2Cost = document.getElementById("b2_cost");
const b3Cost = document.getElementById("b3_cost");

b1Amount.innerHTML = "Buy " + cardData[0].amount + "Milies";
b2Amount.innerHTML = "Buy " + cardData[1].amount + "Milies";
b3Amount.innerHTML = "Buy " + cardData[2].amount + "Milies";

b1Cost.innerHTML = "$" + cardData[0].cost;
b2Cost.innerHTML = "$" + cardData[1].cost;
b3Cost.innerHTML = "$" + cardData[2].cost;

const b1 = document.getElementById("b1");
b1.addEventListener("click", () => retrieveData(0));

const b2 = document.getElementById("b2");
b2.addEventListener("click", () => retrieveData(1));

const b3 = document.getElementById("b3");
b3.addEventListener("click", () =>retrieveData(2));

