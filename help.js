const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    charge: function() {
        console.log(this.firstName + " " + this.lastName + " is a student in class " + this.class)
    }
};

student.charge();

// 3. 
const personObject = {
    firstName: "Anitta",
    lastName: "Marechado",
    age: 27,
    profession: "singer",
    city: "Rio de Janeiro",
    country: "Brazil",
    charge: function() {
        console.log(this.firstName + " " + this.lastName + " is a " + this.age + " year old " + this.profession + " from " + this.city + ", " + this.country)
    }
};

personObject.charge();