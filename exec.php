<?php
//echo getcwd();
$result = exec('python test.py');
//$errors = shell_exec('python test.py 2>&1')
echo $result;
//echo $errors;
?>
