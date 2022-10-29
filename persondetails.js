class persondetails{
    constructor(name,age,city,schoolname,schoolpercent,clgname,cgpa,hobby,skills){
    this.name=name;
    this.age=age;
    this.city=city;
    this.schoolname=schoolname;
    this.schoolpercent=schoolpercent;
    this.clgname=clgname;
    this.cgpa=cgpa;
    this.hobby=hobby;
    this.skills=skills;
    }
    getdetails(){
        console.log(`Hi! I'am ${this.name} and I'm ${this.age}.I live in ${this.city}.
                     I have completed my schooling in ${this.schoolname} with ${this.schoolpercent} percentage.I'am  graduated from ${this.clgname}
                     with the ${this.cgpa} cgpa. My hobbies are ${this.hobby}.I have also learnt ${this.skills}.`)
    }
}
var detail = new persondetails("G.Deepa vishali","20","Madurai","GOODSHEPHERD SCHOOL","70","LADY DOAK COLLEGE","7","Cooking and Sketching","Basics of Java language")
 detail.getdetails()


