<?php
$data = json_decode(file_get_contents('php://input'));
$json = json_decode(file_get_contents('testTaken.json'));
echo json_encode($json);
?>
