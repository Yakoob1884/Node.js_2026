// Hvis der er strict mode, så virker linje 3 ikke
// "use strict"; 

// Det virker, men giv den en variabel alligevel
// totalGlobalVariables = "Never EVER do this"; 

// public er reserveret i strict mode, og vil derfor give fejl
// const public = "This is a public variable";

// Block scope - svaret er 456 fordi var "bløder ind i hindanden"
{
    var someValue = 123;
    {
        var someValue = 456;
    }
    console.log(someValue);
}

// Block scope - fordi vi bruger let forbliver someOtherValue stadig true
{
    let someOtherValue = true;
    {
        let someOtherValue = false;
    }
    console.log(someOtherValue);
}

// Fordi man bruger var bliver i en global værdi, som somehow gør at den printer "6" 6 gange
// Brug let i stedet, for så holder man sig til scope
for (var i = 0; i <= 5; 1++) {
    setTimeout(() => {
        console.log(i);
    },1000);
}