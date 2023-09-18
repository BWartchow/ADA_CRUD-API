class Person {
    id: number;
    name: string;
    birthdate: string;
    cpf: string;
    gender: string;
    nationality: string;
    address: string;
    phoneNumber: string;

    constructor (
        id: number,
        name: string,
        birthdate: string,
        cpf: string,
        gender: string,
        nationality: string,
        address: string,
        phoneNumber: string
    ) {
        this.id = id;
        this.name = name;
        this.birthdate = birthdate;
        this.cpf = cpf;
        this.gender = gender;
        this.nationality = nationality;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
}

export default Person;