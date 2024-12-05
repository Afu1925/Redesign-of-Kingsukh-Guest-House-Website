function mouseover(obj) {
 obj.style.background = Color = "#ff4081";
 obj.style.color = "white";
 obj.style.borderColor = "brown";
 obj.style.boxShadow = "0 5px 15px grey";
}
function mouseout(obj) {
 obj.style.background = Color = "#e82574";
 obj.style.color = "white";
 obj.style.boxShadow = "0 5px 15px white";
}
function error() {
 var x = document.myform.email.value;
 var y = document.myform.fname.value;
 var z = document.myform.lname.value;
 var a = document.myform.mobile.value;
 var b = document.myform.comment.value;
 if (x != "" && y != "" && z != "" && a != "" && b != "") {
  if (!/^[a-zA-Z0-9._+%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/) {
   document.getElementById("error").innerHTML = "Invalid Email Id";
   return false;
  }
  if ((!/^[a-zA-Z]+$/.test(y)) || (!/^[a-zA-Z]+$/.test(z))) {
   document.getElementById("error").innerHTML = "Please Check Your Name";
   return false;
  }
  if ((!/[0-9]/.test(a)) || ((a.length) == 0 || (a.length) > 10 || (a.length) != 10)) {
   document.getElementById("error").innerHTML = "Invalid Mobile Number";
   return false;
  }
  else {
   document.getElementById("error").innerHTML = "Submission Successful";
  }
 }
 else {
  document.getElementById("error").innerHTML = "All Fields Are Required!";
 }
}