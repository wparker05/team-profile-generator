const Employee = require("../lib/Employee");


describe("Employee class", () => {
    describe("Initialization", () =>{
        it("should create an new instanace of the object", () => {
            const employee = new Employee("Martin", 1,"martin@gmail.com");
          
            expect(typeof employee).toBe('object');
        });
    })

    describe('getName', () => {
        it("should return name with getName() and be a string",() => { 
            const employee = new Employee("bob", 2, "bob@gmail.com");
            expect(employee.getName()).toEqual(expect.any(String))
            expect(employee.getName()).toEqual('bob');
        });
    })
    
    describe('getId', () => {
        it("should return object id and be a number",() => { 
           const employee = new Employee("santa", 2, "santa@gmail.com");
           expect(employee.getId()).toEqual(2)
           expect(employee.getId()).toEqual(expect.any(Number))
        });
    })

    describe('getEmail', () => {
        it("should return object email and be a",() => { 
           const employee = new Employee("rudolph",1,"rudolph@northpole.com");
           expect(employee.getEmail()).toEqual("rudolph@northpole.com");
           expect(employee.getEmail()).toEqual(expect.any(String));
        });
    })


    describe('getRole', () => {
        it("should return object role ",() => { 
            const employee = new Employee();
            const role = "Employee"
            expect(employee.getRole()).toEqual(role);
        });
    })


});
