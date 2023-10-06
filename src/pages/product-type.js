import Header from '../components/header';
import Footer from '../components/footer';
import CardType from '../components/type-card';
//import { useEffect } from 'react';
//import { useState } from 'react';
export default function ProductType(props){
    const list_pdtype =[
        {
            'name': 'Type 1',
            'list_pd':[
                {
                    'pic':'a6.png',
                    'name':'gojo',
                    'price': 25000
                 },
                {
                    'pic':'a6.png',
                    'name':'gojo2',
                    'price': 55000
                 },
                {
                    'pic':'a6.png',
                    'name':'gojo3',
                    'price': 13000
                 },
                {
                    'pic':'a6.png',
                    'name':'gojo4',
                    'price': 34000
                 }
            ]
        },
        {
            'name': 'Type 2',
            'list_pd':[
                {
                    'pic':'a6.png',
                    'name':'gojo5',
                    'price': 5000
                 },
                {
                    'pic':'a6.png',
                    'name':'gojo6',
                    'price': 35000
                 },
                {
                    'pic':'a6.png',
                    'name':'gojo7',
                    'price': 15000
                 },
                {
                    'pic':'a6.png',
                    'name':'gojo8',
                    'price': 17000
                 }
            ]
        }
        
    ];
    
    // const {list_pdtype,setListPDType}=useState({})
    // useEffect (():{
    //     fetch('http://localhost:9000/get-data.php')
    //     .then(response : response.json())
    //     .then(json: setListPDType(json))
    // },{});

    const listPDTypes = list_pdtype.map(function(item)
    {
        return(
            <CardType data={item}/>
        );
    });
    
    return(
            <>
            <Header/>
            <> {listPDTypes}</>
            <Footer/>
            </>
        );
   
}

//dowload router
//npm install react-router-dom localforage match-sorter sort-by
//npm run dev