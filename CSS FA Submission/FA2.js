
    function add() {
  var x = document.getElementById("num1").value;
  var y = document.getElementById("num2").value;

        var z = parseInt(x) + parseInt(y);

  document.getElementById("demo").innerHTML = "The sum of " + x + " and " + y + " is " + z + ".";
    }


  function sub() {
  var x = document.getElementById("num1").value;
  var y = document.getElementById("num2").value;

        var z = parseInt(x) - parseInt(y);

  document.getElementById("demo").innerHTML = "The difference of " + x + " and " + y + " is " + z + ".";
  }

  function prod() {
  var x = document.getElementById("num1").value;
  var y = document.getElementById("num2").value;

        var z = parseInt(x) * parseInt(y);

  document.getElementById("demo").innerHTML = "The product of " + x + " and " + y + " is " + z + ".";
    }

    function quo() {
  var x = document.getElementById("num1").value;
  var y = document.getElementById("num2").value;

        var z = parseInt(x) / parseInt(y);

  document.getElementById("demo").innerHTML = "The quotient of " + x + " and " + y + " is " + z + ".";
    }

    function rem() {
  var x = document.getElementById("num1").value;
  var y = document.getElementById("num2").value;

        var z = parseInt(x) % parseInt(y);

  document.getElementById("demo").innerHTML = "The remainder of " + x + " and " + y + " is " + z + ".";
    }
