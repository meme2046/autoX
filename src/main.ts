import { showToast } from "autox-v7-api/toast";
import { ra } from "./mmo";

function say(a: string) {
	console.log(a);
	showToast(a);
}

say("hello world");

console.log(ra(2, 3)); // 5
