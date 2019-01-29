function Worker(firstName, lastName, age, speciality, experience, salary, gender) {
    
    var name = {
        'firstName': firstName,
        'lastName': lastName
    };

    var age = age;
    var speciality = speciality;
    var experience = experience;
    var salary = salary;
    var gender = gender;


    this.setName = function (firstName, lastName) {
        name['firstName'] = firstName;
        name['lastName'] = lastName;
    }

    this.getName = function(){
        return name['firstName'] + ' ' + name['lastName'];
    }

    this.setAge = function (value) {
        age = value;
    }

    this.getAge = function () {
        return age;
    }

    this.setSpeciality = function (value) {
        speciality = value;
    }

    this.getSpeciality = function () {
        return speciality;
    }

    this.setExperience = function (value) {
        experience = value;
    }

    this.getExperience = function () {
        return experience;
    }

    this.setSalary = function (value) {
        salary = value;
    }

    this.getSalary = function () {
        return salary;
    }

    this.setGender = function (value) {
        gender = value;
    }

    this.getGender = function () {
        return gender;
    }

    this.toString = function () {
        return 'Name: ' + name['firstName'] + ' ' + name['lastName'] + '\nAge: ' + age +
            '\nSpeciality: ' + speciality + '\nExperience: ' + experience +
            '\nSalary: ' + salary + '\nGender: ' + gender;
    }
}

function FactoryWorker(first, last, age, speciality, experience, salary, gender, workerTool) {
    Worker.apply(this, arguments);
    var workerTool = workerTool;

    this.setWorkerTool = function (value) {
        workerTool = value;
    }

    this.getWorkerTool = function () {
        return workerTool;
    }

    toStringParent = this.toString;
    this.toString = function () {
        return toStringParent() + "\nWorker's Tool: " + this.workerTool;
    }
}

function TransportWorker(first, last, age, speciality, experience, salary, gender, workerTransport) {
    Worker.apply(this, arguments);
    var workerTransport = workerTransport;

    this.setWorkerTransport = function (value) {
        workerTransport = value;
    }

    this.getWorkerTransport = function () {
        return workerTransport;
    }

    toStringParent = this.toString;
    this.toString = function () {
        return toStringParent() + "\nWorker's Transport: " + workerTransport;
    }
}

function onCreateWorker() {
    var worker = new TransportWorker();
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    var speciality = document.getElementById('speciality').value;
    var experience = document.getElementById('experience').value;
    var salary = document.getElementById('salary').value;
    var gender = document.getElementById('gender').value;
    var workerTransport = document.getElementById('workerTransport').value;

    worker.setName(firstName, lastName);
    worker.setAge(age);
    worker.setSpeciality(speciality);
    worker.setExperience(experience);
    worker.setSalary(salary);
    worker.setGender(gender);
    worker.setWorkerTransport(workerTransport);

    alert(worker.toString());
}