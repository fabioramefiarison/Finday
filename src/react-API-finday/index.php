<?php

   header("Access-Control-Allow-Origin: *");

   $con = new mysqli("localhost", "root", "", "finday");
   $email = $_POST["email"];

   if (!$con) {
      die("erreur de connexion ! " . mysqli_connect_error());
   }
   else {
      $sql = "INSERT INTO utilisateurs (id, email) VALUES (NULL, '$email');";

      if (mysqli_query($con, $sql)) {
         echo "succès !";
      }
      else {
         echo "erreur";
      }
   }
   mysqli_close($con);
   
/*RewriteEngine On

#Handle Front Controller...
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-Front
RewriteRule ^ index.php [L]
*/
?>
