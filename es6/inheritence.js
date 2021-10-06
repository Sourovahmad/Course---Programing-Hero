 class Upper {
     constructor(){
         this.fatherName = "my name is khan";
     }
 }

class student extends Upper{
    constructor(id, name) {
        super();
        this.name = name;
        this.id = id;
        this.message = "love you medam";
    }
}




console.log(new student(10, "sourov"));