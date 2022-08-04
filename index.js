// Write your solution in this file!
const employee = {
    streetAddress: '',
    name: ''
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newUser = {...employee}
    newUser[key] = value
    return newUser
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee, {[key]: value})
}


function deleteFromEmployeeByKey(employee, key){
    const newUser = Object.assign({},employee)
    delete newUser[key]
    return newUser
}
  

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;


}
