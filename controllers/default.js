exports.install = function() {
	F.route('/', view_index);
	F.route('/student/get/{name}', getStudent);
    F.route('/student/post/{name}',addStudent , ['POST']);
	F.route('/student/update/{id}', updateStudent , ['PUT']);
	F.route('/student/delete/{id}', deleteStudent , ['DELETE'])
	// or
	// F.route('/');
    F.route('/employee', getAllEmployee);
	F.route('/employee', addEmployee , ['post']);
	F.route('/employee/{id}', updateEmployee , ['put'])
};

function view_index() {
	let self = this;
	//always has this line
	self.view('index');
}
// @GET
function getStudent() {
    let params = this.params;
    this.json(params)
}
//@POST
function addStudent() {
    let body = this.body;
    let params = this.params;
    let httpResponse = body;
    httpResponse.name = params.name;
    this.json(httpResponse);
}


// @PUT
function updateStudent() {
    let body = this.body;
    let params = this.params;
    let httpResponse = body;
    httpResponse.id = params.id;
    this.json(httpResponse)

}
// @DElETE
function deleteStudent() {
    let params = this.params;
    this.json(params)
}


// Get all employee
function getAllEmployee() {
    //3 step in restAPI
        //1: get param
        //2: connect with datatbase
            // function getResult chi la define
            let Employee = MODEL('employee').schema;
            let self = this;
            let getResult = (err , response) => {

                if(err){
                    self.json(err);
                }else{
                    self.json(response)
                }
            };

            // exec la mot function bat dong bo
            Employee.scan().exec(getResult)

        //3: return json
}

// @POST employee
function addEmployee() {
    let body = this.body;
    let id = body.id;
    let name = body.name;
    let Employee = MODEL('employee').schema;
    let employee = new Employee({
        id: id,
        name: name
    });
    let createResultHandle = (err) => {
        if(err) {
            this.json(err)
        }else{
            this.json(employee)
        }
    };
    employee.save(createResultHandle)

}

//@PUT employee
// let updateEmployee = () => {
//     let body = this.body;
//     let params = this.params;
//     let id = params.id;
//     let name = body.name;
//     let Employee = MODEL('employee').schema;
//     let employee = Employee({
//         id: id,
//         name: name
//     });
//     let updateResultHandle = (err) => {
//         if(err) {
//             this.json(err)
//         }else{
//             this.json(employee)
//         }
//     };
//     employee.save(updateResultHandle)
// };
