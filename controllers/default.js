exports.install = function() {
	F.route('/', view_index);
	F.route('/student/get/{name}', getStudent);
    F.route('/student/post/{name}',addStudent , ['POST']);
	F.route('/student/update/{id}', updateStudent , ['PUT']);
	F.route('/student/delete/{id}', deleteStudent , ['DELETE'])
	// or
	// F.route('/');
};

function view_index() {
	var self = this;
	//always has this line
	self.view('index');
}
// @GET
function getStudent() {
    var params = this.params;
    this.json(params)
}
//@POST
function addStudent() {
    var body = this.body;
    var params = this.params;
    var httpResponse = body;
    httpResponse.name = params.name;
    this.json(httpResponse);
}


// @PUT
function updateStudent() {
    var body = this.body;
    var params = this.params;
    var httpResponse = body;
    httpResponse.id = params.id;
    this.json(httpResponse)

}
// @DElETE
function deleteStudent() {
    var params = this.params;
    this.json(params)
}

