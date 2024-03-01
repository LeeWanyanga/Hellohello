/**Loops
 * Loop statements in JS are programming constructs that allow you to execute a block of code repeatedly.
 * They are essential for automating repetitive tasks, iterating over arrays or objects, and processimg data.
 * JS provides several types of loop statements:
 * 
 * 1 ~ for loop: This is used when you know the number of iterations beforehand.
 *     It constits of three parts: Initializaiton, condition and iteration expression.
 * 
 *          for (initialization; condition; iteration (i++) ) {
 *                 //code block to be executed
 *              } 
 * 
 * 2 ~ while loop: This executes a block of code as long as a specified condition evaluates to true.
 * 
 *              Syntax
 * 
 *          while (condition) {
 *                  //code block to be executed
 *                  (console .log(x) )
 *                   i++;
 *                  }
 * 
 * 3 ~ do-while loop: similar to the while loop, but it executes the code block at least once before checking the condition
 * 
 *              Syntax
 * 
 *              do {
 *              //code block to be executed
 *              (console .log(x) )
 *              i++;
 *              } while (condition);
 */




for(let i = 0; i<10; i++){
    alert(i);
}

let num=0;
while(num<5){
    alert(num);
    i++;
}


let x=0;
do {
    alert(x);
    x++;

} while (x<20);
