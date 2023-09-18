import Professional from "./Professional";

class Coordinator extends Professional {
    directs: number;
    projects: number;
    mainProject: string;

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
        directs: number,
        projects: number,
        mainProject: string
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
        this.directs = directs;
        this.projects = projects;
        this.mainProject = mainProject;
    }
}

export default Coordinator;