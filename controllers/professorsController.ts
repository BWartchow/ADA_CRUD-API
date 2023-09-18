import { Response, Request, NextFunction } from "express";
import { createDbConnection } from "../db/dbConfig";
import { Database } from "sqlite3";
import logger from "../services/logger";
import Professor from "../models/Professor";

let db: Database = createDbConnection();

const professorsRoot = (req: Request, res: Response) => {
    logger.info(req);
    res.send("Professors' Home Page");
}

const professorsList = (req: Request, res: Response) => {

    let professorsList: Professor[] = [];

    let sql = `SELECT * FROM professors`;

    db.all(sql, [], (error: Error, rows: Professor[]) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        rows.forEach((row: Professor) => { professorsList.push(row) });
        logger.info(req);
        res.send(professorsList);
    }
    );
}

const professorsListByStatus = (req: Request, res: Response) => {
    
    let professorsList: Professor[] = [];
    let status = req.query.status;

    let sql = `SELECT * FROM professors WHERE status="${status}"`;

    db.all(sql, [], (error: Error, rows: Professor[]) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row: Professor) => { professorsList.push(row) });
            logger.info(req);
            res.send(professorsList);
        } else {
            res.send("No results for this status");
        }
    })
}

const professorsListByYearAndRoom = (req: Request, res: Response) => {
    
    let professorsList: Professor[] = [];
    let year = req.query.year;
    let room = req.query.room?.toString().toUpperCase();

    let sql = `SELECT * FROM professors WHERE year="${year}" AND room="${room}"`;

    db.all(sql, [], (error: Error, rows: Professor[]) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row: Professor) => { professorsList.push(row) });
            logger.info(req);
            res.send(professorsList);
        } else {
            res.send("No results found");
        }
    })
}

const professorsListBySubject = (req: Request, res: Response) => {
    
    let professorsList: Professor[] = [];
    let subject = req.query.subject;

    let sql = `SELECT * FROM professors WHERE subject="${subject}"`;

    db.all(sql, [], (error: Error, rows: Professor[]) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row: Professor) => { professorsList.push(row) });
            logger.info(req);
            res.send(professorsList);
        } else {
            res.send("No results found");
        }
    })
}

const professorDetails = (req: Request, res: Response) => {
    
    let id = req.query.id;
    let sql = `SELECT * FROM professors WHERE id="${id}"`;

    db.all(sql, [], (error: Error, rows: Professor[]) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            logger.info(req);
            res.send(rows[0]);
        } else {
            res.send("Professor not found");
        }
    }
    );
}

const addProfessor = (req: Request, res: Response) => {
    
    let professor: Professor = req.body;
    let roomToUppercase: string = professor.room.toUpperCase();

    let sql = `INSERT INTO professors(name,
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
                                      status,
                                      subject,
                                      year,
                                      room)
                                      VALUES ("${professor.name}",
                                      "${professor.birthdate}",
                                      "${professor.cpf}",
                                      "${professor.gender}",
                                      "${professor.nationality}",
                                      "${professor.address}",
                                      "${professor.phoneNumber}",
                                      "${professor.degree}",
                                      "${professor.role}",
                                      "${professor.shift}",
                                      "${professor.sector}",
                                      "${professor.weekHours}",
                                      "${professor.salary}",
                                      "${professor.hiringDate}",
                                      "${professor.status}",
                                      "${professor.subject}",
                                      "${professor.year}",
                                      "${roomToUppercase}")`;

    db.run(sql, (error: Error) => {
        if (error) {
            logger.error(error.message);
            res.end(error.message);
        }
        logger.info(req);
        res.send(`Professor ${professor.name} Added`);
    })
}

const updateProfessor = (req: Request, res: Response) => {
    
    let professor: Professor = req.body;
    let roomToUppercase: string = professor.room.toUpperCase();
    
    let sql = `UPDATE professors SET name="${professor.name}",
                                   birthdate="${professor.birthdate}",
                                   cpf="${professor.cpf}",
                                   gender="${professor.gender}",
                                   nationality="${professor.nationality}",
                                   address="${professor.address}",
                                   phoneNumber="${professor.phoneNumber}",
                                   degree="${professor.degree}",
                                   role="${professor.role}",
                                   shift="${professor.shift}",
                                   sector="${professor.sector}",
                                   weekHours="${professor.weekHours}",
                                   salary="${professor.salary}",
                                   hiringDate="${professor.hiringDate}",
                                   status="${professor.status}",
                                   subject="${professor.subject}", 
                                   year="${professor.year}",
                                   room="${roomToUppercase}"
                                   WHERE id="${professor.id}" `;

    db.all(sql, [], (error: Error) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        logger.info(req);
        res.send(`Professor ${professor.id} Updated`);
    });
}

const updateProfessorsPayroll = (req: Request, res: Response) => {
    
    let professor: Professor = req.body;
        
    let sql = `UPDATE professors SET weekHours="${professor.weekHours}",
                                   salary="${professor.salary}"
                                   WHERE id="${professor.id}" `;

    db.all(sql, [], (error: Error) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        logger.info(req);
        res.send(`Payroll of Professor ${professor.id} Updated`);
    });
}

const updateProfessorsStatus = (req: Request, res: Response) => {

    let professor: Professor = req.body;
    let sql = `UPDATE professors SET status="${professor.status}" WHERE id="${professor.id}" `;

    db.all(sql, [], (error: Error) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        logger.info(req);
        res.send(`Status of Professor ${professor.id} Updated`);
    });
}

const deleteProfessor = (req: Request, res: Response) => {
    
    let id = req.query.id;
    let sql = `DELETE from professors WHERE id="${id}"`;

    db.all(sql, [], (error: Error) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        logger.info(req)
        res.send(`Professor ${id} Deleted`);
    })
}

export {
    professorsRoot,
    professorsList,
    professorsListByStatus,
    professorsListByYearAndRoom,
    professorsListBySubject,
    professorDetails,
    addProfessor,
    updateProfessor,
    updateProfessorsPayroll,
    updateProfessorsStatus,
    deleteProfessor
}