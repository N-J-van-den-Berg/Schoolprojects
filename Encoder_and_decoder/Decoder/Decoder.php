<?php
$shit = $_POST['input']; //contects to decoder form
$associatife_array = [".-"=>"a", "-..."=>"b","-.-."=>"c","-.."=>"d","."=>"e","..-."=>"f","--."=>"g","...."=>"h",".."=>"i",".---"=>"j","-.-"=>"k",".-.."=>"l","--"=>"m","-."=>"n", "---"=>"o",".--."=>"p","--.-"=>"q",".-."=>"r","..."=>"s","-"=>"t","..-"=>"u","....-"=>"v",".--"=>"w","-..-"=>"x","-.--"=>"y","--.."=>"z",".----"=>"1","..---"=>"2","...--"=>"3","....-"=>"4","....."=>"5","-...."=>"6","--..."=>"7","---.."=>"8","----."=>"9","----"=>"0"];

file_put_contents("decoded.txt", $shit);                //create's file if doesn't excist
  $get_file = file_get_contents("decoded.txt");         //Get's file
    $length = strlen($get_file);                        //Get's Length of string
    
$string_into_array = explode(" ", $get_file);           //converting a string into array
  foreach($string_into_array as $Value){                //the loop puts everything of array into $Value
    if(array_key_exists($Value, $associatife_array)){   //check if the $Value matches any key from our array
      $value = $associatife_array[$Value];              //The key $Value gets in the variable $value
       echo("$value");
        }
    }   
?>           
