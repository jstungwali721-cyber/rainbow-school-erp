
//==============================
// SidhuEdu ERP Database v2.0
//==============================

//---------- STUDENTS ----------

function getStudents(){

let data=localStorage.getItem("students");

return data ? JSON.parse(data) : [];

}

function saveStudent(student){

let students=getStudents();

students.push(student);

localStorage.setItem("students",JSON.stringify(students));

}

function deleteStudent(index){

let students=getStudents();

students.splice(index,1);

localStorage.setItem("students",JSON.stringify(students));

}

//---------- FEES ----------

function getFees(){

let data=localStorage.getItem("fees");

return data ? JSON.parse(data) : [];

}

function saveFees(fee){

let fees=getFees();

fees.push(fee);

localStorage.setItem("fees",JSON.stringify(fees));

let total=0;

fees.forEach(function(f){

total += Number(f.amount)||0;

});

localStorage.setItem("totalFees",total);

}

//---------- ATTENDANCE ----------

function getAttendance(){

let data=localStorage.getItem("attendance");

return data ? JSON.parse(data) : [];

}

function saveAttendance(record){

let attendance=getAttendance();

attendance.push(record);

localStorage.setItem("attendance",JSON.stringify(attendance));

localStorage.setItem("todayAttendance",attendance.length);

}

//---------- EXPENSES ----------

function getExpenses(){

let data=localStorage.getItem("expenses");

return data ? JSON.parse(data) : [];

}

function saveExpense(expense){

let expenses=getExpenses();

expenses.push(expense);

localStorage.setItem("expenses",JSON.stringify(expenses));

let total=0;

expenses.forEach(function(e){

total += Number(e.amount)||0;

});

localStorage.setItem("totalExpenses",total);

}