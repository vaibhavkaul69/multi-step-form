/*The about form fields*/
const firstName=document.getElementById('firstName');
const lastName=document.getElementById('lastName');
const imageUpload=document.getElementById('dummy_image');
const dateOfBirth=document.getElementById('dob');
const phoneNumber=document.getElementById('phone');
const emailId=document.getElementById('email');
const inputDisplayImage=document.querySelector('.choose-image-input');

/*The contact form fields*/
const mailAddress=document.getElementById('mail-address');
const permanentAddress=document.getElementById('permanent-address');
const isPermAddSameMailAdd=document.getElementById('check-permanent-address');
isPermAddSameMailAdd.addEventListener('change',checkMailandPermAdd);
const cityMail=document.getElementById('submit-city-mail');
const chooseStateMail=document.getElementById('state_choose-mail');
const zipCodeMail=document.getElementById('zip-code-mail');
const cityPerm=document.getElementById('submit-city-perm');
const chooseStatePerm=document.getElementById('state_choose-perm');
const zipCodePerm=document.getElementById('zip-code-perm');

/*The education form fields*/
const skillContainer=document.querySelector('.add_skills_container');
let inputSkill=document.getElementById('input_skill');
const higherEducationDropdown=document.getElementById('higher-edu-drop');
const addSkillBtn=document.querySelector('.add_skill_btn');
const resumeInput=document.getElementById('submit-resume');
const eduDocsInput=document.getElementById('submit-edu-docs');

/*Preview all data*/
let previewData=document.querySelector('.preview-form-details-container');

/*Previous next and preview button*/
const nextBtn=document.getElementById('nextBtn');
const prevBtn=document.getElementById('prevBtn');
const previewBtn=document.getElementById('previewBtn');
/*Select all the form divs*/
const x = document.getElementsByClassName("tab");
var currentTab = 0; 
console.log(currentTab);// Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showFormData(){
  previewData.innerHTML=`
  <table class="table w-100 table-responsive ">
  <tr>
      <th>Name</th>
      <td>${firstName.value} ${lastName.value}</td>
  </tr>
  <tr>
    <th>Display Image</th>
    <td>
        <img class="display_image" src="${imageUpload.src}" alt="Display Image"/>
    </td>
</tr>
<tr>
    <th>Date of Birth</th>
    <td>${dateOfBirth.value}</td>
</tr>
<tr>
    <th>Phone Number</th>
    <td>${phoneNumber.value}</td>
</tr>
<tr>
    <th>Email Id</th>
    <td>${emailId.value}</td>
</tr>
<tr>
    <th>Mailing Address</th>
    <td>${mailAddress.value}</td>
</tr>
<tr>
    <th>Mailing Address City</th>
    <td>${cityMail.value}</td>
</tr>
<tr>
    <th>Mailing Address State</th>
    <td>${chooseStateMail.value}</td>
</tr>
<tr>
    <th>Mailing Address ZipCode</th>
    <td>${zipCodeMail.value}</td>
</tr>
<tr>
    <th>Permanent Address</th>
    <td>${permanentAddress.value}</td>
</tr>
<tr>
    <th>Permanent Address City</th>
    <td>${cityPerm.value}</td>
</tr>
<tr>
    <th>Permanent Address State</th>
    <td>${chooseStatePerm.value}</td>
</tr>
<tr>
    <th>Permanent Address ZipCode</th>
    <td>${zipCodePerm.value}</td>
</tr>
<tr>
    <th>Education</th>
    <td>${higherEducationDropdown.value}</td>
</tr>
<tr>
    <th>Skills</th>
    <td>${skillContainer.innerHTML}</td>
</tr>
<tr>
    <th>Resume</th>
    <td>${resumeInput.value}</td>
</tr>
<tr>
    <th>Educational Documents</th>
    <td>${eduDocsInput.value}</td>
</tr>
</table>
  `;
  console.log(`${firstName.value} ${lastName.value} ${imageUpload.src} ${dateOfBirth.value} ${phoneNumber.value} ${emailId.value}`);
}
function showTab(n) 
{
  // This function will display the specified tab of the form...
  
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    prevBtn.style.display = "none";
    nextBtn.style.display='inline';
    previewBtn.style.display='none';
  }
  else if(n == (x.length - 2)) {
    previewBtn.style.display='inline';
    nextBtn.style.display='none';
  }
  else if(n == (x.length-1)){
    showFormData();
  }
  else {
    prevBtn.style.display = "inline";
    previewBtn.style.display='none';
    nextBtn.style.display='inline';
    nextBtn.innerHTML = "Next";
  }

  //... and run a function that will display the correct step indicator:
}

function checkMailandPermAdd(){
  if(isPermAddSameMailAdd.checked){
    console.log('Hello check');
  }
  else{
    console.log('Hello uncheck');
  }
  
}
function nextPrev(n) {
  // This function will figure out which tab to display
  // Exit the function if any field in the current tab is invalid:
  //if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  if(currentTab < x.length)//0 1
  {
    x[currentTab].style.display = "none";
    x[currentTab].classList.add('hidden');
  }
  
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;//1 
  // if you have reached the end of the form...
  if (currentTab === x.length) 
  {
    alert('Form Submitted');
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
  console.log(currentTab);
  if(currentTab===(x.length-1)){
    alert('3rd tab');
  }
}

/*
function validateForm() {
  // This function deals with validation of the form fields
  var  y, i, valid = true;
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}
*/
let loadImageFile=(event)=>{
    console.log(event.target.files);
    if(event.target.files[0].size>=60000 && event.target.files[0].size<=200000){
        imageUpload.src=URL.createObjectURL(event.target.files[0]);
    }
    else{
      inputDisplayImage.value='';
        alert('Please upload an image of size between 60Kb-200Kb');
    }
}

addSkillBtn.addEventListener('click',(event)=>{
  event.preventDefault();
  skillContainer.innerHTML+=`
<li class='listItem'>
  <p class='listContent'>${inputSkill.value}</p>
   <button class='closeBtn btn btn-outline-danger' type="button"> X</button>
</li>             
  `;
  inputSkill.value='';
});
const deleteSkills=(e)=>{
  e.preventDefault();
        if(e.target.classList.contains('closeBtn'))
        {
            if(confirm('Delete Selected Skill?'))
            {
                e.target.parentNode.remove();
            }
        }
};
skillContainer.addEventListener('click',deleteSkills);