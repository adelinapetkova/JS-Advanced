import { html, render } from "./node_modules/lit-html/lit-html.js";
import {getAllStudents} from './api.js'
import {temp} from './studentsTemp.js'
import {solve} from './search.js'

let tableBody=document.querySelector('.container tbody')
let studentsData=await getAllStudents()
let template=temp(Object.values(studentsData));

render(template, tableBody)

let searchBtn=document.querySelector('#searchBtn')
searchBtn.addEventListener('click', solve)

