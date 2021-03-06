const Intern = require("../lib/Intern");

describe("Intern class", () => {
    describe("Inititalization", () => {
        it("should create an new instance of the object", () => {
            const intern = new Intern("Tom", 1, "tom@gmail.com", "UNCC");

            expect(typeof intern).toBe('object');
        })
    })

    describe('getRole', () => {
        it("should return object role ",() => { 
            const intern = new Intern();
            const role = "Intern"
            expect(intern.getRole()).toEqual(role);
           
        });
    })

    describe('getSchool', () => {
        it("should return object school name and be a string ",() => { 
          const intern = new Intern('Wes', 1, 'wes@gmail.com', "UNCC");
          expect(intern.getSchool()).toEqual('UNCC');
          expect(intern.getSchool()).toEqual(expect.any(String));
           
        });
    })

})