import Person from "./Person";

class Professional extends Person {
    degree: string;
    role: string;
    shift: string;
    sector: string;
    weekHours: number;
    salary: number;
    hiringDate: string;
    status: number; // 0 = false; 1 = true;

    constructor (
        id: number,
        name: string,
        birthdate: string,
        cpf: string,
        gender: string,
        nationality: string,
        address: string,
        phoneNumber: string,
        degree: string,
        shift: string,
        role: string,
        sector: string,
        weekHours: number,
        salary: number,
        hiringDate: string,
        status: number
    ) {
        super (id, name, birthdate, cpf, gender, nationality, address, phoneNumber);
        this.degree = degree;
        this.role = role;
        this.shift = shift;
        this.sector = sector;
        this.weekHours = weekHours;
        this.salary = salary;
        this.hiringDate = hiringDate;
        this.status = status;
    }
}

export default Professional;