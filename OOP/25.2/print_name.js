const obj = {
    name: "jameel",
    printname: function () {
        console.log(`my name is ${this.name}`);
    },
    printnamedelayed: function () {
        setTimeout(function(){
            this.printname();
        }.bind(this), 1000);
    },
};
obj.printname();
obj.printnamedelayed();
