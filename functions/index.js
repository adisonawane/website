const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


const admin =require('firebase-admin');
admin.initializeApp();
//console.log("inside admin");
const db = admin.firestore();

const cors=require('cors');
const express=require('express');
const app=express();
app.use(cors())

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const getSkills=(req,res)=>{
    db.collection('skills').get().then((data)=>{
        //console.log(data);
        let d=[];
         data.forEach(x => {
            d.push({
                skillname:x.data(),
                
            });
        });
        return res.json(d);
    }).catch(err=>{
        console.log(err);
         res.json({'response_code':"error","msg":"server error","code":err.code});
        
    });
  };
  app.get('/getSkills',getSkills);
  

  const project =(request,respond) =>{
    db.collection('projects').get().then((data) =>{
      let array=[]
      data.forEach(props =>{
        array.push({
          project_name: props.data().name,
          project_desc: props.data().desc
        })
      })
      return respond.json(array)
    }).catch(err =>{
      console.log(err)
      respond.json({'response_code':"error","msg":"server error","code":err.code})
    })
  }
  app.get('/project',project)
  exports.api = functions.https.onRequest(app);

// const getBackEndDev= (request,respond) =>{
//   db.collection('BackEndDevelopment').get().then((data)=>{
//     let array =[];
//     data.forEach(x =>{
//       array.push({
//           name:x.data().name,
//           starBorderIcon:x.data().starBorderIcon,
//           starIcon:x.data().starIcon,
//       })
//     })
//     return respond.json(array)
//   }).catch(err =>{
//     console.log(err)
//     respond.json({'respond_code':"error","msg":"server error","code":error.code})
//   })
// }
// app.get('/getBackEndDev',getBackEndDev)

// const getProgLang= (request,respond) =>{
//   db.collection('ProgrammingLanguages').get().then((data)=>{
//     let array =[];
//     data.forEach(x =>{
//       array.push({
//           name:x.data().name,
//           starBorderIcon:x.data().starBorderIcon,
//           starIcon:x.data().starIcon,
//       })
//     })
//     return respond.json(array)
//   }).catch(err =>{
//     console.log(err)
//     respond.json({'respond_code':"error","msg":"server error","code":error.code})
//   })
// }
// app.get('/getProgLang',getProgLang)

// const getTools= (request,respond) =>{
//   db.collection('Tools').get().then((data)=>{
//     let array =[];
//     data.forEach(x =>{
//       array.push({
//           name:x.data().name,
//           starBorderIcon:x.data().starBorderIcon,
//           starIcon:x.data().starIcon,
//       })
//     })
//     return respond.json(array)
//   }).catch(err =>{
//     console.log(err)
//     respond.json({'respond_code':"error","msg":"server error","code":error.code})
//   })
// }
// app.get('/getTools',getTools)

