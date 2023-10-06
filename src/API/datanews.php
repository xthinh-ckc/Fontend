<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");

 $newslist =[
    [
        [
            'pic'=>'a6.png',
            'newsname'=>'HELLO NEW DAY',
            'content'=>'News of to day',
        ],
        [
            'pic'=>'a7.png',
            'newsname'=>'HELLO NEW DAY',
            'content'=>'News of to day',
        ],
        [
            'pic'=>'a8.png',
            'newsname'=>'HELLO NEW DAY',
            'content'=>'News of to day',
        ],
        [
            'pic'=>'a9.png',
            'newsname'=>'HELLO NEW DAY',
            'content'=>'News of to day',
        ],
        [
            'pic'=>'a5.png',
            'newsname'=>'HELLO NEW DAY',
            'content'=>'News of to day',
        ],
        [
            'pic'=>'a14.png',
            'newsname'=>'HELLO NEW DAY',
            'content'=>'News of to day',
        ],
        [
            'pic'=>'a14.png',
            'newsname'=>'HELLO NEW DAY',
            'content'=>'News of to day',
        ],
        [
            'pic'=>'a11.png',
            'newsname'=>'HELLO NEW DAY',
            'content'=>'News of to day',
        ]
        
        
    ],
     
];

echo json_encode($newslist);

//php -S localhost:9000