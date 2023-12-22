class Student{
    constructor(name,fathername,mothername,dateofbirth,mobileno,email,courses,university,mentor,gender){
        this.studentName = name ;
        this.fatherName = fathername ;
        this.motherName = mothername ;
        this.dob = dateofbirth ;
        this.phoneNo = mobileno ;
        this.email = email ;
        this.course = courses ;
        this.university = university ;
        this.mentor = mentor ;
        this.gender = gender ;
    }
}
 
function getData(){
    let array=document.getElementsByTagName("input");
    let select =document.getElementsByTagName("select");

    let name=array[0].value;
    let fathersname=array[1].value;
    let mothername=array[2].value;
    let dateofbirth=array[3].value;
    let mobileno=array[4].value;
    let email=array[5].value;
    let courses=select[0].value;
    let university=select[1].value;
    let mentor=select[2].value;
    let gender=select[3].value;

    let student= new Student(name,fathersname,mothername,dateofbirth,mobileno,email,courses,university,mentor,gender)
    return student;
}

// const signUp =()=>{
//     let student=getData();
//     console.log(JSON.stringify(student))    
// }

const signUp=()=>{
    let student=getData();
    const apiUrl = "http://localhost:8080/erp/admission"; // Replace with your API endpoint

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Set the content type to JSON
        },
        body: JSON.stringify(student) // Convert data to JSON and send it in the request body
    })
    .then(async (response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    })
    .then((d) => {
        alert("Thanku for register to saha institute your student id is "+d)
        window.location.reload();
        
    })
    .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
    });
}


// function signUp() {
//     let student=getData();
//     const apiUrl = "http://localhost:8080/erp/admission";
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');
//     headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
//     headers.append('Access-Control-Allow-Credentials', 'true');
  
//     headers.append('POST', 'OPTIONS');
  
//     // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));
  
//     fetch(apiUrl, {
//         mode: 'no-cors',
//         credentials: 'include',
//         method: 'POST',
//         headers: headers,
//         body: JSON.stringify(student)
//       })
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(error => console.log('Authorization failed : ' + error.message));
// }


// function signUp() {
//     let student = getData();
//     const apiUrl = "http://localhost:8080/erp/admission";
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');
  
//     // Remove unnecessary headers

//     fetch(apiUrl, {
//         method: 'POST',
//         mode: 'cors', // Use 'cors' mode for CORS requests
//         credentials: 'include',
//         headers: headers,
//         body: JSON.stringify(student)
//     })
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.log('Authorization failed: ' + error.message));
// }