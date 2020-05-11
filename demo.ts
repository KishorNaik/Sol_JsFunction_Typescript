
// Refer javascript function in typescript using declare keyword
declare function demo(firstName: string, lastName: string): string;

function demoCall(): void {

    var fullName = demo("Kishor", "Naik");
    console.log(fullName);

}