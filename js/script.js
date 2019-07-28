var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) 
            {
        
                let portfolio= JSON.parse(this.responseText);

    //Change the Index of array to change the person
    let person= portfolio.person[0];