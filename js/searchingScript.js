var personalityIndex;

    function searchPersonality()
    {
         

          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) 
            {
                let personalityName= document.getElementById("personality").value;
        
                let portfolio= JSON.parse(this.responseText);

                //Change the Index of array to change the person
                let personArray= portfolio.person.length;

                for(let x=0; x<personArray; x++)
                {
                    if(portfolio.person[x].introduction.name == personalityName)
                    {
                        personalityIndex= x;
                        var url= "mainPortfolio.html" +"?value=" +personalityIndex;
                        
                        window.location.href = url;
                    }
                    else
                    {
                        vall= -1;
                    }
                    
                }
                if(vall== -1)
                {
                    document.getElementById("notFound").style.display= "block";
                }

               
            }
          };

          xhttp.open("GET", "portfolioData.json", true);
          xhttp.send();
        }