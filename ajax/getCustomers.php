<?php
include('../include/config.php');

$query="select u.nombre,m.fecha,m.hora,m.tipocad from marcacion m join usuario u on m.usuario_id=u.id";
//$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
$result = pg_query($conn, $query);

if (!$result) {
  echo "An error occurred.\n";
  exit;
}

$arr = array();
if(pg_num_rows($result) > 0) {
	while($row = pg_fetch_assoc($result)) {
		$arr[] = $row;	
	}
}
# JSON-encode the response
$json_response = json_encode($arr);

// # Return the response
echo $json_response;
?>
