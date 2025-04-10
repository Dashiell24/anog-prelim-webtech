<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fuel</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
     <?php 
        $fuel = 0;
        $distanceperfuel = 10 / 7;
        $distance = $fuel * $distanceperfuel;
        
    echo "<h3>ATTENTION!!!!</h3>";
    if ($distance >= 250) {
            echo '<div class="complete">Mission Complete! &#128512</div>';
        } else {
            echo '<div class="needfuel">Need more fuel! &#128563</div>';
        }
        ?>
</body>
</html>
