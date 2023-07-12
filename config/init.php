<?php
//  fichier de config de l'app

session_start();

const CONFIG=[
    'db'=>[
        'HOST'=>'localhost',    
        'PORT'=>'3306',
        'NAME'=>'dece5725_StarRadieux',
        'USER'=>'dece5725_SilenceRadieux',
        'PWD'=>'31naeD.semaJ'

    ],
    'app'=>[
        'name'=>'star_island',
        'projecturl'=>'http://quentin.cezdigit.com',
    ]

];

const BASE_PATH='/';
const GALERIE_PATH='/galerie.php';
const VIP_PATH='/vip.php';
const SERVEUR_PATH='/serveur.php';
const EVENT_PATH='/event.php';
const COMMENT_PATH='/comment.php';
