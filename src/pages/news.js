import Header from '../components/header';
import Footer from '../components/footer';
import DataCardNews from '../components/datacardnews';
//import { useEffect } from 'react';
//import { useState } from 'react';

export default function News(props)
{
    // const [newslist,setNewsList]=useState([])
    // useEffect (()=>{
    //     fetch('http://localhost:9000/datanews.php')
    //     .then(response => response.json())
    //     .then(json=> setNewsList(json))
    // },[]);
    const newslist =[
        [
            {
                'pic':'a6.png',
                'newsname':'HELLO NEW DAY',
                'content':'News of to day',
            },
            {
                'pic':'a7.png',
                'newsname':'HELLO NEW DAY',
                'content':'News of to day',
            },
            {
                'pic':'a8.png',
                'newsname':'HELLO NEW DAY',
                'content':'News of to day',
            },
            {
                'pic':'a9.png',
                'newsname':'HELLO NEW DAY',
                'content':'News of to day',
            },
            {
                'pic':'a5.png',
                'newsname':'HELLO NEW DAY',
                'content':'News of to day',
            },
            {
                'pic':'a14.png',
                'newsname':'HELLO NEW DAY',
                'content':'News of to day',
            },
            {
                'pic':'a14.png',
                'newsname':'HELLO NEW DAY',
                'content':'News of to day',
            },
            {
                'pic':'a11.png',
                'newsname':'HELLO NEW DAY',
                'content':'News of to day',
            }
            
            
        ],
         
    ];
    
    const NewsList = newslist.map(function(item)
    {
        return(
            <DataCardNews data={item}/>
        );
    }
    );


   return(
    <>
    <Header/>
    {NewsList}
    <Footer/>
    </>
   );
}