/*The about form fields*/
const firstName=document.getElementById('firstName');
const lastName=document.getElementById('lastName');
let imageInput=document.querySelector('.choose-image-input');
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
let resumeDisplay=document.querySelector('.resume-display');
let eduDocsDisplay=document.querySelector('.edu-docs-display');

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
    <td>${Array.from(document.querySelectorAll('.listContent')).map(element=>element.textContent)}</td>
</tr>
<tr>
    <th>Resume</th>
    <td>${Array.from(resumeDisplay.querySelectorAll('.d-flex')).map(element=>element.textContent+' | ')}</td>
</tr>
<tr>
    <th>Educational Documents</th>
    <td>${Array.from(eduDocsDisplay.querySelectorAll('.d-flex')).map(element=>element.textContent+' | ')}</td>
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
    showFormData();
  }
  else{
    prevBtn.style.display = "inline";
    previewBtn.style.display='none';
    nextBtn.style.display='inline';
    nextBtn.innerHTML = "Next";
  }

  //... and run a function that will display the correct step indicator:
}

function checkMailandPermAdd(){
  if(isPermAddSameMailAdd.checked){
   permanentAddress.value=mailAddress.value;
   cityPerm.value=cityMail.value;
   chooseStatePerm.value=chooseStateMail.value;
   zipCodePerm.value=zipCodeMail.value;
   permanentAddress.setAttribute('disabled','disabled');
   cityPerm.setAttribute('disabled','disabled');
   chooseStatePerm.setAttribute('disabled','disabled');
   zipCodePerm.setAttribute('disabled','disabled');
  }
  else{
    permanentAddress.removeAttribute('disabled');
    cityPerm.removeAttribute('disabled');
    chooseStatePerm.removeAttribute('disabled');
    zipCodePerm.removeAttribute('disabled');
    permanentAddress.value='';
    cityPerm.value='';
    chooseStatePerm.value='';
    zipCodePerm.value='';
    
  }
  
}
function nextPrev(n)
 {
  // This function will figure out which tab to display
  // Exit the function if any field in the current tab is invalid:
  
  // Hide the current tab:
  if(currentTab < x.length && currentTab!==x.length)//0 1
  {
    x[currentTab].style.display = "none";
    
  }
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab === (x.length-1)) 
  {
    // ... the form gets submitted:
    if(validateFields())
    {
      document.getElementById("regForm").submit();
      alert('Form Submitted');
    }
    else{
      return false;
    }
    
  }
  // Otherwise, display the correct tab:
  console.log(currentTab);
  if(currentTab < x.length){
    showTab(currentTab);
  }
  
}

let loadImageFile=(event)=>
{
     let fileArray=Array.from(event.target.files);
     console.log(fileArray);
      for(let i in fileArray)
      {
          if(fileArray[i].type.includes('pdf') || fileArray[i].type.includes('docs'))
          {
            console.log(fileArray[i]);
            const a=document.createElement('a');
            a.setAttribute('target','_blank');
            a.setAttribute('download',fileArray[i].name);
            a.classList.add('d-flex','flex-column');
            a.href=window.URL.createObjectURL(fileArray[i]);
            a.textContent=fileArray[i].name;
            event.target.parentNode.appendChild(a);
          } 
          else if(fileArray[i].type.includes('png') || fileArray[i].type.includes('jpg') || fileArray[i].type.includes('webp') ||fileArray[i].type.includes('jpeg'))
          {
              if(fileArray[i].size>=60000 && fileArray[i].size<=200000)
              {
                  //let dimension=(imageUpload.clientHeight*imageUpload.clientWidth)/1000000;
                  //console.log(dimension);
                imageUpload.src=URL.createObjectURL(fileArray[i]);
              }
            else
            {
              alert('Please upload an image of size between 60Kb-200Kb');
              imageInput.value='';
            }
              
          }
          else{
            imageInput.value='';
            resumeInput.value='';
            eduDocsInput.value='';
            alert('Upload a valid format file :)');
          }
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
  inputSkill.value=' ';
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

function validatePhone(input){
  console.log(input.value);
  if(input.value.length<10){
    input.style.borderColor='#dc3545';
    return false;
  }
  else {
    phoneNumber.setAttribute('disabled','disabled');
    input.style.borderColor='lightgrey';
    return true;
  }
}
function validateZip(input){
  console.log(input.value);
  if(input.value.length>=6)
  {
      if(input.id=='zip-code-mail'){
        zipCodeMail.setAttribute('disabled','disabled');
      }
      else if(input.id=='zip-code-perm'){
        zipCodePerm.setAttribute('disabled','disabled');
      }
  }
  return true;
}
function ValidateEmail(mail) {
    if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(mail))
    {
      console.log(mail);
      return true;
    }
    else{
      alert("Please Enter a valid Email Address!")
      return false;
    }
      
}
function ValidateName(fname,lname){
  let totalLength=fname.length+lname.length;
  if(totalLength<2){
    alert('Please Enter Correct Name.!');
    return false;
  }
  else{
    return true;
  }
}
function ValidateBirthDate(dob){
  if(dob==''){
    alert('Please Enter The Date of Birth.!');
    return false;
  }
  return true;

}
function ValidateMailingAddress(mail,city,zip){
  let total=mail.length+city.length+zip.length;
  if(total<5){
    alert('Please Enter Correct Mailing-Address or Mailing-City Name or Mailing-Zip-Code.!');
    return false;
  }
  else{
    return true;
  }
}
function ValidatePermanentAddress(mail,city,zip){
  let total=mail.length+city.length+zip.length;
  if(total<5){
    alert('Please Enter Correct Permanent-Address or Permanent-City Name or Permanent-Zip-Code.!');
    return false;
  }
  else{
    return true;
  }
}
function ValidateSkills(skills){
  if(skills.length===0){
    alert('Please Enter Some Skills.!');
    return false;
  }
  return true;
}
function ValidateDisplayImage(display){
  if(display==''){
    alert('Upload A Display Picture.!');
    return false;
  }
  return true;
}
function ValidateResumeEduDocs(resume,eduDocs){
  if(resume==''){
    alert('Please Upload Resume.!');
    return false;
  }
  else if(eduDocs==''){
    alert('Please Upload Educational Documents');
    return false;
  }
  return true;
}
function validateFields()
{
  let email=ValidateEmail(emailId.value);
  console.log(email);
  let name=ValidateName(firstName.value,lastName.value);
  console.log(name);
  let birthDate=ValidateBirthDate(dateOfBirth.value);
  console.log(birthDate);
  let phone=validatePhone(phoneNumber);
  console.log(phone);
  let mailing=ValidateMailingAddress(mailAddress.value,cityMail.value,zipCodeMail.value);
  console.log(mailing);
  let permanent=ValidatePermanentAddress(permanentAddress.value,cityPerm.value,zipCodePerm.value);
  console.log(permanent);
  let skills=ValidateSkills(skillContainer.children);
  console.log(skills);
  let displayImage=ValidateDisplayImage(imageInput.value);
  console.log(displayImage);
  let resumeEduDocs=ValidateResumeEduDocs(resumeInput.value,eduDocsInput.value);
  console.log(resumeEduDocs);
  let resultString=""+email+name+phone+birthDate+mailing+permanent+skills+resumeEduDocs+displayImage;
  console.log(resultString);
  if(resultString.indexOf('false')==-1){
    return true;
  }
  return false;
}
