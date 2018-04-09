exports.install = function() {
	F.route('/', view_index);
	F.route('/hello', hello );
	F.route('/hi/{person}/{age}', hiPerson );
	F.route('/person/add', addPerson , ['post']);
	F.route('/person/add/age/{age}', addPersonWithAge , ['post']);
	F.route('/person/{id}', updatePerson , ['put']);

	F.route('/person/{id}', deletePerson , ['delete']);



	// or
	// F.route('/');
};

function view_index() {
	var self = this;
	//always has this line
	self.view('index');
}

// @GET
function hello() {
    // self.view('hello')

    // -> return content
        // this.view('hello');

    //this is method get -> return message ( just data )
        this.json('hello world')
    // rest api step
        //         get param meter
        // store and retrieve data with database

}


// @GET with param
function hiPerson() {
    var body = this.body;
    var query = this.query;
    var params = this.params; //get param thong qua URL
    var httpResponse = {
        message: "hello: "+ params.person + "your age is: " + params.age
    };
    //nhan request body va tra ra body
    this.json(httpResponse);
}


// @POST
function addPerson() {
    var body = this.body;
    this.json(body);
}

// @POST with params
function addPersonWithAge() {
    var body = this.body;

    var params = this.params;

    var httpResponse = body;
    httpResponse.age = params.age;
    this.json(httpResponse);
}

// updatePerson
// @PUT
// path: /person/id
function updatePerson() {
    var body = this.body;
    var params = this.params;
    var httpResponse = body;
    httpResponse.id = params.id;
    this.json(httpResponse)
}
// deletePerson
// @DELETE
//path: /person/id
function deletePerson(){
    var body = this.body;
    var params = this.params;
    var httpResponse = body;
    this.json(httpResponse)
}