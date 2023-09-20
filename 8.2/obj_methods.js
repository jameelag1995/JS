const mycountry = {
  country: "Palestine",
  capital: "Jerusalem",
  language: "Arabic",
  population: "7 Million",
  neighbors: ["Egypt", "Lebanon", "Syria", "Jordan"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} people, their mother tongue is ${this.language} they have ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
    );
  },
  isIsland:function(){
    return this.neighbors.length == 0 ? true : false ;
  }
};
mycountry.describe()
console.log(mycountry.isIsland());
