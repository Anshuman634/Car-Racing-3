class Player{
    constructor()
    {

        this.name=null;
        this.distance=0;
        this.index=null;
        this.rank=0;
      
   
    }
    
    getCount()
    {
        var count=database.ref('playerCount');
        count.on("value",function(data)
        {
            pcount=data.val();
        })
    }

    updateCount(ccount){
        database.ref('/').update(
        {
            playerCount:ccount

        })
       
    }
    update()
    {
        var playerIndex="Players/Player"+this.index;
        database.ref(playerIndex).set({name:this.name,distance:this.distance,Rank:this.rank});


    }
    static getPlayerInfo()
    {
       var playerinfo=database.ref('Players');
       playerinfo.on("value",(data)=>
       {
           allPlayers=data.val();
       } );
    }

}