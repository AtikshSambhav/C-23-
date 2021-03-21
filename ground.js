 class Ground{
   
    constructor(){
       //Creating option in JSON format (JAVA SCRIPT OBJECT NOTATION.)
        var options={
            isStatic:true
        }

        this.body=Bodies.rectangle(200,380,400,20,options);
        this.width=400;
        this.height=20;
        World.add(myWorld,this.body);
    }

    display(){
         
        var pos=this.body.position;
        push();
        rectMode(CENTER)
        fill("brown")
        rect(pos.x,pos.y,this.width,this.height)
        pop();

    }



 }  