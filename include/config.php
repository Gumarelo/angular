<?php 
$host = '10.1.1.165';
$port = '5432';
$database = 'marcacion';
$user = 'postgres';
$password = 'postgres';

$connectString = 'host=' . $host . ' port=' . $port . ' dbname=' . $database . 
	' user=' . $user . ' password=' . $password;


$conn = pg_connect ($connectString);
if (!$conn)
{
	die('Error: Could not connect: ' . pg_last_error());
	echo "An error occurred.\n";
	exit;
}
?>
