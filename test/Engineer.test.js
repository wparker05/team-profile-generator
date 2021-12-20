const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    describe("Inititalization", () => {
        it("should create an new instance of the object", () => {
            const engineer  = new Engineer("Matt", 1, "matt@gmail.com", "matt20");

            expect(typeof engineer).toBe('object');
        })
    })

    describe('getRole', () => {
        it("should return object role ",() => { 
            const engineer = new Engineer();
            const role = "Engineer"
            expect(engineer.getRole()).toEqual(role);
           
        });
    })

    // describe('getGihub', () => {
    //     it("should return object github name ",() => { 
    //       
    //        
    //     });
    // })

})