import React from 'react';
import  './Avatar.css';
import Avatarlist from './Avatarlist';

const Avatar=(props)=>{
	
	
	const avaratlistarray=[
	
	{
	id:1,
	name:"Harry",
	work:"yada"	
	},
	
	{
	id:2,
	name:"Rupinder",
	work:"Saini"	
	},
	
	
	
	{
	id:3,
	name:"Tardeep",
	work:"singh"	
	},
	
	
	
	
	
	
	{
	id:4,
	name:"Shubham",
	work:"saggu"	
	}
	
	
	
	
	
	
	
	
	
	]
const arrayavaratcard =	avaratlistarray.map( (avatarcard, i)=>{
		
		return<Avatarlist id= {avaratlistarray[i].name} name={avaratlistarray[i].name} work={avaratlistarray[i].work} />
		
		})
		
		
		
return (<div className="mainpage">
<h1>See My All Friend </h1>


{arrayavaratcard}
<button>Subscibe</button>
</div>)
}
export default Avatar;