<?php
$string = $_POST['First'];//connects to the post form
$string_lower = strtolower($string); //This is so it gets lower caps                   
$assoc_array = array( "a"=>".-","b"=>"-...", "c"=>"-.-.", "d"=>"-..",  "e"=>".", "f"=>"..-.", "g"=>"--.", "h"=>"....", "i"=>"..", "j"=>".---", "k"=>"-.-", "l"=>".-..", "m"=>"--", "n"=>"-.", "o"=>"---", "p"=>".--.", "q"=>"--.-", "r"=>".-.", "s"=>"...", "t"=>"-", "u"=>"..-", "v"=>"...-", "w"=>".--", "x"=>"-..-", "y"=>"-.--", "z"=>"--..", "0"=>"-----","1"=>".----", "2"=>"..---", "3"=>"...--", "4"=>"....-", "5"=>".....", "6"=>"-....", "7"=>"--...", "8"=>"---..", "9"=>"----.","."=>".-.-.-",","=>"--..--","?"=>"..--..","/"=>"-..-."," "=>" ");
			
for($i=0;$i<strlen($string_lower);$i++){          //loops throught array 
  foreach($assoc_array as $key => $value){        //array gets put in $key and is greater then $value
    if($key === $string_lower[$i]){               // changed == to '===' s it doesnt end up false === false if it looped throught the array if $key equals index of string_lower(array) it will echo code the morse code 

$morsecode = "$value ";   //$value gets into $morsecode
 echo "$morsecode";
  file_put_contents("encoded.txt", "$morsecode", FILE_APPEND);  // makes file with value
 break;                                                         //break is the easy solution to fix the value ending with value '0'; 
            }
        }
    }
?>