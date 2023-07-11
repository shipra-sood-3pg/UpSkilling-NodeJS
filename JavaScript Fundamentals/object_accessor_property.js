function User(name, surname, birthday) {
			//these are data property in the object
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;

    // These are the accessor properties in the object
    Object.defineProperty(this, "age", {
        get() {
                let todayYear = new Date().getFullYear();
                return todayYear - this.birthday.getFullYear();
        }
    });
    Object.defineProperty(this, 'fullname', {
        get() {
            return `${this.name} ${this.surname}`;
        },
        
        set(value) {
            [this.name, this.surname] = value.split(" ");
        }
    });
}
let user1 = new User("Shinav", "Shah", new Date(2018, 5, 10));
console.log(`User1 Details: \n\t Name: ${user1.name} \n\t Surname: ${user1.surname} \n\t FullName: ${user1.fullname} \n\t Age: ${user1.age} \n\t Birthday: ${user1.birthday}`);
console.log(`\n`);
let user2 = new User()
user2.birthday = new Date(2012, 12, 01);
user2.fullname = "Kshitij Shah";
console.log(`User2 Details: \n\t Name: ${user2.name} \n\t Surname: ${user2.surname} \n\t FullName: ${user2.fullname} \n\t Age: ${user2.age} \n\t Birthday: ${user2.birthday}`);