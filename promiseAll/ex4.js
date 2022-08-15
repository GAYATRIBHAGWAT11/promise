console.log('im learning class/inheritance/polymorphism');

class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name=givenName;
        this.experience=givenExperience;
        this.division=givenDivision;
    }

    slogan(){
        return `i'm ${this.name} and this is the best company`
    }
    joiningYear(){
        return 2022-this.experience;
    }
    static add(a,b){
        return a+b;
    }
}

class programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,language,github){
        super(givenName,givenExperience,givenDivision);
    this.language=language;
    this.github=github;

    }
    favoriteLanguage(){
        if(this.language=='python'){
            return 'python'
        }else{
            return 'javascript'
        }
    }
    static multiply(a,b){
        return a*b;
    }
}

let gayatri=new Employee('gayatri',30,'A');
console.log(gayatri);
console.log(Employee.add(34,5));


xyz=new programmer('xyz',3,'lays','ruby','xyz420')
console.log(xyz)
console.log(xyz.favoriteLanguage());
console.log(programmer.multiply(3,2));