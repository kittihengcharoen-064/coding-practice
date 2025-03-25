import { p } from "./utils.js";

let greetingMessage = "Hi";
greetingMessage.toUpperCase();

p("greetingMessage: ", greetingMessage);

let orders = [...[123, 456, 789], 567, 1234, [234, 15, [67]]];
const newOrder = [789, ...orders];
const orderCombination = orders + newOrder

p("is order combination an array", orderCombination instanceof Array)
p("order combination: ", orderCombination)
p("newOrder: ", newOrder)
