# FirstJS_Project

<!DOCTYPE html>
<html>

<head>
    <title>Document</title>
    <style>
        .abzac {
            border: 1px solid black;
            width: 100px;
            color: black;
            background-color: yellow;
            font-size: 25px;
            text-align: center;
        }
    </style>
</head>

<body>
    <form action="#"><input id="input"><button onclick="out()">add</button>
        <div id="out"></div>
    </form>
    <script>
        function out() {
            let value = document.getElementById('input').value
            let container = document.createElement('p');
            container.className = "abzac";
            container.innerHTML = value;
            document.getElementById('out').append(container)
            document.getElementById('input').value = '';
        }


        let matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        console.log(matrix[0][2]);
        console.log(matrix[2][0]);
        for (let k = 1; k < matrix.length - 1; k++) {
            let arr = matrix[k].join(',')
            console.log(arr)
        }
        for (let a = 1; a < matrix.length - 1; a++) {
            console.log(...matrix[a])
        }
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i][0])
        }


    </script>
</body>

</html>
