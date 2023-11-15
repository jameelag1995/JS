const obj = {
    name: "jameel",
    printname: function () {
        console.log(`my name is ${this.name}`);
    },
    printnamedlayed: function () {
        setTimeout(function(){
            obj.printname();
        }, 1000);
    },
};
obj.printname();
obj.printnamedlayed();
