const obj = {
    name: "jameel",
    printName: function () {
        console.log(`my name is ${this.name}`);
    },
    printNameDelayed: function () {
        setTimeout(function(){
            this.printName();
        }.bind(this), 1000);
    },
};
obj.printName();
obj.printNameDelayed();
