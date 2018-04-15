var driver = MODULE('dynamo').driver;
var Schema = driver.Schema;


// Schema is obj => Schema obtain 2 obj define , options
    // new Schema({define} , {options})
var EmployeeSchema = new Schema(
    {
        id: {
            type: String,
            hashKey: true
        },
        name: {
            type: String
        }
    },
    {
        // throughput: read , write
        throughput: {
            read: 1,
            write: 1
        }
    }
);

// register model employee with dynamoose
// driver is dynamoose()
var Employee = driver.model('employee', EmployeeSchema);


exports.id = 'employee';

exports.schema = Employee;

//callback : function
    // function GetAll(callback) {
    //     Employee.scan().exec(callback)
    // }