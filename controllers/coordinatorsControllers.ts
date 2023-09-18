import { Response, Request, NextFunction } from "express";
import { createDbConnection } from "../db/dbConfig";
import { Database } from "sqlite3";
import logger from "../services/logger";
import Coordinator from "../models/Coordinator";

let db: Database = createDbConnection();

const coordinatorsRoot = (req: Request, res: Response) => {
    logger.info(req);
    res.send("Coordinators' Home Page");
}

const coordinatorsList = (req: Request, res: Response) => {
    
    let coordinatorsList: Coordinator[] = [];

    let sql = `SELECT * FROM coordinators`;

    db.all(sql, [], (error: Error, rows: Coordinator[]) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        rows.forEach((row: Coordinator) => { coordinatorsList.push(row) });
        logger.info(req);
        res.send(coordinatorsList);
    }
    );
}

const coordinatorsListByStatus = (req: Request, res: Response) => {
    
    let coordinatorsList: Coordinator[] = [];
    let status = req.query.status;

    let sql = `SELECT * FROM coordinators WHERE status="${status}"`;

    db.all(sql, [], (error: Error, rows: Coordinator[]) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row: Coordinator) => { coordinatorsList.push(row) });
            logger.info(req);
            res.send(coordinatorsList);
        } else {
            res.send("No results for this status");
        }
    })
}

const coordinatorsListByMainProject = (req: Request, res: Response) => {
    
    let coordinatorsList: Coordinator[] = [];
    let project = req.query.mainProject;

    let sql = `SELECT * FROM coordinators WHERE mainProject="${project}"`;

    db.all(sql, [], (error: Error, rows: Coordinator[]) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            rows.forEach((row: Coordinator) => { coordinatorsList.push(row) });
            logger.info(req);
            res.send(coordinatorsList);
        } else {
            res.send("No results found");
        }
    })
}

const coordinatorDetails = (req: Request, res: Response) => {
    
    let id = req.query.id;
    let sql = `SELECT * FROM coordinators WHERE id="${id}"`;

    db.all(sql, [], (error: Error, rows: Coordinator[]) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        if (rows.length > 0) {
            logger.info(req);
            res.send(rows[0]);
        } else {
            res.send("Coordinator not found");
        }
    }
    );
}

const addCoordinator = (req: Request, res: Response) => {

    let coordinator: Coordinator = req.body;
    
    let sql = `INSERT INTO coordinators(name,
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
                                        directs,
                                        projects,
                                        mainProject)
                                        VALUES ("${coordinator.name}",
                                        "${coordinator.birthdate}",
                                        "${coordinator.cpf}",
                                        "${coordinator.gender}",
                                        "${coordinator.nationality}",
                                        "${coordinator.address}",
                                        "${coordinator.phoneNumber}",
                                        "${coordinator.degree}",
                                        "${coordinator.role}",
                                        "${coordinator.shift}",
                                        "${coordinator.sector}",
                                        "${coordinator.weekHours}",
                                        "${coordinator.salary}",
                                        "${coordinator.hiringDate}",
                                        "${coordinator.status}",
                                        "${coordinator.directs}",
                                        "${coordinator.projects}",
                                        "${coordinator.mainProject}")`;

    db.run(sql, (error: Error) => {
        if (error) {
            logger.error(error.message);
            res.end(error.message);
        }
        logger.info(req);
        res.send(`Coordinator ${coordinator.name} Added`);
    })
}

const updateCoordinator = (req: Request, res: Response) => {
    
    let coordinator: Coordinator = req.body;
        
    let sql = `UPDATE coordinators SET name="${coordinator.name}",
                                   birthdate="${coordinator.birthdate}",
                                   cpf="${coordinator.cpf}",
                                   gender="${coordinator.gender}",
                                   nationality="${coordinator.nationality}",
                                   address="${coordinator.address}",
                                   phoneNumber="${coordinator.phoneNumber}",
                                   degree="${coordinator.degree}",
                                   role="${coordinator.role}",
                                   shift="${coordinator.shift}",
                                   sector="${coordinator.sector}",
                                   weekHours="${coordinator.weekHours}",
                                   salary="${coordinator.salary}",
                                   hiringDate="${coordinator.hiringDate}",
                                   status="${coordinator.status}",
                                   directs="${coordinator.directs}", 
                                   projects="${coordinator.projects}",
                                   mainProject="${coordinator.mainProject}"
                                   WHERE id="${coordinator.id}" `;

    db.all(sql, [], (error: Error) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        logger.info(req);
        res.send(`Coordinator ${coordinator.id} Updated`);
    });
}

const updateCoordinatorsPayroll = (req: Request, res: Response) => {
    
    let coordinator: Coordinator = req.body;
        
    let sql = `UPDATE coordinators SET weekHours="${coordinator.weekHours}",
                                   salary="${coordinator.salary}"
                                   WHERE id="${coordinator.id}" `;

    db.all(sql, [], (error: Error) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        logger.info(req);
        res.send(`Payroll of Coordinator ${coordinator.id} Updated`);
    });
}

const updateCoordinatorsStatus = (req: Request, res: Response) => {

    let coordinator: Coordinator = req.body;
    let sql = `UPDATE coordinators SET status="${coordinator.status}" WHERE id="${coordinator.id}" `;

    db.all(sql, [], (error: Error) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        logger.info(req);
        res.send(`Status of Coordinator ${coordinator.id} Updated`);
    });
}

const deleteCoordinator = (req: Request, res: Response) => {
    
    let id = req.query.id;
    let sql = `DELETE from coordinators WHERE id="${id}"`;

    db.all(sql, [], (error: Error) => {
        if (error) {
            logger.error(error.message);
            res.send(error.message);
        }
        logger.info(req)
        res.send(`Coordinator ${id} Deleted`);
    })
}

export {
    coordinatorsRoot,
    coordinatorsList,
    coordinatorsListByStatus,
    coordinatorsListByMainProject,
    coordinatorDetails,
    addCoordinator,
    updateCoordinator,
    updateCoordinatorsPayroll,
    updateCoordinatorsStatus,
    deleteCoordinator
}