import Professional from "./Professional";

class Professor extends Professional {
    subject: string;
    year: string;
    room: string;

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
        role: string,
        shift: string,
        sector: string,
        weekHours: number,
        salary: number,
        hiringDate: string,
        status: number,
        subject: string,
        year: string,
        room: string
    ) {
        super (
            id,
            name,
            birthdate,
            cpf,
            gender,
            nationality,
            address,
            phoneNumber,
            degree,
            role,
            shift,
            sector,
            weekHours,
            salary,
            hiringDate,
            status
        );
        this.subject = subject;
        this.year = year;
        this.room = room;
    }
}

export default Professor;