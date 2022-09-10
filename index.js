// Write your solution in this file!
const employee = {
    name: "Pablo",
    streetAddress: "123 Hartham Ct.",
};
function updateEmployeeWithKeyAndValue(employee, streetAddress, value) {
   const copyOfEmployees = { ...employee, streetAddress: value};
   return copyOfEmployees;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee.streetAddress = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
