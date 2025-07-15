//a function is a reusable block of code that performs specific tasks
//funcions can take inputs abd return outputs
//creating and declaring a function


function add(a,b){
    console.log("Adding two numbers:",a, b);
    
    return a + b; //this function takes paameters and return their sum
}

function sendEmail(recipient, content){
    console.log(`sending email to ${recipient} with content:${content}`);//puttin a variable inside a string using template litelars - the backticks and dolllar sign
    //string concatination is naother way to scombine strings and variables
    console.log("Email sent to"+recipient+"with content:"+content);
    return{status:"success",message:"Email sent succesfully"};
    
}
function calculateArea(length, width){
    return length*width ;
}

//a function without a return statemen automatically returns undefined a retun statement is used to specify the valiue that should be returned from the function when itb is called(the result of fuction execution )
//calling/invoking a function code in a function is not executed until the function is called

function alert(){
    console.log("This is an Alert message");
    
}
add(5,4);
add(12,40);
alert();


