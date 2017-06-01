var friends = ["Bob", "Linda", "Gene", "Tina", "Louise"]

var button = document.getElementById('btn');

var para = document.createElement('p');



button.addEventListener('click', function () {
    for (var i = 0; i < friends.length; i++) {
        var div = document.createElement('div');
        div.className = 'friend';
        var header = document.createElement('h3');
        var text = document.createTextNode(friends[i]);
        header.appendChild(text);
        div.appendChild(header);
        document.body.appendChild(div);     

        for (var j = 99; j > 0; j--) {
            if (j > 2) { 
                var para = document.createElement('p')
                var text = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
                
            } else if (j === 2) {   
                var para = document.createElement('p')
                var text = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file");
                 
            } else { 
                var para = document.createElement('p')
                var text = document.createTextNode("1 line of code in the file, 1 line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
         
            }
            para.appendChild(text)
                document.body.appendChild(para);
        }
    }
});

   
