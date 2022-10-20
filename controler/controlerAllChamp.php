<?php
    include './utils/connectBdd.php';
    include './model/model_allChamp.php';
    include './utils/function.php';
    
    $cards = new Cards(null, null);
    $data = [];

    if(isset($_POST['submit'])) {
        if(isset($_POST['s']) AND !empty($_POST['s'])){
            $cards = new Cards(null, null);
            $recherche = cleanInput($_POST['s']);
            $data = $cards->showByUrl($bdd,$recherche);
            if(empty($data)){
                $message = 'erreur';
            }
        }
    } else {
        $data = $cards->showAllCardsV2($bdd);
    }
    include './view/view_allChamp.php';

?>