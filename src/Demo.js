import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo =(props) => {
	return<div className="maindiv_style">
	 <h1>Hello {props.name}</h1>
	<p>Welecom to my channel</p>
	</div>
	
}


	

export default Demo;