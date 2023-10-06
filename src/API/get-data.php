<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");

 $list_pdtype =[
    [
        'name'=> 'Type 1',
        'list_pd'=>[
            [
                'pic'=>'a6.png',
                'name'=>'gojo',
                'price'=> 5000
            ],
            [
                'pic'=>'a6.png',
                'name'=>'gojo2',
                'price'=> 35000
            ],
            [
                'pic'=>'a6.png',
                'name'=>'gojo3',
                'price'=> 15000
            ],
            [
                'pic'=>'a6.png',
                'name'=>'gojo4',
                'price'=> 7000
            ]
        ]
    ],
    [
        'name'=> 'Type 2',
        'list_pd'=>[
            [
                'pic'=>'a6.png',
                'name'=>'gojo5',
                'price'=> 9000
            ],
            [
                'pic'=>'a6.png',
                'name'=>'gojo6',
                'price'=> 23000
            ],
            [
                'pic'=>'a6.png',
                'name'=>'gojo7',
                'price'=> 25000
            ],
            [
                'pic'=>'a6.png',
                'name'=>'gojo8',
                'price'=> 1000
            ]
        ]
    ]
];

echo json_encode($list_pdtype);