const Employee = require("../lib/Employee");


describe("Employee class", () => {
    describe("Initialization", () =>{
        it("should create an new instanace of the object", () => {
            const employee = new Employee("Martin", 1,"martin@gmail.com");
          
            expect(typeof employee).toBe('object');
        });
    })

    // describe('getName', () => {
    //     it("should return object name ",() => { 
    //       
    //        
    //     });
    // })
    
    // describe('getId', () => {
    //     it("should return object id ",() => { 
           
    //     });
    // })

    // describe('getEmail', () => {
    //     it("should return object email ",() => { 
           
    //     });
    // })


    // describe('getRole', () => {
    //     it("should return object role ",() => { 
           
    //     });
    // })



})