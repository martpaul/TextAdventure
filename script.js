 var script = {};
 var choices = {};

 script.start = {
 	prompt: 'You walking down the street. You see a cabin. What do you do? \n\n 1) Go inside\n 2) Knock\n\n',
 	result: choice => {
 		choices.wentInside = (choice !== '2');
 		if (choices.wentInside) {
 			return 'inside';
 		} else {
 			return 'knock';
 		}
 	}
 } ;

 script.knock = 
 	prompt: "You knock at the door.",
 	result: () => {
 		return 'inside';
 	}
 };

 script.inside = {
 	prompt: "You walk inside and you die"
 };

 module.exports = script;