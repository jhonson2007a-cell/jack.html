// Photo Preview
document.getElementById("photo").addEventListener("change", function(event) {

    const file = event.target.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            document.getElementById("previewPhoto").src = e.target.result;

        }

        reader.readAsDataURL(file);

    }

});


// Generate Resume

function generateResume(){

    // Personal Information

    document.getElementById("rname").innerHTML =
    document.getElementById("name").value;

    document.getElementById("rphone").innerHTML =
    document.getElementById("phone").value;

    document.getElementById("remail").innerHTML =
    document.getElementById("email").value;

    document.getElementById("raddress").innerHTML =
    document.getElementById("address").value;

    document.getElementById("robjective").innerHTML =
    document.getElementById("objective").value;


    // Class 10

    document.getElementById("rschool10").innerHTML =
    document.getElementById("school10").value;

    document.getElementById("ryear10").innerHTML =
    document.getElementById("year10").value;

    document.getElementById("rpercent10").innerHTML =
    document.getElementById("percent10").value;


    // Class 12

    document.getElementById("rschool12").innerHTML =
    document.getElementById("school12").value;

    document.getElementById("ryear12").innerHTML =
    document.getElementById("year12").value;

    document.getElementById("rpercent12").innerHTML =
    document.getElementById("percent12").value;


    // Graduation

    document.getElementById("rcollege").innerHTML =
    document.getElementById("college").value;

    document.getElementById("rgradyear").innerHTML =
    document.getElementById("gradyear").value;

    document.getElementById("rcgpa").innerHTML =
    document.getElementById("cgpa").value;

    // Project

    document.getElementById("rproject").innerHTML =
    document.getElementById("project").value;

    document.getElementById("rprojectdesc").innerHTML =
    document.getElementById("projectdesc").value;


    // Skills

    document.getElementById("rskills").innerHTML =
    document.getElementById("skills").value;

    document.getElementById("rsoftskills").innerHTML =
    document.getElementById("softskills").value;


    // Certifications

    document.getElementById("rcert1").innerHTML =
    document.getElementById("cert1").value;

    document.getElementById("rcert2").innerHTML =
    document.getElementById("cert2").value;

    document.getElementById("rcert3").innerHTML =
    document.getElementById("cert3").value;
    // Internship
    document.getElementById("rinterncompany").innerHTML =
    document.getElementById("interncompany").value;

    document.getElementById("rinternship").innerHTML =
    document.getElementById("internship").value;

    // Experience
    document.getElementById("rcompany").innerHTML =
    document.getElementById("company").value;

    document.getElementById("rrole").innerHTML =
    document.getElementById("role").value;

    document.getElementById("rexperience").innerHTML =
    document.getElementById("experience").value;

    // Achievements
    document.getElementById("rachievement").innerHTML =
    document.getElementById("achievement").value;

    // Languages
    document.getElementById("rlanguages").innerHTML =
    document.getElementById("languages").value;

    // Hobbies
    document.getElementById("rhobbies").innerHTML =
    document.getElementById("hobbies").value;

    // Reference
    document.getElementById("rreference").innerHTML =
    document.getElementById("reference").value;

    document.getElementById("rreferencephone").innerHTML =
    document.getElementById("referencephone").value;

    // Declaration
    document.getElementById("rdeclaration").innerHTML =
    document.getElementById("declaration").value;

    // Place & Date
    document.getElementById("rplace").innerHTML =
    document.getElementById("place").value;

    document.getElementById("rdate").innerHTML =
    document.getElementById("date").value;

    // Signature
    document.getElementById("rsignature").innerHTML =
    document.getElementById("name").value;

    // Save data in browser
    saveData();
}

/* ------------------------------
   Save Data in Local Storage
--------------------------------*/
function saveData(){

    const inputs = document.querySelectorAll("input, textarea, select");

    inputs.forEach(function(item){

        if(item.type !== "file"){
            localStorage.setItem(item.id, item.value);
        }

    });

}

/* ------------------------------
   Load Saved Data
--------------------------------*/
window.onload = function(){

    const inputs = document.querySelectorAll("input, textarea, select");

    inputs.forEach(function(item){

        if(item.type !== "file"){

            let value = localStorage.getItem(item.id);

            if(value){
                item.value = value;
            }

        }

    });

};

/* ------------------------------
   Clear Form
--------------------------------*/

function clearForm(){

    if(confirm("Do you want to clear all details?")){

        localStorage.clear();

        location.reload();

    }

}