class Game
{
    constructor()
    {

    }



    update(state)
    {
      database.ref("/").update({"gameState": state})
    }

    getState()
    {
      var dbref = database.ref("gameState")
      dbref.on("value",(data) =>
      {
         gameState = data.val()
      })
    }
   
   startGame()
   {
     if(gameState === 0)
     {
         form = new Form()
         player = new Player()
         form.display()
         player.getCount()
    

       
       track = createSprite(width/2,height/2,width,height)
       track.addImage(track_image)
       track.scale = 7
       player1 = createSprite(50,height/4)
       player1.addImage("player",player1_image)
       player1.scale = 0.3
       player2 = createSprite(50,height/2)
       player2.addImage(player2_image)
       player2.scale = 0.3

       players = [player1,player2]


       
      }
   }
   
   play()
   {

      form.hide()
     
      Player.getPlayerInfo()

      background("white")

      if(allPlayers != undefined)
      {
        var x = 50
        var y = height/4
        var index = 0

      for(var plr in allPlayers)
      {
        x = allPlayers[plr].x
        players[index].x = x
        y = allPlayers[plr].y 
        players[index].y = y

        if(index + 1 === player.index)
        {
          camera.position.x = players[index].x
          camera.position.y = players[index].y
        }

        index = index + 1
      }

      

      if(keyIsDown(RIGHT_ARROW) && player.index !== null)
       {
        console.log("RWorking") 
         player.x -= 10
         player.update()
       }

       if(keyIsDown(UP_ARROW) && player.index != null)
       {
        console.log("uWorking") 
         player.y += 10
         player.update()
       }

       if(keyIsDown(DOWN_ARROW) && player.index != null)
       {
        console.log("dWorking") 
         player.y -= 10
         player.update()
       }

      drawSprites()
      }

   }
    
}


                                               