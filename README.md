# Projeto API CRUD

### Objetivo:
Criar uma API de um projeto do tipo CRUD em NodeJS com classes, rotas, crontrollers e middlewares.

### Tecnologias utilizadas:
* Express;
* Sqlite3;
* Middleware Pino;

### Requisitos para rodar o projeto:
Ter o NodeJS instalado em seu computador.  

Execute "npm install" no seu terminal.  

Utilize as extensões do VS Code Sqlite Viewer (para visualização do banco de dados) e Thunder Client (para realização das requisições HTTP).  

### Exemplos de uso:
#### CREATE

* Adicionar um estudante:
Método: Post  

Path: "/students/addStudent"  

Utilize o body da requisição para passar os dados do estudante:  

        {
            "name": "Leonardo",
            "birthdate": "1999-03-18",
            "cpf": "666000111-79",
            "gender": "male",
            "nationality": "brazilian",
            "address": "Av SAP 188",
            "phoneNumber": "999999999",
            "shift": "afternoon",
            "year": "6",
            "room": "a",
            "gradePoint1": 8,
            "gradePoint2":  8,
            "gradePoint3": 8.5,
            "status": 1
        }

* Adicionar um professor:
Método: Post  

Path: "/professors/addProfessor"  

Utilize o body da requisição para passar os dados do professor:  

        {
            "name": "Francisco",
            "birthdate": "1970-08-24",
            "cpf": "888999240-79",
            "gender": "male",
            "nationality": "brazilian",
            "address": "Av SAP 188",
            "phoneNumber": "999999999",
            "degree": "master",
            "role": "professor",
            "shift": "afternoon",
            "sector": "education",
            "weekHours": 20,
            "salary": 3000,
            "hiringDate": "2019-07-15",
            "status": 1,
            "subject": "mathematics",
            "year": "6",
            "room": "a"
        }  

* Adicionar um coordenador:
Método: Post  

Path: "/coordinators/addCoordinator"  

Utilize o body da requisição para passar os dados do coordenador:  

        {
            "name": "Denise",
            "birthdate": "1968-04-18",
            "cpf": "333999240-79",
            "gender": "female",
            "nationality": "brazilian",
            "address": "Av SAP 188",
            "phoneNumber": "999999999",
            "degree": "doctoral",
            "role": "coordinator",
            "shift": "full-time",
            "sector": "education",
            "weekHours": 40,
            "salary": 6000,
            "hiringDate": "2015-03-10",
            "status": 1,
            "directs": 10,
            "projects": 3,
            "mainProject": "Diversity and Inclusion"
        }

#### READ

* Listar todos os dados:
Método: Get  

Paths: "/students/studentsList", "/professors/professorsList", "/coordinators/coordinatorsList"

Este método não utiliza o body nem o query da requisição.

* Listas baseadas no status da pessoa:
Método: Get  

Paths: "/students/studentsListByStatus", "/professors/professorsListByStatus", "/coordinators/coordinatorsListByStatus" 

Utilize o query da requisição e passe como Query Parameter e Value:  

Para selecionar usuários inativos:
        status 0

Para selecionar usuários ativos:
        status 1

* Listar os detalhes de pessoa específica:
Método: Get  

Paths: "/students/studentDetails", "/professors/professorDetails", "/coordinators/coordinatorDetails" 

Utilize o query da requisição e passe como Query Parameter "id" e como Value o número do id.  

* Listar estudantes e professores por ano e turma:
Método: Get  

Paths: "/students/studentsListByYearAndRoom", "/professors/professorsListByYearAndRoom" 

Utilize o query da requisição e passe como Query Parameters "year" e "room":  

        year 8
        room a

* Listar estudantes por média maior ou igual que determinado valor:
Método: Get  

Path: "/students/studentsListByAverage" 

Utilize o query da requisição e passe como Query Parameter a "gradePointAverage":  

        gradePointAverage 8.5

