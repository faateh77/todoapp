
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfbclcVGRDL0xPVDxD7DxQc-DudUfttl8",
  authDomain: "todoapp-46c8f.firebaseapp.com",
  projectId: "todoapp-46c8f",
  storageBucket: "todoapp-46c8f.appspot.com",
  messagingSenderId: "178957092402",
  appId: "1:178957092402:web:e162cbd265bae77ed81e2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
var listData = document.getElementById("listData")
var inputval = document.getElementById("inputval");
window.add = function () {

  console.log(inputval.value);

  var IdRef = ref(database, "todo/");
  var id = push(IdRef).key;
  console.log(id);

  var obj = {
    todo: inputval.value,
    id: id,
  };
  var reference = ref(database, `todo/${id}/`);
  set(reference, obj);
  console.log(obj);

  getData();
};
window.getData = function () {
  var reference = ref(database, "todo/");
  onValue(reference, function (data) {
    // console.log(data.val());
    var dataList = data.val();
    var getValues = Object.values(dataList);
    // console.log(dataList);
    console.log(getValues);
    renderData(getValues);
  });

};
window.renderData = function (dataArr) {
  console.log(dataArr, "RenderData");
  for (var i = 0; i < dataArr.length; i++) {
    listData.innerHTML += `<li>${dataArr[i].todo}</li>;`
  }
}