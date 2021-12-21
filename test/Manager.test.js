const Manager = require("../lib/Manager");

describe("Manager class", () => {
    describe("Inititalization", () => {
        it("should create an new instance of the object", () => {
            const manager = new Manager("Matt", 1, "matt@gmail.com", 555-555-5555);

            expect(typeof manager).toBe('object');
        })
    })

    describe('getRole', () => {
        it("should return object role",() => { 
          const manager = new Manager();
          const role = "Manager"
          expect(manager.getRole()).toEqual(role);
           
        });
    })

    describe('getOfficeNumber', () => {
        it("should return object office number ",() => { 
          const manager = new Manager("santa", 1, "santa@northpole.com", "555-555-5555");
          expect(manager.getOfficeNumber()).toEqual('555-555-5555');
          expect(manager.getOfficeNumber()).toEqual(expect.any(String));
           
        });
    })

})