
        let Apple = function(weight){
            this.weight = weight;
            this.decrease = function(){
                if (this.weight >0){
                    this.weight = this.weight - 1;
                }    
                else {alert("The apple is empty");
                }
            }   
        };
        let Human = function(name, gender, weight){
            this.name = name;
            this.gender = gender;
            this.weight = weight;
            this.eatApple = function(Apple){
                Apple.decrease();
                if (Apple.weight>0)
                    this.weight +=1 ;
                document.getElementById(this.name + "weight").innerHTML = this.weight + "kg";
                document.getElementById("appleweight").innerHTML = Apple.weight;
            }
            this.say = function(){
                let string = prompt(this.name + " say");
                document.getElementById("conversation").innerHTML += this.name +": "+ string +"<br>";
            }
            this.getGender = function(){
                return this.genger
            }
        };
        let apple = new Apple(10);
        //document.write(apple.weight);
        //apple.decrease();
        //document.write(apple.weight);
        let adam = new Human("adam", "male", 70);
        //adam.say("dgfdgdf");
        //document.write(adam.weight);
        //document.write(apple.weight);
        let eva = new Human("eva","female",55);
        //document.getElementById("adamweight").innerHTML = adam.weight + "kg";
        document.getElementById("adamgender").innerHTML = adam.getGender();
     