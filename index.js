// Your code here
function createEmployeeRecord(employeeDataArray) {
    const employeeRecord = {};

    if(employeeDataArray.length > 0) {
        employeeRecord.firstName = employeeDataArray[0];


    if(employeeDataArray.length > 1) {
        employeeRecord.familyName = employeeDataArray[1];

        if(
            employeeDataArray.length > 2) {
                employeeRecord.title = employeeDataArray[2];

                if(
                    employeeDataArray.length > 3) {
                        employeeRecord.payPerHour = employeeDataArray[3];
            }      
    }
    return employeeRecord;

}
}
}
