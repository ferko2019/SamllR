<?php
$file = $_POST["file"];

$clusterNodes = array("ip1", "ip2", "ip3");

$workingclusters = array("false");

for(i = 0; i < count($clusterNodes); i++){
    array_push($workingclusters,'false');
}

echo $workingclusters;
?>

<html>
    <head>
        <script type="text/javascript">
        </script>
    </head>
</html>