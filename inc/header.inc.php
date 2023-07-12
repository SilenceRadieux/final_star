
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- <link rel="stylesheet" href="assets/bootstrap/scss/bootstrap.css"> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="./assets/jquery/jquery.min.js" defer></script>
    <script src="./assets/js/script.js" defer></script>
    
</head>
<body>

<header>
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark mb-5">
    <div class="container-fluid">
        <a class="navbar-brand" href="<?=  BASE_PATH; ?>"><img id="logo_starisland" src="./assets/pack_graphique/starisland.png" alt="Logo Star_Island" height=100></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul id="navbar_items" class="navbar-nav me-auto">
                <li class="nav-item">
                    <a id="nav-link" href=" <?= GALERIE_PATH; ?> ">Galerie</a>
                </li>
                <li class="nav-item">
                    <a id="nav-link" href=" <?= VIP_PATH; ?> ">Devenir VIP</a>
                </li>
                <li class="nav-item">
                    <a id="nav-link" href=" <?= SERVEUR_PATH; ?> ">Serveur</a>
                </li>
            </ul>
                <div id="nav-lateral-item">
                    <li>
                        <img src="./assets/pack_graphique/img-btn-tutoriels.png" alt="bouton tutoriels" height="25px">
                        <a id="nav_tuto" href="https://docs.google.com/spreadsheets/d/1ca-sSQERai88NWyIMIXPckhgQ3li5AeXv7zzT1ux_I4/edit#gid=582164751" target="_blank">Tutoriels</a>
                    </li>
                    <li>
                        <img src="./assets/pack_graphique/img-btn-event.png" alt="bouton event" height="25px">
                        <a id="nav_event" href=" <?= EVENT_PATH; ?> ">Event</a>
                    </li>
                </div> 
        </div>
    </div>
</nav>


</header>
