/* the bell base jumpscare -krazylife */
var app=new function(){this.name="Moonlight",this.version="2",this.date="2024",this.folder="asset-v1/",this.looptime=3370,this.bpm=142,this.totalframe=162,this.nbpolo=7,this.nbloopbonus=2,this.bonusloopA=!0,this.bonusendloopA=!1,this.recmaxloop=100,this.recminloop=1,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepolotshirt="polo-sprite-tshirt.png",this.spritepicto="game-picto.png",this.colBck="#0090FF",this.col0="#FFFFFF",this.col1="#00D0FF",this.col2="#00D0FF",this.col3="#0090FF",this.col4="#00D0FF",this.animearray=[{name:"1_Slime",color:"004E3C",uniqsnd:!0},{name:"2_Skeleton",color:"25231C",uniqsnd:!0},{name:"3_Blaze",color:"FFF32C",uniqsnd:!1},{name:"4_Golem",color:"BFA189",uniqsnd:!1},{name:"5_Oink",color:"DD9712",uniqsnd:!1},{name:"6_Ender",color:"0E5C4E",uniqsnd:!1},{name:"7_Parrot",color:"CF001A",uniqsnd:!1},{name:"8_DiffSkele",color:"1E4B4B",uniqsnd:!0},{name:"9_Chicken",color:"B3A57C",uniqsnd:!0},{name:"10_Creeper",color:"206A1C",uniqsnd:!1},{name:"11_Pumpkin",color:"C15616",uniqsnd:!1},{name:"12_Breeze",color:"325083",uniqsnd:!1},{name:"13_Lamp",color:"1A1C36",uniqsnd:!1},{name:"14_Villager",color:"048734",uniqsnd:!1},{name:"15_SteamWhistle",color:"5E380C",uniqsnd:!1},{name:"16_Steve",color:"344C7A",uniqsnd:!1}, {name:"17_Alex",color:"246124",uniqsnd:!1},{name:"18_Zomboss",color:"403A00",uniqsnd:!1},{name:"19_TheC R E E K I N G",color:"1E1A18",uniqsnd:!1},{name:"20_Pig",color:"C73868",uniqsnd:!1}],this.bonusarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};