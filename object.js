let personal = {
          firstName: "vinod",
          midelname: "phoolchand",
           lastname: "mishra"


};
personal.lastname = "dubey";

// if you want to change any key value then use bojectname.keyname ="value" ex. personal.lastname = "dubey"
 personal.age = 34;      // if miss any bojet key thane you can write object name.key = value
  
  // if you want to delet any key than use is delet objectname.lastname;


 /*for(let key in personal)
 {

            console.log(key + " : " + personal[key]);} */



  // anus function is use if not write any parmeter           

  personal.sayhello = function(){
       console.log("hello");
  }

   console.log(personal);