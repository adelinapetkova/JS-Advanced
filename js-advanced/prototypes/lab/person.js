function createPerson(firstName, lastName) {
    const result = {
        firstName,
        lastName
    }

    Object.defineProperty(result, 'fullName', {
        get() {
            return this.firstName + ' ' + this.lastName;
        },
        set(value){
            this.firstName=value.split(' ')[0];
            this.lastName=value.split(' ')[1];
        }
    })

    return result;
}

let person=createPerson('Peter', 'Ivanov');
console.log(person.fullName)
person.fullName='New Name';
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName)