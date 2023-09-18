import Person from "./Person";

class Student extends Person {
    shift: string;
    year: string;
    room: string;
    gradePoint1: number;
    gradePoint2: number;
    gradePoint3: number;
    gradePointAverage: number;
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
        shift: string,
        year: string,
        room: string,
        gp1: number,
        gp2: number,
        gp3: number,
        status: number
    ) {
        super (id, name, birthdate, cpf, gender, nationality, address, phoneNumber);
        this.shift = shift;
        this.year = year;
        this.room = room;
        this.gradePoint1 = gp1;
        this.gradePoint2 = gp2;
        this.gradePoint3 = gp3;
        this.gradePointAverage = (this.gradePoint1 + this.gradePoint2 + this.gradePoint3)/3;
        this.status = status;
    }
}

export default Student;