function Worker(first, last, age, speciality, experience, salary, gender) {
    var name       = {
        'first': first,
        'last' : last
    }; 
    var age        = age;
    var speciality = speciality;
    var experience = experience;
    var salary     = salary;
    var gender     = gender;

    this.getName = function(){
        return this.name;
    }

    this.setName = function(first, second){
        this.name.first  = first;
        this.name.second = second;
    }

    this.getAge = function(){
        return this.age;
    }

    this.setAge = function(value){
        this.age = value;
    }

    this.getSpeciality = function(){
        return this.speciality;
    }

    this.setSpeciality = function(value){
        this.speciality = value;
    }

    this.getExperience = function(){
        return this.experience;
    }

    this.setExperience = function(value){
        this.experience = value;
    }

    this.getSalary = function(){
        return this.salary;
    }

    this.setSalary = function(value){
        this.salary = value;
    }

    this.getGender = function(){
        return this.gender;
    }

    this.setGender = function(value){
        this.gender = value;
    }

    this.toString = function(){
        return 'Name: ' + name.first + ' ' + name.second + '/nAge: ' + age +
                +'/nSpeciality: ' + speciality + '/nExperience: ' + experience +
                +'/nSalary: ' + salary + '/nGender: ' + gender;
    }
  }

  function FactoryWorker(first, last, age, speciality, experience, salary, gender, workerTool) {
    Worker.apply(this, arguments);
    var workerTool = workerTool;

    this.getWorkerTool = function(){
        return this.workerTool;
    }

    this.setWorkerTool = function(value){
        this.workerTool = value;
    }

    toStringParent = this.toString;
    this.toString = function(){
        return toStringParent() + "\nWorker's Tool: " + workerTool;
    }
  }

  function TransportWorker(first, last, age, speciality, experience, salary, gender, workerTransport) {
    Worker.apply(this, arguments);
    var workerTransport = workerTransport;

    this.getWorkerTransport = function(){
        return this.workerTransport;
    }

    this.setWorkerTransport = function(value){
        this.workerTransport = value;
    }

    toStringParent = this.toString;
    this.toString = function(){
        return toStringParent() + "\nWorker's Transport: " + workerTransport;
    }
  }

  function onCreateWorker(){
  var worker = new TransportWorker();
  var firstName = document.getElementById('firstName');
  var secondName = document.getElementById('secondName'); 
  var age = document.getElementById('age'); 
  worker.setName()
  }