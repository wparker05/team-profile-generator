class Manager extends Employee {
    constructor(name, id, email,phoneNumber){
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

   getRole() {
       return 'Manager';
   }
}