* Listar professores por matéria:
Método: Get  

Path: "/professors/professorsListBySubject" 

Utilize o query da requisição e passe como Query Parameter a "subject":  

        subject portuguese

* Listar coordenadores por projeto principal:
Método: Get  

Path: "/coordinators/coordinatorsListByMainProject" 

Utilize o query da requisição e passe como Query Parameter a "subject":  

        mainProject Diversity and Inclusion


#### UPDATE

* Atualizar todos os dados de um estudante:
Método: Put  

Path: "/students/updateStudent"  

Utilize o body da requisição para passar os dados do estudante, inclusive o id:  

        {
            "id": "3"
            "name": "Marcelo",
            "birthdate": "2000-03-18",
            "cpf": "111000111-81",
            "gender": "male",
            "nationality": "brazilian",
            "address": "Av SAP 190",
            "phoneNumber": "999999888",
            "shift": "morning",
            "year": "7",
            "room": "b",
            "gradePoint1": 9,
            "gradePoint2":  9,
            "gradePoint3": 9.5,
            "status": 1
        }

* Atualizar todos os dados de um professor:
Método: Put  

Path: "/professors/updateProfessor"  

Utilize o body da requisição para passar os dados do professor, inclusive o id:  

        {
            "id": "2",
            "name": "Cristine",
            "birthdate": "1971-06-25",
            "cpf": "111999240-79",
            "gender": "female",
            "nationality": "brazilian",
            "address": "Av SAP 190",
            "phoneNumber": "999999988",
            "degree": "doctoral",
            "role": "professor",
            "shift": "morning",
            "sector": "education",
            "weekHours": 20,
            "salary": 3000,
            "hiringDate": "2017-03-15",
            "status": 1,
            "subject": "portuguese",
            "year": "7",
            "room": "b"
        }

* Atualizar todos os dados de um coordenador:
Método: Put  

Path: "/coordinators/updateCoordinator"  

Utilize o body da requisição para passar os dados do coordenador, inclusive o id:  

        {
            "id": "1"
            "name": "Eduardo",
            "birthdate": "1965-05-20",
            "cpf": "444999240-79",
            "gender": "male",
            "nationality": "brazilian",
            "address": "Av SAP 190",
            "phoneNumber": "999999888",
            "degree": "doctoral",
            "role": "coordinator",
            "shift": "full-time",
            "sector": "education",
            "weekHours": 40,
            "salary": 6500,
            "hiringDate": "2016-07-10",
            "status": 1,
            "directs": 15,
            "projects": 5,
            "mainProject": "Modern Teaching Methods"
        }

* Atualizar as notas de um estudante:
Método: Patch  

Path: "/students/updateStudentsGrades"  

Utilize o body da requisição para passar as notas do estudante, incluindo o id:  

        {
            "id": "3",
            "gradePoint1": 10,
            "gradePoint2":  10,
            "gradePoint3": 10
        }

* Atualizar a folha de pagamento de um profissional:
Método: Patch  

Paths: "/professors/updateProfessorsPayroll", "/coordinators/updateCoordinatorsPayroll"  

Utilize o body da requisição para passar carga horária e salário do profissional, incluindo o id:  

        {
            "id": "3",
            "weekHours": 40,
            "salary": 5000
        }

* Atualizar o status de pessoa específica:
Método: Patch  

Paths: "/students/updateStudentsStatus", "/professors/updateProfessorStatus", "/coordinators/updateCoordinatorStatus"  

Utilize o body da requisição e passe o id e o status desejado (0 = inativo, 1 = ativo):  

        {
            "id": "3",
            "status": "0"
        }

#### DELETE

* Deletar uma pessoa específica:
Método: Delete  

Paths: "/students/deleteStudent", "/professors/deleteProfessor", "/coordinators/deleteCoordinator"  

Utilize o query da requisição e passe como Query Parameter "id" e como Value o número do id.  

