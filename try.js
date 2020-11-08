  var firebaseConfig = {
    apiKey: "AIzaSyC_Dzph-_yI-iTTMz4SYz6Xnoe9ZcKcJ3E",
    authDomain: "project-name-d329b.firebaseapp.com",
    databaseURL: "https://project-name-d329b.firebaseio.com",
    projectId: "project-name-d329b",
    storageBucket: "project-name-d329b.appspot.com",
    messagingSenderId: "804094921804",
    appId: "1:804094921804:web:4d39a9d8b6ca68651c78e9",
    measurementId: "G-BMLF23YLY8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


//VARIABLES
var LoginAdmin =false;
var database = firebase.database();
var ref = database.ref('Player');
ref.on('value',gotData, errData);
var Player;
var k;
var name;
var Password;
var Datas;
var keys;
var showAgain =true;
 function gotData(data){
  if(showAgain == true){
 Player = data.val();
 keys = Object.keys(Player);
  for( var a = 0; a < keys.length; a++){
    k = keys[a];
    Name = Player[k].Name;
    Password = Player[k].Password;
     //console.log(k);

    var list = document.createElement('td');
    var list2 = document.createElement('th');
    var tr = document.createElement('tr');
    list.innerHTML = Name;
    list2.innerHTML = "See Data";
    list2.value=k;
    list2.onclick = showData;
    document.getElementById("List").appendChild(tr);
    document.getElementById("List").appendChild(list);
    document.getElementById("List").appendChild(list2);

  }
}
    }

  
  function errData(err){
    console.log("Error");
    }


 function SignIn(){
    var name = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;
    var Class = document.getElementById('class').value;
      if(Class=="Assassin"){
        //Assassin
        data = {
        Name:name,
        Password:pass,
        Admin: false,
        MaxHp:100,
        MaxMana:50,
        Level:1,
        Class:"Assassin",
        Damage:15
        }
      }
      if(Class=="Knight"){
      //Knight
        data = {
        Name:name,
        Password:pass,
        Admin: false,
        MaxHp:130,
        MaxMana:50,
        Level:1,
        Class:"Kight",
        Damage:10
          
        }
      }
      if(Class=="Mage"){
      //Mage
        data = {
        Name:name,
        Password:pass,
        Admin: false,
        MaxHp:75,
        MaxMana:120,
        Level:1,
        Class:"Mage",
        Damage:10  
        }
      }
      if(Class=="Archer"){
      //Archer
        data = {
        Name:name,
        Password:pass,
        Admin: false,
        MaxHp:85,
        MaxMana:30,
        Level:1,
        Class:"Archer",
        Damage:15

        }
      }
      if(Class=="Spearman"){
      //Knight
        data = {
        Name:name,
        Password:pass,
        Admin: false,
        MaxHp:120,
        MaxMana:60,
        Level:1,
        Class:"Spearman",
        Damage:13
        }
      }
    var keysLen = keys.length;
    var uniqueName = true;
    //Check kung ang Name ba sa json may value ._.
    if(data.Name.length > 0 && data.Password.length > 0){
     //Check Kung ang Name ba ay existing
     for( var b = 0; b < keysLen; b++){
              var c = keys[b];
              Name = Player[c].Name;
            if(data.Name == Name){
              alert("Use Other Name");
              uniqueName = false;
              break;
            }
      }
    if(uniqueName == true){
    showAgain = false;
    ref.push(data);
    
    location.reload();
      }
    }
}

function showData(data){
  Datas = this.value;
  
  var zName = Player[Datas].Name;
  var zPassword = Player[Datas].Password;
  var zClass = Player[Datas].Class;
  var zDamage = Player[Datas].Damage;
  var zLevel = Player[Datas].Level;
  var zMaxHp = Player[Datas].MaxHp;
  var zMaxMana = Player[Datas].MaxMana;


  var Nametxt = document.getElementById("nameShow");
  Nametxt.value = zName;

  var Passwordtxt = document.getElementById("passShow");
  Passwordtxt.value = zPassword;

  var keyShow = document.getElementById("keyShow");
  keyShow.value = Datas;

  var Classtxt = document.getElementById("ClassShow");
  Classtxt.value = zClass;

  var Damagetxt = document.getElementById("damageShow");
  Damagetxt.value = zDamage;

  var Leveltxt = document.getElementById("levelShow");
  Leveltxt.value = zLevel;

  var Maxhptxt = document.getElementById("hpShow");
  Maxhptxt.value = zMaxHp;

  var Maxmanatxt = document.getElementById("manaShow");
  Maxmanatxt.value = zMaxMana;

  var savee = document.getElementById("savee");
  savee.onclick = function(){
    
      showAgain = false;
      firebase.database().ref('Player/'+Datas).update({
        Name:Nametxt.value,
        Password:Passwordtxt.value,
        Admin: false,
        MaxHp:zMaxHp,
        MaxMana:zMaxMana,
        Level:zLevel,
        Class:zClass,
        Damage:zDamage
      })
      location.reload();
  };

  document.querySelector(".model-bgs").classList.add('bg-active');
} 

function myFunction() {
  var a =document.querySelector(".model-bg").classList.add('bg-active');
 }

function zdelete(data){
  var dataRef = database.ref('Player/' + Datas); 
  showAgain = false;
  dataRef.remove();
  location.reload();
 }

