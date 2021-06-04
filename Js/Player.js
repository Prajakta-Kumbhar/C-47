class Player
{
    constructor()
    {
      this.index = null
      this.x = 50
      this.y = 0
      this.rank = 0
      this.name = ""
    }
    
    getCount()
    {
      var dbref = database.ref("playerCount")
      dbref.on("value",  (data) =>
      {
        playerCount = data.val()
      })
    }

    updateCount(count)
    {
        database.ref("/").update({"playerCount": count})

    }

    update()
    {
      var playerIndex = "Players/player" + this.index;
      database.ref(playerIndex).set({"name": this.name,
                                      "x": this.x,
                                      "y": this.y,
                                      "rank": this.rank})
    }

    static getPlayerInfo()
    {
      var dbref = database.ref("Players")
      dbref.on("value", (data) =>
      {
         allPlayers = data.val()
      })

    }
}