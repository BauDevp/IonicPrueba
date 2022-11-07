<?php
include "config.php";
$inout = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
  listado;
  $cantidad = $data['cantidad'];
  $conceptoRetiro= $data['conceptoRetiro'];
  $tipoRetiro = $data['tipoRetiro'];