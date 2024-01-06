var chairCanvas = document.getElementById('chairCanvas');
        var chairContext = chairCanvas.getContext('2d');
        
        chairContext.fillStyle = 'brown';
        chairContext.fillRect(50, 150, 100, 10);

        chairContext.fillRect(50, 100, 10, 100);

        chairContext.fillRect(50, 200, 10, 40);
        chairContext.fillRect(140, 160, 10, 40);

        
        var tableCanvas = document.getElementById('tableCanvas');
        var tableContext = tableCanvas.getContext('2d');

        tableContext.fillStyle = 'blue';
        tableContext.fillRect(50, 100, 120, 10);
        
        tableContext.fillRect(50, 110, 10, 90);
        tableContext.fillRect(160, 110, 10, 90);

        tableContext.fillRect(50, 150, 120, 10);


        var treeCanvas = document.getElementById('treeCanvas');
        var treeContext = treeCanvas.getContext('2d');

        treeContext.fillStyle = 'brown';
        treeContext.fillRect(80, 120, 40, 80);

        treeContext.fillStyle = 'green';
        treeContext.beginPath();
        treeContext.arc(100, 100, 50, 0, Math.PI, false);
        treeContext.fill();

var houseCanvas = document.getElementById('houseCanvas');
        var houseContext = houseCanvas.getContext('2d');


        houseContext.fillStyle = 'orange';
        houseContext.fillRect(60, 120, 80, 60);

        houseContext.fillStyle = 'red';
        houseContext.beginPath();
        houseContext.moveTo(60, 120);
        houseContext.lineTo(100, 80);
        houseContext.lineTo(140, 120);
        houseContext.closePath();
        houseContext.fill();

        houseContext.fillStyle = 'brown';
        houseContext.fillRect(90, 150, 20, 30);

var flowerCanvas = document.getElementById('flowerCanvas');
        var flowerContext = flowerCanvas.getContext('2d');

        flowerContext.fillStyle = 'green';
        flowerContext.fillRect(90, 110, 20, 60);

        flowerContext.fillStyle = 'pink';
        flowerContext.beginPath();
        flowerContext.arc(100, 100, 20, 0, 2 * Math.PI);
        flowerContext.arc(80, 100, 20, 0, 2 * Math.PI);
        flowerContext.arc(100, 80, 20, 0, 2 * Math.PI);
        flowerContext.arc(120, 100, 20, 0, 2 * Math.PI);
        flowerContext.fill();

var rocketCanvas = document.getElementById('rocketCanvas');
        var rocketContext = rocketCanvas.getContext('2d');

        // Body
        rocketContext.fillStyle = 'red';
        rocketContext.fillRect(80, 70, 40, 100);

        // Cone
        rocketContext.beginPath();
        rocketContext.moveTo(80, 70);
        rocketContext.lineTo(100, 30);
        rocketContext.lineTo(120, 70);
        rocketContext.closePath();
        rocketContext.fill();

        // Flame
        rocketContext.fillStyle = 'orange';
        rocketContext.beginPath();
        rocketContext.moveTo(90, 170);
        rocketContext.lineTo(100, 190);
        rocketContext.lineTo(110, 170);
        rocketContext.closePath();
        rocketContext.fill();

var noodlebowlCanvas = document.getElementById('noodlebowlCanvas');
        var noodleContext = noodlebowlCanvas.getContext('2d');

        noodleContext.fillStyle = 'red';
        noodleContext.beginPath();
        noodleContext.arc(100, 80, 50, 0, Math.PI, false);
        noodleContext.closePath();
        noodleContext.fill();

        noodleContext.fillStyle = 'brown';
        noodleContext.fillRect(80, 80, 40, 40);


        noodleContext.strokeStyle = 'black';
        noodleContext.lineWidth = 2;
        noodleContext.beginPath();
        noodleContext.moveTo(80, 80);
        noodleContext.lineTo(40, 50);
        noodleContext.moveTo(120, 80);
        noodleContext.lineTo(160, 50);
        noodleContext.stroke();

 var bulletCanvas = document.getElementById('bulletCanvas');
        var bulletContext = bulletCanvas.getContext('2d');

        
        bulletContext.fillStyle = 'brown';
        bulletContext.beginPath();
        bulletContext.arc(100, 130, 40, Math.PI, 0, false);
        bulletContext.lineTo(140, 200);
        bulletContext.lineTo(60, 200);
        bulletContext.closePath();
        bulletContext.fill();

        bulletContext.fillStyle = 'saddlebrown';
        bulletContext.fillRect(60, 130, 80, 70);