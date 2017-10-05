<?php
$data = json_decode(file_get_contents('php://input'));
$json = json_decode(file_get_contents('sampleQuestions.json'));
echo json_encode($json);
?>
