import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EntryForm from "./component/EntryForm";
import Home from "./component/Home.js";
import Navbar from "./component/Navbar";
import View from "./component/Viewlog";
import "./App.css";
import UpdateEntry from "./component/UpdateEntry";
import ErrorPage from "./component/ErrorPage.js";

function Router() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/createEntry" element={<EntryForm />} />
          <Route exact path="/viewlog" element={<View />} />
          <Route exact path="/updateEntry" element={<UpdateEntry />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;




//dont delete it prakersh
// import {fetch} from 'wix-fetch';
// import wixLocation from 'wix-location';
// import wixData from 'wix-data';
// $w.onReady(function () {
// 	$w('#backLogIn').onClick(()=>{
// 		  $w('#signInMultiState').changeState('logInEmailEnterState')
// 	})

// 	$w('#organisationDropdown').onChange(()=>{
// 			$w("#launchWorkspace").link = `http://${$w('#organisationDropdown').value}.consoledev.quicktool.io`;
// 	})

// 	$w('#logInNext').onClick(function () {
// 		let email= $w('#logInEmail').value
// 		fetch( `https://authservicedev.quicktool.io/api/main/users/v1/getOrganisation?email=${email}`, {
//  				 "method": "get",
//   				"headers": {
//   		},
// 		} )
//   .then( (httpResponse) => {
// 	//   console.log("arya res",httpResponse)
//     if (httpResponse.ok) {
// 	  $w('#signInMultiState').changeState('OrganisationListLogInState')

//       return httpResponse.json();
//     } else {
//       return Promise.reject("Fetch did not succeed");
//     }
//   } )
//   .then( (json) => {console.log(json.data) 
// 		const da={
// 			organisation:json.data[0].organisation
// 		}
// 		const arya=json.data.map((indData)=> {return {"label": indData.name, "value": indData.name} })
// 		$w('#organisationDropdown').options=arya
// 		$w('#organisationDropdown').value=arya[0].value
// 		$w("#launchWorkspace").link = `http://${$w('#organisationDropdown').value}.consoledev.quicktool.io`;
// // 2		$w("#launchWorkspace").target="_blank";
// 		// wixData.insert("Login",da).then((result)=>{console.log("from here")}).catch((err)=>{console.log("from  error")});		
//   })
//   .catch(err => console.log(err,"arya"));

// 	})
// 	// $w('#launchId').onClick(()=>{
// 	// 	console.log("hello")
// 	// 	wixLocation.to("http://consoledev.quicktool.io")
// 	// })
// 	// Write your JavaScript here

// 	// To select an element by ID use: $w('#elementID')

// 	// Click 'Preview' to run your code
// });

// /**
//  *	Adds an event handler that fires when a visitor submits a Wix Form and it is successfully received by the server.
//  */
// export function multiStepForm1_wixFormSubmitted() {
// 	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
// 	// Add your code for this event here: 
// }



