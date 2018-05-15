// Initialize Phaser, and create a 400x490px game
var game = new Phaser.Game(320, 480, Phaser.AUTO, 'majiang');

    
var nowpx;

var nextpx;

var index;
var npointer = 99;

var uniqueRandoms = [];
var FuniqueRandoms = [];

var kblist = [0,0,0,0,0,0,0,0,0];

var answer1 = [];
var answer2 = [];
var answer3 = [];
var answer4 = [];
var answer5 = [];
var answer6 = [];
var answer7 = [];
var answer8 = [];

var pLife = 3;
var fen = 0;
var shijian = 0; 

// Create our 'main' state that will contain the game
var State1 = function(game) {  };
    
State1.prototype = {
    
    preload: function() { 
        // This function will be executed at the beginning     
        // That's where we load the game's assets  
        
        // Change the background color of the game
        game.stage.backgroundColor = '#000';
        
    },

    create: function() { 
        
                
        // This function is called after the preload function     
        // Here we set up the game, display sprites, etc.
        
        this.background = this.add.tileSprite(0,0, this.world.width, this.world.height, 'background');
        
        this.shitext = this.game.add.sprite(15, 10, 'shitext');
        this.mingtext = this.game.add.sprite(165, 10, 'mingtext'); 
        this.heart1 = this.game.add.sprite(0, 0, 'heart'); 
        this.heart2 = this.game.add.sprite(30, 0, 'heart'); 
        this.heart3 = this.game.add.sprite(60, 0, 'heart'); 
        
        this.heartG = this.game.add.group();
        this.heartG.add(this.heart1);
        this.heartG.add(this.heart2);
        this.heartG.add(this.heart3);
        
        this.heartG.x = 210;
        this.heartG.y = 16;
     
        this.panel1 = this.game.add.sprite(0, 0, 'panel');
        
        this.bwan1 = this.game.add.button(30, 120, 'yiwan1', this.startClick, this);
        this.bwan1.anchor.setTo(0.5, 0.5);
        this.bwan1.scale.x = 0.66;
        this.bwan1.scale.y = 0.66;
        this.bwan2 = this.game.add.button(62, 120, 'yiwan2', this.startClick, this);
        this.bwan2.anchor.setTo(0.5, 0.5);
        this.bwan2.scale.x = 0.66;
        this.bwan2.scale.y = 0.66;
        this.bwan3 = this.game.add.button(94, 120, 'yiwan3', this.startClick, this);
        this.bwan3.anchor.setTo(0.5, 0.5);
        this.bwan3.scale.x = 0.66;
        this.bwan3.scale.y = 0.66;
        this.bwan4 = this.game.add.button(126, 120, 'yiwan4', this.startClick, this);
        this.bwan4.anchor.setTo(0.5, 0.5);
        this.bwan4.scale.x = 0.66;
        this.bwan4.scale.y = 0.66;
        this.bwan5 = this.game.add.button(158, 120, 'yiwan5', this.startClick, this);
        this.bwan5.anchor.setTo(0.5, 0.5);
        this.bwan5.scale.x = 0.66;
        this.bwan5.scale.y = 0.66;
        this.bwan6 = this.game.add.button(190, 120, 'yiwan6', this.startClick, this);
        this.bwan6.anchor.setTo(0.5, 0.5);
        this.bwan6.scale.x = 0.66;
        this.bwan6.scale.y = 0.66;
        this.bwan7 = this.game.add.button(222, 120, 'yiwan7', this.startClick, this);
        this.bwan7.anchor.setTo(0.5, 0.5);
        this.bwan7.scale.x = 0.66;
        this.bwan7.scale.y = 0.66;
        this.bwan8 = this.game.add.button(254, 120, 'yiwan8', this.startClick, this);
        this.bwan8.anchor.setTo(0.5, 0.5);
        this.bwan8.scale.x = 0.66;
        this.bwan8.scale.y = 0.66;
        this.bwan9 = this.game.add.button(286, 120, 'yiwan9', this.startClick, this);
        this.bwan9.anchor.setTo(0.5, 0.5);
        this.bwan9.scale.x = 0.66;
        this.bwan9.scale.y = 0.66;
        

/*        this.background.autoScroll(-200, 0);*/
        
/*      paixing 1               default                                                               */       
        
        this.paiG01 = this.game.add.sprite(0, 0, 'yiwan2');
        this.paiG02 = this.game.add.sprite(44, 0, 'yiwan2');
        this.paiG03 = this.game.add.sprite(88, 0, 'yiwan2');
        this.paiG04 = this.game.add.sprite(132, 0, 'yiwan3');
        this.paiG05 = this.game.add.sprite(176, 0, 'yiwan3');
        this.paiG06 = this.game.add.sprite(220, 0, 'yiwan3');
        this.paiG07 = this.game.add.sprite(0, 70, 'yiwan4');
        this.paiG08 = this.game.add.sprite(44, 70, 'yiwan4');
        this.paiG09 = this.game.add.sprite(88, 70, 'yiwan4');
        this.paiG010 = this.game.add.sprite(132, 70, 'yiwan5');
        this.paiG011 = this.game.add.sprite(176, 70, 'yiwan6');
        this.paiG012 = this.game.add.sprite(220, 70, 'yiwan7');
        this.paiG013 = this.game.add.sprite(0, 140, 'yiwan9');  
        
        /** STEP 1 **/
        // create a group to put the title assets in 
        // so they can be manipulated as a whole
        this.paiG1 = this.game.add.group();

        /** STEP 2 **/
        // create the title sprite
        // and add it to the group
        this.paiG1.add(this.paiG01);
        this.paiG1.add(this.paiG02);
        this.paiG1.add(this.paiG03);
        this.paiG1.add(this.paiG04);
        this.paiG1.add(this.paiG05);
        this.paiG1.add(this.paiG06);
        this.paiG1.add(this.paiG07);
        this.paiG1.add(this.paiG08);
        this.paiG1.add(this.paiG09);
        this.paiG1.add(this.paiG010);
        this.paiG1.add(this.paiG011);
        this.paiG1.add(this.paiG012);
        this.paiG1.add(this.paiG013);



        /** STEP 5 **/
        // Set the originating location of the group
        this.paiG1.x = 30;
        this.paiG1.y = 60;
        
        answer1 = [0,0,0,0,0,0,0,0,1];
        
        nowpx = this.paiG1;

        
      
/*      paixing 2       ss   7dong   mix       7lianpai + ??                                                           */       
        
        this.paiG11 = this.game.add.sprite(0, 0, 'yiwan1');
        this.paiG12 = this.game.add.sprite(44, 0, 'yiwan2');
        this.paiG13 = this.game.add.sprite(88, 0, 'yiwan3');
        this.paiG14 = this.game.add.sprite(132, 0, 'yiwan4');
        this.paiG15 = this.game.add.sprite(176, 0, 'yiwan5');
        this.paiG16 = this.game.add.sprite(220, 0, 'yiwan6');
        this.paiG17 = this.game.add.sprite(0, 70, 'yiwan6');
        this.paiG18 = this.game.add.sprite(44, 70, 'yiwan6');
        this.paiG19 = this.game.add.sprite(88, 70, 'yiwan6');
        this.paiG110 = this.game.add.sprite(132, 70, 'yiwan7');
        this.paiG111 = this.game.add.sprite(176, 70, 'yiwan8');
        this.paiG112 = this.game.add.sprite(220, 70, 'yiwan8');
        this.paiG113 = this.game.add.sprite(0, 140, 'yiwan8');  
        
        

        this.paiG2 = this.game.add.group();


        this.paiG2.add(this.paiG11);
        this.paiG2.add(this.paiG12);
        this.paiG2.add(this.paiG13);
        this.paiG2.add(this.paiG14);
        this.paiG2.add(this.paiG15);
        this.paiG2.add(this.paiG16);
        this.paiG2.add(this.paiG17);
        this.paiG2.add(this.paiG18);
        this.paiG2.add(this.paiG19);
        this.paiG2.add(this.paiG110);
        this.paiG2.add(this.paiG111);
        this.paiG2.add(this.paiG112);
        this.paiG2.add(this.paiG113);


        this.paiG2.x = -330;
        this.paiG2.y = 60;

        answer2 = [1,0,1,1,1,0,1,1,1];
        
        
/*      paixing 3         b  4dong  331 or 133                                                               */       
        
        this.paiG31 = this.game.add.sprite(0, 0, 'yiwan2');
        this.paiG32 = this.game.add.sprite(44, 0, 'yiwan3');
        this.paiG33 = this.game.add.sprite(88, 0, 'yiwan3');
        this.paiG34 = this.game.add.sprite(132, 0, 'yiwan3');
        this.paiG35 = this.game.add.sprite(176, 0, 'yiwan4');
        this.paiG36 = this.game.add.sprite(220, 0, 'yiwan4');
        this.paiG37 = this.game.add.sprite(0, 70, 'yiwan4');
        this.paiG38 = this.game.add.sprite(44, 70, 'yiwan6');
        this.paiG39 = this.game.add.sprite(88, 70, 'yiwan6');
        this.paiG310 = this.game.add.sprite(132, 70, 'yiwan7');
        this.paiG311 = this.game.add.sprite(176, 70, 'yiwan7');
        this.paiG312 = this.game.add.sprite(220, 70, 'yiwan8');
        this.paiG313 = this.game.add.sprite(0, 140, 'yiwan8');  
        
        

        this.paiG3 = this.game.add.group();


        this.paiG3.add(this.paiG31);
        this.paiG3.add(this.paiG32);
        this.paiG3.add(this.paiG33);
        this.paiG3.add(this.paiG34);
        this.paiG3.add(this.paiG35);
        this.paiG3.add(this.paiG36);
        this.paiG3.add(this.paiG37);
        this.paiG3.add(this.paiG38);
        this.paiG3.add(this.paiG39);
        this.paiG3.add(this.paiG310);
        this.paiG3.add(this.paiG311);
        this.paiG3.add(this.paiG312);
        this.paiG3.add(this.paiG313);


        this.paiG3.x = -330;
        this.paiG3.y = 60;
        
        answer3 = [1,1,1,1,0,0,0,0,0];
        
        
/*      paixing 4             b  4dong  331 or 133                          */       
        
        this.paiG41 = this.game.add.sprite(0, 0, 'yiwan3');
        this.paiG42 = this.game.add.sprite(44, 0, 'yiwan3');
        this.paiG43 = this.game.add.sprite(88, 0, 'yiwan3');
        this.paiG44 = this.game.add.sprite(132, 0, 'yiwan4');
        this.paiG45 = this.game.add.sprite(176, 0, 'yiwan4');
        this.paiG46 = this.game.add.sprite(220, 0, 'yiwan4');
        this.paiG47 = this.game.add.sprite(0, 70, 'yiwan5');
        this.paiG48 = this.game.add.sprite(44, 70, 'yiwan7');
        this.paiG49 = this.game.add.sprite(88, 70, 'yiwan7');
        this.paiG410 = this.game.add.sprite(132, 70, 'yiwan8');
        this.paiG411 = this.game.add.sprite(176, 70, 'yiwan8');
        this.paiG412 = this.game.add.sprite(220, 70, 'yiwan9');
        this.paiG413 = this.game.add.sprite(0, 140, 'yiwan9');  
        
        

        this.paiG4 = this.game.add.group();


        this.paiG4.add(this.paiG41);
        this.paiG4.add(this.paiG42);
        this.paiG4.add(this.paiG43);
        this.paiG4.add(this.paiG44);
        this.paiG4.add(this.paiG45);
        this.paiG4.add(this.paiG46);
        this.paiG4.add(this.paiG47);
        this.paiG4.add(this.paiG48);
        this.paiG4.add(this.paiG49);
        this.paiG4.add(this.paiG410);
        this.paiG4.add(this.paiG411);
        this.paiG4.add(this.paiG412);
        this.paiG4.add(this.paiG413);


        this.paiG4.x = -330;
        this.paiG4.y = 60;
        
        answer4 = [0,0,1,1,1,1,0,0,0];
        
/*      paixing 5            a  4dong  3211 or 1123                  */       
        
        this.paiG51 = this.game.add.sprite(0, 0, 'yiwan1');
        this.paiG52 = this.game.add.sprite(44, 0, 'yiwan1');
        this.paiG53 = this.game.add.sprite(88, 0, 'yiwan1');
        this.paiG54 = this.game.add.sprite(132, 0, 'yiwan4');
        this.paiG55 = this.game.add.sprite(176, 0, 'yiwan4');
        this.paiG56 = this.game.add.sprite(220, 0, 'yiwan4');
        this.paiG57 = this.game.add.sprite(0, 70, 'yiwan5');
        this.paiG58 = this.game.add.sprite(44, 70, 'yiwan5');
        this.paiG59 = this.game.add.sprite(88, 70, 'yiwan6');
        this.paiG510 = this.game.add.sprite(132, 70, 'yiwan7');
        this.paiG511 = this.game.add.sprite(176, 70, 'yiwan7');
        this.paiG512 = this.game.add.sprite(220, 70, 'yiwan8');
        this.paiG513 = this.game.add.sprite(0, 140, 'yiwan9');  
        
        

        this.paiG5 = this.game.add.group();


        this.paiG5.add(this.paiG51);
        this.paiG5.add(this.paiG52);
        this.paiG5.add(this.paiG53);
        this.paiG5.add(this.paiG54);
        this.paiG5.add(this.paiG55);
        this.paiG5.add(this.paiG56);
        this.paiG5.add(this.paiG57);
        this.paiG5.add(this.paiG58);
        this.paiG5.add(this.paiG59);
        this.paiG5.add(this.paiG510);
        this.paiG5.add(this.paiG511);
        this.paiG5.add(this.paiG512);
        this.paiG5.add(this.paiG513);


        this.paiG5.x = -330;
        this.paiG5.y = 60;
        
        answer5 = [0,0,1,0,1,1,0,1,0];
        
/*      paixing 6         a  4dong  13111 or 11131                     */       
        
        this.paiG61 = this.game.add.sprite(0, 0, 'yiwan1');
        this.paiG62 = this.game.add.sprite(44, 0, 'yiwan1');
        this.paiG63 = this.game.add.sprite(88, 0, 'yiwan1');
        this.paiG64 = this.game.add.sprite(132, 0, 'yiwan3');
        this.paiG65 = this.game.add.sprite(176, 0, 'yiwan4');
        this.paiG66 = this.game.add.sprite(220, 0, 'yiwan4');
        this.paiG67 = this.game.add.sprite(0, 70, 'yiwan4');
        this.paiG68 = this.game.add.sprite(44, 70, 'yiwan5');
        this.paiG69 = this.game.add.sprite(88, 70, 'yiwan6');
        this.paiG610 = this.game.add.sprite(132, 70, 'yiwan7');
        this.paiG611 = this.game.add.sprite(176, 70, 'yiwan7');
        this.paiG612 = this.game.add.sprite(220, 70, 'yiwan7');
        this.paiG613 = this.game.add.sprite(0, 140, 'yiwan7');  
        
        

        this.paiG6 = this.game.add.group();


        this.paiG6.add(this.paiG61);
        this.paiG6.add(this.paiG62);
        this.paiG6.add(this.paiG63);
        this.paiG6.add(this.paiG64);
        this.paiG6.add(this.paiG65);
        this.paiG6.add(this.paiG66);
        this.paiG6.add(this.paiG67);
        this.paiG6.add(this.paiG68);
        this.paiG6.add(this.paiG69);
        this.paiG6.add(this.paiG610);
        this.paiG6.add(this.paiG611);
        this.paiG6.add(this.paiG612);
        this.paiG6.add(this.paiG613);


        this.paiG6.x = -330;
        this.paiG6.y = 60;
        
        answer6 = [0,1,1,0,1,0,0,1,0];
        
/*      paixing 7      a  4dong  322 or 223                */       
        
        this.paiG71 = this.game.add.sprite(0, 0, 'yiwan1');
        this.paiG72 = this.game.add.sprite(44, 0, 'yiwan1');
        this.paiG73 = this.game.add.sprite(88, 0, 'yiwan2');
        this.paiG74 = this.game.add.sprite(132, 0, 'yiwan2');
        this.paiG75 = this.game.add.sprite(176, 0, 'yiwan3');
        this.paiG76 = this.game.add.sprite(220, 0, 'yiwan3');
        this.paiG77 = this.game.add.sprite(0, 70, 'yiwan4');
        this.paiG78 = this.game.add.sprite(44, 70, 'yiwan4');
        this.paiG79 = this.game.add.sprite(88, 70, 'yiwan4');
        this.paiG710 = this.game.add.sprite(132, 70, 'yiwan5');
        this.paiG711 = this.game.add.sprite(176, 70, 'yiwan5');
        this.paiG712 = this.game.add.sprite(220, 70, 'yiwan6');
        this.paiG713 = this.game.add.sprite(0, 140, 'yiwan6');
        
        this.paiG7 = this.game.add.group();

        this.paiG7.add(this.paiG71);
        this.paiG7.add(this.paiG72);
        this.paiG7.add(this.paiG73);
        this.paiG7.add(this.paiG74);
        this.paiG7.add(this.paiG75);
        this.paiG7.add(this.paiG76);
        this.paiG7.add(this.paiG77);
        this.paiG7.add(this.paiG78);
        this.paiG7.add(this.paiG79);
        this.paiG7.add(this.paiG710);
        this.paiG7.add(this.paiG711);
        this.paiG7.add(this.paiG712);
        this.paiG7.add(this.paiG713);
        
        this.paiG7.x = -330;
        this.paiG7.y = 60;
        
        answer7 = [0,0,0,1,1,1,1,0,0];
        
/*      paixing 8    s  5dong  31111 or 11113           */       
        
        this.paiG81 = this.game.add.sprite(0, 0, 'yiwan1');
        this.paiG82 = this.game.add.sprite(44, 0, 'yiwan1');
        this.paiG83 = this.game.add.sprite(88, 0, 'yiwan2');
        this.paiG84 = this.game.add.sprite(132, 0, 'yiwan2');
        this.paiG85 = this.game.add.sprite(176, 0, 'yiwan3');
        this.paiG86 = this.game.add.sprite(220, 0, 'yiwan3');
        this.paiG87 = this.game.add.sprite(0, 70, 'yiwan4');
        this.paiG88 = this.game.add.sprite(44, 70, 'yiwan4');
        this.paiG89 = this.game.add.sprite(88, 70, 'yiwan4');
        this.paiG810 = this.game.add.sprite(132, 70, 'yiwan5');
        this.paiG811 = this.game.add.sprite(176, 70, 'yiwan6');
        this.paiG812 = this.game.add.sprite(220, 70, 'yiwan7');
        this.paiG813 = this.game.add.sprite(0, 140, 'yiwan8');
        
        this.paiG8 = this.game.add.group();

        this.paiG8.add(this.paiG81);
        this.paiG8.add(this.paiG82);
        this.paiG8.add(this.paiG83);
        this.paiG8.add(this.paiG84);
        this.paiG8.add(this.paiG85);
        this.paiG8.add(this.paiG86);
        this.paiG8.add(this.paiG87);
        this.paiG8.add(this.paiG88);
        this.paiG8.add(this.paiG89);
        this.paiG8.add(this.paiG810);
        this.paiG8.add(this.paiG811);
        this.paiG8.add(this.paiG812);
        this.paiG8.add(this.paiG813);
        
        this.paiG8.x = -330;
        this.paiG8.y = 60;
        
        answer8 = [0,0,1,0,1,1,0,1,1];
        
/*      paixing 9     c   unconect    1 dong    */       
        
        this.paiG91 = this.game.add.sprite(0, 0, 'yiwan1');
        this.paiG92 = this.game.add.sprite(44, 0, 'yiwan1');
        this.paiG93 = this.game.add.sprite(88, 0, 'yiwan1');
        this.paiG94 = this.game.add.sprite(132, 0, 'yiwan1');
        this.paiG95 = this.game.add.sprite(176, 0, 'yiwan2');
        this.paiG96 = this.game.add.sprite(220, 0, 'yiwan2');
        this.paiG97 = this.game.add.sprite(0, 70, 'yiwan3');
        this.paiG98 = this.game.add.sprite(44, 70, 'yiwan4');
        this.paiG99 = this.game.add.sprite(88, 70, 'yiwan5');
        this.paiG910 = this.game.add.sprite(132, 70, 'yiwan6');
        this.paiG911 = this.game.add.sprite(176, 70, 'yiwan7');
        this.paiG912 = this.game.add.sprite(220, 70, 'yiwan8');
        this.paiG913 = this.game.add.sprite(0, 140, 'yiwan9');
        
        this.paiG9 = this.game.add.group();

        this.paiG9.add(this.paiG91);
        this.paiG9.add(this.paiG92);
        this.paiG9.add(this.paiG93);
        this.paiG9.add(this.paiG94);
        this.paiG9.add(this.paiG95);
        this.paiG9.add(this.paiG96);
        this.paiG9.add(this.paiG97);
        this.paiG9.add(this.paiG98);
        this.paiG9.add(this.paiG99);
        this.paiG9.add(this.paiG910);
        this.paiG9.add(this.paiG911);
        this.paiG9.add(this.paiG912);
        this.paiG9.add(this.paiG913);
        
        this.paiG9.x = -330;
        this.paiG9.y = 60;
        
        answer9 = [0,1,0,0,0,0,0,0,0];
        
/*      paixing 10     ss mix   4 dong      */       
        
        this.paiG1001 = this.game.add.sprite(0, 0, 'yiwan1');
        this.paiG1002 = this.game.add.sprite(44, 0, 'yiwan1');
        this.paiG1003 = this.game.add.sprite(88, 0, 'yiwan2');
        this.paiG1004 = this.game.add.sprite(132, 0, 'yiwan2');
        this.paiG1005 = this.game.add.sprite(176, 0, 'yiwan3');
        this.paiG1006 = this.game.add.sprite(220, 0, 'yiwan3');
        this.paiG1007 = this.game.add.sprite(0, 70, 'yiwan4');
        this.paiG1008 = this.game.add.sprite(44, 70, 'yiwan4');
        this.paiG1009 = this.game.add.sprite(88, 70, 'yiwan5');
        this.paiG1010 = this.game.add.sprite(132, 70, 'yiwan5');
        this.paiG1011 = this.game.add.sprite(176, 70, 'yiwan5');
        this.paiG1012 = this.game.add.sprite(220, 70, 'yiwan6');
        this.paiG1013 = this.game.add.sprite(0, 140, 'yiwan6');
        
        this.paiG10 = this.game.add.group();

        this.paiG10.add(this.paiG1001);
        this.paiG10.add(this.paiG1002);
        this.paiG10.add(this.paiG1003);
        this.paiG10.add(this.paiG1004);
        this.paiG10.add(this.paiG1005);
        this.paiG10.add(this.paiG1006);
        this.paiG10.add(this.paiG1007);
        this.paiG10.add(this.paiG1008);
        this.paiG10.add(this.paiG1009);
        this.paiG10.add(this.paiG1010);
        this.paiG10.add(this.paiG1011);
        this.paiG10.add(this.paiG1012);
        this.paiG10.add(this.paiG1013);
        
        this.paiG10.x = -330;
        this.paiG10.y = 60;
        
        answer10 = [1,0,0,1,1,1,0,0,0];
        
/*      paixing 11   c-  1 dong           */       
        
        this.paiG1101 = this.game.add.sprite(0, 0, 'yiwan2');
        this.paiG1102 = this.game.add.sprite(44, 0, 'yiwan2');
        this.paiG1103 = this.game.add.sprite(88, 0, 'yiwan2');
        this.paiG1104 = this.game.add.sprite(132, 0, 'yiwan4');
        this.paiG1105 = this.game.add.sprite(176, 0, 'yiwan4');
        this.paiG1106 = this.game.add.sprite(220, 0, 'yiwan4');
        this.paiG1107 = this.game.add.sprite(0, 70, 'yiwan6');
        this.paiG1108 = this.game.add.sprite(44, 70, 'yiwan6');
        this.paiG1109 = this.game.add.sprite(88, 70, 'yiwan6');
        this.paiG1110 = this.game.add.sprite(132, 70, 'yiwan7');
        this.paiG1111 = this.game.add.sprite(176, 70, 'yiwan7');
        this.paiG1112 = this.game.add.sprite(220, 70, 'yiwan8');
        this.paiG1113 = this.game.add.sprite(0, 140, 'yiwan9');
        
        this.paiG11 = this.game.add.group();

        this.paiG11.add(this.paiG1101);
        this.paiG11.add(this.paiG1102);
        this.paiG11.add(this.paiG1103);
        this.paiG11.add(this.paiG1104);
        this.paiG11.add(this.paiG1105);
        this.paiG11.add(this.paiG1106);
        this.paiG11.add(this.paiG1107);
        this.paiG11.add(this.paiG1108);
        this.paiG11.add(this.paiG1109);
        this.paiG11.add(this.paiG1110);
        this.paiG11.add(this.paiG1111);
        this.paiG11.add(this.paiG1112);
        this.paiG11.add(this.paiG1113);
        
        this.paiG11.x = -330;
        this.paiG11.y = 60;
        
        answer11 = [0,0,0,0,0,0,1,0,0];
        
/*      paixing 12     ss mix     3 dong          */       
        
        this.paiG1201 = this.game.add.sprite(0, 0, 'yiwan2');
        this.paiG1202 = this.game.add.sprite(44, 0, 'yiwan3');
        this.paiG1203 = this.game.add.sprite(88, 0, 'yiwan3');
        this.paiG1204 = this.game.add.sprite(132, 0, 'yiwan3');
        this.paiG1205 = this.game.add.sprite(176, 0, 'yiwan3');
        this.paiG1206 = this.game.add.sprite(220, 0, 'yiwan4');
        this.paiG1207 = this.game.add.sprite(0, 70, 'yiwan5');
        this.paiG1208 = this.game.add.sprite(44, 70, 'yiwan6');
        this.paiG1209 = this.game.add.sprite(88, 70, 'yiwan8');
        this.paiG1210 = this.game.add.sprite(132, 70, 'yiwan8');
        this.paiG1211 = this.game.add.sprite(176, 70, 'yiwan8');
        this.paiG1212 = this.game.add.sprite(220, 70, 'yiwan9');
        this.paiG1213 = this.game.add.sprite(0, 140, 'yiwan9');  
        
        this.paiG12 = this.game.add.group();

        this.paiG12.add(this.paiG1201);
        this.paiG12.add(this.paiG1202);
        this.paiG12.add(this.paiG1203);
        this.paiG12.add(this.paiG1204);
        this.paiG12.add(this.paiG1205);
        this.paiG12.add(this.paiG1206);
        this.paiG12.add(this.paiG1207);
        this.paiG12.add(this.paiG1208);
        this.paiG12.add(this.paiG1209);
        this.paiG12.add(this.paiG1210);
        this.paiG12.add(this.paiG1211);
        this.paiG12.add(this.paiG1212);
        this.paiG12.add(this.paiG1213);

        this.paiG12.x = -330;
        this.paiG12.y = 60;
        
        answer12 = [1,0,0,1,0,0,1,0,0];
        
/*      paixing 13     s  mix 3 dong     2221 or 1222 + double     */       
        
        this.paiG1301 = this.game.add.sprite(0, 0, 'yiwan1');
        this.paiG1302 = this.game.add.sprite(44, 0, 'yiwan1');
        this.paiG1303 = this.game.add.sprite(88, 0, 'yiwan2');
        this.paiG1304 = this.game.add.sprite(132, 0, 'yiwan2');
        this.paiG1305 = this.game.add.sprite(176, 0, 'yiwan3');
        this.paiG1306 = this.game.add.sprite(220, 0, 'yiwan3');
        this.paiG1307 = this.game.add.sprite(0, 70, 'yiwan4');
        this.paiG1308 = this.game.add.sprite(44, 70, 'yiwan5');
        this.paiG1309 = this.game.add.sprite(88, 70, 'yiwan5');
        this.paiG1310 = this.game.add.sprite(132, 70, 'yiwan6');
        this.paiG1311 = this.game.add.sprite(176, 70, 'yiwan6');
        this.paiG1312 = this.game.add.sprite(220, 70, 'yiwan7');
        this.paiG1313 = this.game.add.sprite(0, 140, 'yiwan7');  
        
        this.paiG13 = this.game.add.group();

        this.paiG13.add(this.paiG1301);
        this.paiG13.add(this.paiG1302);
        this.paiG13.add(this.paiG1303);
        this.paiG13.add(this.paiG1304);
        this.paiG13.add(this.paiG1305);
        this.paiG13.add(this.paiG1306);
        this.paiG13.add(this.paiG1307);
        this.paiG13.add(this.paiG1308);
        this.paiG13.add(this.paiG1309);
        this.paiG13.add(this.paiG1310);
        this.paiG13.add(this.paiG1311);
        this.paiG13.add(this.paiG1312);
        this.paiG13.add(this.paiG1313);

        this.paiG13.x = -330;
        this.paiG13.y = 60;
        
        answer13 = [1,0,0,1,0,0,1,0,0];
        
/*      paixing 14   s+ 4 dong  31111 or 11113   1,9peng        */       
        
        this.paiG1401 = this.game.add.sprite(0, 0, 'yiwan2');
        this.paiG1402 = this.game.add.sprite(44, 0, 'yiwan2');
        this.paiG1403 = this.game.add.sprite(88, 0, 'yiwan3');
        this.paiG1404 = this.game.add.sprite(132, 0, 'yiwan3');
        this.paiG1405 = this.game.add.sprite(176, 0, 'yiwan4');
        this.paiG1406 = this.game.add.sprite(220, 0, 'yiwan4');
        this.paiG1407 = this.game.add.sprite(0, 70, 'yiwan5');
        this.paiG1408 = this.game.add.sprite(44, 70, 'yiwan5');
        this.paiG1409 = this.game.add.sprite(88, 70, 'yiwan5');
        this.paiG1410 = this.game.add.sprite(132, 70, 'yiwan6');
        this.paiG1411 = this.game.add.sprite(176, 70, 'yiwan7');
        this.paiG1412 = this.game.add.sprite(220, 70, 'yiwan8');
        this.paiG1413 = this.game.add.sprite(0, 140, 'yiwan9');  

        this.paiG14 = this.game.add.group();

        this.paiG14.add(this.paiG1401);
        this.paiG14.add(this.paiG1402);
        this.paiG14.add(this.paiG1403);
        this.paiG14.add(this.paiG1404);
        this.paiG14.add(this.paiG1405);
        this.paiG14.add(this.paiG1406);
        this.paiG14.add(this.paiG1407);
        this.paiG14.add(this.paiG1408);
        this.paiG14.add(this.paiG1409);
        this.paiG14.add(this.paiG1410);
        this.paiG14.add(this.paiG1411);
        this.paiG14.add(this.paiG1412);
        this.paiG14.add(this.paiG1413);

        this.paiG14.x = -330;
        this.paiG14.y = 60;
        
        answer14 = [0,0,0,1,0,1,1,0,1];
        
/*      paixing 15    s  5dong  31111 or 11113                 */       
        
        this.paiG1501 = this.game.add.sprite(0, 0, 'yiwan1');
        this.paiG1502 = this.game.add.sprite(44, 0, 'yiwan1');
        this.paiG1503 = this.game.add.sprite(88, 0, 'yiwan1');
        this.paiG1504 = this.game.add.sprite(132, 0, 'yiwan3');
        this.paiG1505 = this.game.add.sprite(176, 0, 'yiwan3');
        this.paiG1506 = this.game.add.sprite(220, 0, 'yiwan3');
        this.paiG1507 = this.game.add.sprite(0, 70, 'yiwan4');
        this.paiG1508 = this.game.add.sprite(44, 70, 'yiwan5');
        this.paiG1509 = this.game.add.sprite(88, 70, 'yiwan6');
        this.paiG1510 = this.game.add.sprite(132, 70, 'yiwan7');
        this.paiG1511 = this.game.add.sprite(176, 70, 'yiwan8');
        this.paiG1512 = this.game.add.sprite(220, 70, 'yiwan8');
        this.paiG1513 = this.game.add.sprite(0, 140, 'yiwan8');  

        this.paiG15 = this.game.add.group();

        this.paiG15.add(this.paiG1501);
        this.paiG15.add(this.paiG1502);
        this.paiG15.add(this.paiG1503);
        this.paiG15.add(this.paiG1504);
        this.paiG15.add(this.paiG1505);
        this.paiG15.add(this.paiG1506);
        this.paiG15.add(this.paiG1507);
        this.paiG15.add(this.paiG1508);
        this.paiG15.add(this.paiG1509);
        this.paiG15.add(this.paiG1510);
        this.paiG15.add(this.paiG1511);
        this.paiG15.add(this.paiG1512);
        this.paiG15.add(this.paiG1513);

        this.paiG15.x = -330;
        this.paiG15.y = 60;
        
        answer15 = [0,0,1,1,0,1,1,0,1];
        
/*      paixing 16   s  5dong  31111 or 11113           */       
        
        this.paiG1601 = this.game.add.sprite(0, 0, 'yiwan2');
        this.paiG1602 = this.game.add.sprite(44, 0, 'yiwan2');
        this.paiG1603 = this.game.add.sprite(88, 0, 'yiwan2');
        this.paiG1604 = this.game.add.sprite(132, 0, 'yiwan3');
        this.paiG1605 = this.game.add.sprite(176, 0, 'yiwan3');
        this.paiG1606 = this.game.add.sprite(220, 0, 'yiwan3');
        this.paiG1607 = this.game.add.sprite(0, 70, 'yiwan4');
        this.paiG1608 = this.game.add.sprite(44, 70, 'yiwan4');
        this.paiG1609 = this.game.add.sprite(88, 70, 'yiwan4');
        this.paiG1610 = this.game.add.sprite(132, 70, 'yiwan5');
        this.paiG1611 = this.game.add.sprite(176, 70, 'yiwan6');
        this.paiG1612 = this.game.add.sprite(220, 70, 'yiwan7');
        this.paiG1613 = this.game.add.sprite(0, 140, 'yiwan8');  
        
        /** STEP 1 **/
        // create a group to put the title assets in 
        // so they can be manipulated as a whole
        this.paiG16 = this.game.add.group();

        /** STEP 2 **/
        // create the title sprite
        // and add it to the group
        this.paiG16.add(this.paiG1601);
        this.paiG16.add(this.paiG1602);
        this.paiG16.add(this.paiG1603);
        this.paiG16.add(this.paiG1604);
        this.paiG16.add(this.paiG1605);
        this.paiG16.add(this.paiG1606);
        this.paiG16.add(this.paiG1607);
        this.paiG16.add(this.paiG1608);
        this.paiG16.add(this.paiG1609);
        this.paiG16.add(this.paiG1610);
        this.paiG16.add(this.paiG1611);
        this.paiG16.add(this.paiG1612);
        this.paiG16.add(this.paiG1613);



        /** STEP 5 **/
        // Set the originating location of the group
        this.paiG16.x = -330;
        this.paiG16.y = 60;
        
        answer16 = [0,0,1,0,1,1,0,1,1];
        
/*      paixing 17       b   unconect    2 dong       */       
        
        this.paiG1701 = this.game.add.sprite(0, 0, 'yiwan1');
        this.paiG1702 = this.game.add.sprite(44, 0, 'yiwan1');
        this.paiG1703 = this.game.add.sprite(88, 0, 'yiwan2');
        this.paiG1704 = this.game.add.sprite(132, 0, 'yiwan3');
        this.paiG1705 = this.game.add.sprite(176, 0, 'yiwan3');
        this.paiG1706 = this.game.add.sprite(220, 0, 'yiwan4');
        this.paiG1707 = this.game.add.sprite(0, 70, 'yiwan4');
        this.paiG1708 = this.game.add.sprite(44, 70, 'yiwan6');
        this.paiG1709 = this.game.add.sprite(88, 70, 'yiwan6');
        this.paiG1710 = this.game.add.sprite(132, 70, 'yiwan6');
        this.paiG1711 = this.game.add.sprite(176, 70, 'yiwan7');
        this.paiG1712 = this.game.add.sprite(220, 70, 'yiwan7');
        this.paiG1713 = this.game.add.sprite(0, 140, 'yiwan7');  
        
        /** STEP 1 **/
        // create a group to put the title assets in 
        // so they can be manipulated as a whole
        this.paiG17 = this.game.add.group();

        /** STEP 2 **/
        // create the title sprite
        // and add it to the group
        this.paiG17.add(this.paiG1701);
        this.paiG17.add(this.paiG1702);
        this.paiG17.add(this.paiG1703);
        this.paiG17.add(this.paiG1704);
        this.paiG17.add(this.paiG1705);
        this.paiG17.add(this.paiG1706);
        this.paiG17.add(this.paiG1707);
        this.paiG17.add(this.paiG1708);
        this.paiG17.add(this.paiG1709);
        this.paiG17.add(this.paiG1710);
        this.paiG17.add(this.paiG1711);
        this.paiG17.add(this.paiG1712);
        this.paiG17.add(this.paiG1713);



        /** STEP 5 **/
        // Set the originating location of the group
        this.paiG17.x = -330;
        this.paiG17.y = 60;
        
        answer17 = [0,1,0,0,1,0,0,0,0];
        
/*      paixing 18        b   unconect    2 dong       */       
        this.paiG1801 = this.game.add.sprite(0, 0, 'yiwan2');
        this.paiG1802 = this.game.add.sprite(44, 0, 'yiwan2');
        this.paiG1803 = this.game.add.sprite(88, 0, 'yiwan3');
        this.paiG1804 = this.game.add.sprite(132, 0, 'yiwan4');
        this.paiG1805 = this.game.add.sprite(176, 0, 'yiwan4');
        this.paiG1806 = this.game.add.sprite(220, 0, 'yiwan5');
        this.paiG1807 = this.game.add.sprite(0, 70, 'yiwan5');
        this.paiG1808 = this.game.add.sprite(44, 70, 'yiwan7');
        this.paiG1809 = this.game.add.sprite(88, 70, 'yiwan7');
        this.paiG1810 = this.game.add.sprite(132, 70, 'yiwan7');
        this.paiG1811 = this.game.add.sprite(176, 70, 'yiwan9');
        this.paiG1812 = this.game.add.sprite(220, 70, 'yiwan9');
        this.paiG1813 = this.game.add.sprite(0, 140, 'yiwan9');  
        
        this.paiG18 = this.game.add.group();

        this.paiG18.add(this.paiG1801);
        this.paiG18.add(this.paiG1802);
        this.paiG18.add(this.paiG1803);
        this.paiG18.add(this.paiG1804);
        this.paiG18.add(this.paiG1805);
        this.paiG18.add(this.paiG1806);
        this.paiG18.add(this.paiG1807);
        this.paiG18.add(this.paiG1808);
        this.paiG18.add(this.paiG1809);
        this.paiG18.add(this.paiG1810);
        this.paiG18.add(this.paiG1811);
        this.paiG18.add(this.paiG1812);
        this.paiG18.add(this.paiG1813);

        this.paiG18.x = -330;
        this.paiG18.y = 60;
        
        answer18 = [0,0,1,0,0,1,0,0,0];
        
/*      paixing 19          b  4dong  331 or 133                               */       
        this.paiG1901 = this.game.add.sprite(0, 0, 'yiwan2');
        this.paiG1902 = this.game.add.sprite(44, 0, 'yiwan2');
        this.paiG1903 = this.game.add.sprite(88, 0, 'yiwan2');
        this.paiG1904 = this.game.add.sprite(132, 0, 'yiwan3');
        this.paiG1905 = this.game.add.sprite(176, 0, 'yiwan3');
        this.paiG1906 = this.game.add.sprite(220, 0, 'yiwan3');
        this.paiG1907 = this.game.add.sprite(0, 70, 'yiwan4');
        this.paiG1908 = this.game.add.sprite(44, 70, 'yiwan6');
        this.paiG1909 = this.game.add.sprite(88, 70, 'yiwan6');
        this.paiG1910 = this.game.add.sprite(132, 70, 'yiwan7');
        this.paiG1911 = this.game.add.sprite(176, 70, 'yiwan7');
        this.paiG1912 = this.game.add.sprite(220, 70, 'yiwan8');
        this.paiG1913 = this.game.add.sprite(0, 140, 'yiwan8');  
        
        this.paiG19 = this.game.add.group();

        this.paiG19.add(this.paiG1901);
        this.paiG19.add(this.paiG1902);
        this.paiG19.add(this.paiG1903);
        this.paiG19.add(this.paiG1904);
        this.paiG19.add(this.paiG1905);
        this.paiG19.add(this.paiG1906);
        this.paiG19.add(this.paiG1907);
        this.paiG19.add(this.paiG1908);
        this.paiG19.add(this.paiG1909);
        this.paiG19.add(this.paiG1910);
        this.paiG19.add(this.paiG1911);
        this.paiG19.add(this.paiG1912);
        this.paiG19.add(this.paiG1913);

        this.paiG19.x = -330;
        this.paiG19.y = 60;
        
        answer19 = [0,1,1,1,1,0,0,0,0];
        
/*      paixing 20  c-  2 dong        */       
        
        this.paiG2001 = this.game.add.sprite(0, 0, 'yiwan1');
        this.paiG2002 = this.game.add.sprite(44, 0, 'yiwan1');
        this.paiG2003 = this.game.add.sprite(88, 0, 'yiwan1');
        this.paiG2004 = this.game.add.sprite(132, 0, 'yiwan2');
        this.paiG2005 = this.game.add.sprite(176, 0, 'yiwan2');
        this.paiG2006 = this.game.add.sprite(220, 0, 'yiwan2');
        this.paiG2007 = this.game.add.sprite(0, 70, 'yiwan4');
        this.paiG2008 = this.game.add.sprite(44, 70, 'yiwan4');
        this.paiG2009 = this.game.add.sprite(88, 70, 'yiwan4');
        this.paiG2010 = this.game.add.sprite(132, 70, 'yiwan5');
        this.paiG2011 = this.game.add.sprite(176, 70, 'yiwan6');
        this.paiG2012 = this.game.add.sprite(220, 70, 'yiwan7');
        this.paiG2013 = this.game.add.sprite(0, 140, 'yiwan8');  
        
        this.paiG20 = this.game.add.group();

        this.paiG20.add(this.paiG2001);
        this.paiG20.add(this.paiG2002);
        this.paiG20.add(this.paiG2003);
        this.paiG20.add(this.paiG2004);
        this.paiG20.add(this.paiG2005);
        this.paiG20.add(this.paiG2006);
        this.paiG20.add(this.paiG2007);
        this.paiG20.add(this.paiG2008);
        this.paiG20.add(this.paiG2009);
        this.paiG20.add(this.paiG2010);
        this.paiG20.add(this.paiG2011);
        this.paiG20.add(this.paiG2012);
        this.paiG20.add(this.paiG2013);

        this.paiG20.x = -330;
        this.paiG20.y = 60;

        answer20 = [0,0,0,0,1,0,0,1,0];
        
/*      paixing 21  c-  2 dong        */       
        
        this.paiG2101 = this.game.add.sprite(0, 0, 'yiwan1');
        this.paiG2102 = this.game.add.sprite(44, 0, 'yiwan1');
        this.paiG2103 = this.game.add.sprite(88, 0, 'yiwan1');
        this.paiG2104 = this.game.add.sprite(132, 0, 'yiwan2');
        this.paiG2105 = this.game.add.sprite(176, 0, 'yiwan2');
        this.paiG2106 = this.game.add.sprite(220, 0, 'yiwan2');
        this.paiG2107 = this.game.add.sprite(0, 70, 'yiwan4');
        this.paiG2108 = this.game.add.sprite(44, 70, 'yiwan4');
        this.paiG2109 = this.game.add.sprite(88, 70, 'yiwan4');
        this.paiG2110 = this.game.add.sprite(132, 70, 'yiwan7');
        this.paiG2111 = this.game.add.sprite(176, 70, 'yiwan7');
        this.paiG2112 = this.game.add.sprite(220, 70, 'yiwan9');
        this.paiG2113 = this.game.add.sprite(0, 140, 'yiwan9');  
        
        this.paiG21 = this.game.add.group();

        this.paiG21.add(this.paiG2101);
        this.paiG21.add(this.paiG2102);
        this.paiG21.add(this.paiG2103);
        this.paiG21.add(this.paiG2104);
        this.paiG21.add(this.paiG2105);
        this.paiG21.add(this.paiG2106);
        this.paiG21.add(this.paiG2107);
        this.paiG21.add(this.paiG2108);
        this.paiG21.add(this.paiG2109);
        this.paiG21.add(this.paiG2110);
        this.paiG21.add(this.paiG2111);
        this.paiG21.add(this.paiG2112);
        this.paiG21.add(this.paiG2113);

        this.paiG21.x = -330;
        this.paiG21.y = 60;

        answer21 = [0,0,0,0,0,0,1,0,1];

          
        uniqueRandoms = [this.paiG2,this.paiG3,this.paiG4,this.paiG5,this.paiG6,this.paiG7,this.paiG8,this.paiG9,this.paiG10,this.paiG11,this.paiG12,this.paiG13,this.paiG14,this.paiG15,this.paiG16,this.paiG17,this.paiG18,this.paiG19,this.paiG20,this.paiG21];
        FuniqueRandoms = [this.paiG2,this.paiG3,this.paiG4,this.paiG5,this.paiG6,this.paiG7,this.paiG8,this.paiG9,this.paiG10,this.paiG11,this.paiG12,this.paiG13,this.paiG14,this.paiG15,this.paiG16,this.paiG17,this.paiG18,this.paiG19,this.paiG20,this.paiG21];
        
        console.log(uniqueRandoms);

        
        this.panel = this.game.add.group();
        this.panel.add(this.panel1);
        this.panel.add(this.bwan1);
        this.panel.add(this.bwan2);
        this.panel.add(this.bwan3);
        this.panel.add(this.bwan4);
        this.panel.add(this.bwan5);
        this.panel.add(this.bwan6);
        this.panel.add(this.bwan7);
        this.panel.add(this.bwan8);
        this.panel.add(this.bwan9);

        this.panel.x = 0;
        this.panel.y = 250;  
        
        
        this.but1 = this.game.add.button(this.game.width/2, 430, 'queding', this.panduan, this);
        this.but1.anchor.setTo(0.5, 0.5);  
        
        this.but1.clicked=false;
        
        this.right = this.game.add.sprite(85, this.game.height, 'right');
        this.wrong = this.game.add.sprite(85, this.game.height, 'wrong');
        
        this.score = 60;
        this.scoreText = this.game.add.bitmapText(56, 12, 'flappyfont',this.score.toString(), 33);
        
         // add a timer
        this.countdowner = this.game.time.events.loop(Phaser.Timer.SECOND * 1, this.countdown, this);
        this.countdowner.timer.start();

        
    },

    update: function() {
        // This function is called 60 times per second    
        // It contains the game's logic   
        if(pLife == 0 || this.score == 0 ){
            
            game.state.start('resultState');  
        
        
        }
        
        
        
    },

    countdown: function() {  

        this.score--;
        shijian++;
        this.scoreText.setText(this.score.toString());
        
        console.log(shijian);
    },
    

    startClick: function(xx) {

      console.log(xx.key);
        

      if (xx.y == 120)
          
      {

      this.game.add.tween(xx).to({y: 100}, 600, Phaser.Easing.Bounce.Out, true);
          
        switch (xx.key)
        {
        case 'yiwan1':
          kblist[0] = 1;
          console.log(kblist);
          break;
        case 'yiwan2':
          kblist[1] = 1;
          console.log(kblist);
          break;
        case 'yiwan3':
          kblist[2] = 1;
          console.log(kblist);
          break;
        case 'yiwan4':
          kblist[3] = 1;
          console.log(kblist);
          break;
        case 'yiwan5':
          kblist[4] = 1;
          console.log(kblist);
          break;
        case 'yiwan6':
          kblist[5] = 1;
          console.log(kblist);
          break;
        case 'yiwan7':
          kblist[6] = 1;
          console.log(kblist);
          break;
        case 'yiwan8':
          kblist[7] = 1;
          console.log(kblist);
          break;
        case 'yiwan9':
          kblist[8] = 1;
          console.log(kblist);
          break;

                
        }
        
          
          
          
          
      }
        
      else if (xx.y == 100)
        
      {
      
      this.game.add.tween(xx).to({y: 120}, 600, Phaser.Easing.Bounce.Out, true);
          
        switch (xx.key)
        {
        case 'yiwan1':
          kblist[0] = 0;
          console.log(kblist);
          break;
        case 'yiwan2':
          kblist[1] = 0;
          console.log(kblist);
          break;
        case 'yiwan3':
          kblist[2] = 0;
          console.log(kblist);
          break;
        case 'yiwan4':
          kblist[3] = 0;
          console.log(kblist);
          break;
        case 'yiwan5':
          kblist[4] = 0;
          console.log(kblist);
          break;
        case 'yiwan6':
          kblist[5] = 0;
          console.log(kblist);
          break;
        case 'yiwan7':
          kblist[6] = 0;
          console.log(kblist);
          break;
        case 'yiwan8':
          kblist[7] = 0;
          console.log(kblist);
          break;
        case 'yiwan9':
          kblist[8] = 0;
          console.log(kblist);
          break;
        }
        
          
      }

    },
    
    panduan: function() {
        
    if(!this.but1.clicked){
        
        this.but1.clicked=true;  
        game.time.events.add(2300,function(){ this.but1.clicked=false},this);
        
        console.log(kblist);
        console.log(kblist.toString());
        
        this.timer3 = this.game.time.create(false);  
        this.timer3.add(1400,dosth,this);  
        
/*        this.timer4 = this.game.time.create(false);
        this.timer4.add(1300,colorBack,this);  */
        
        switch (npointer)
        {
        case 99:

          if ( kblist.toString()  == answer1.toString() )
          
          {
           
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              
              this.timer3.start();
              fen = ++fen;

          }
                
          else
          
          {
          
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);      
              this.timer3.start();
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              
              pLife =  --pLife;
              
              getColor(this.bwan9);
          }
                
          break;
                
        case 0:
                
          console.log(answer2);
          console.log(kblist);

          if ( kblist.toString()  == answer2.toString() )
          
          {
           
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();     
              fen = ++fen;

          }
                
          else
          
          {
          
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);       
              this.timer3.start();    
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan1);
              getColor(this.bwan3);
              getColor(this.bwan4);
              getColor(this.bwan5);
              getColor(this.bwan7);
              getColor(this.bwan8);
              getColor(this.bwan9);

   
          }
                
          break;     
                
        case 1:
                
          console.log(answer3);
          console.log(kblist);

          if ( kblist.toString()  == answer3.toString() )
          
          {
           
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();       
              fen = ++fen;
          }
                
          else
          
          {
          
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);       
              this.timer3.start();    
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan1);
              getColor(this.bwan2);
              getColor(this.bwan3);
              getColor(this.bwan4);
   
          }
                
          break;   
                
        case 2:
                
          console.log(answer4);
          console.log(kblist);

          if ( kblist.toString()  == answer4.toString() )
          
          {
           
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();       
              fen = ++fen;
          }
                
          else
          
          {
          
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);       
              this.timer3.start();  
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan3);
              getColor(this.bwan4);
              getColor(this.bwan5);
              getColor(this.bwan6);
   
          }
                
          break; 
                
        case 3:
                
          console.log(answer5);
          console.log(kblist);

          if ( kblist.toString()  == answer5.toString() )
          
          {
           
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();         
              fen = ++fen;
          }
                
          else
          
          {
          
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);       
              this.timer3.start();  
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan3);
              getColor(this.bwan5);
              getColor(this.bwan6);
              getColor(this.bwan8);
   
          }
                
          break; 
                
        case 4:
                
          console.log(answer6);
          console.log(kblist);

          if ( kblist.toString()  == answer6.toString() )
          
          {
         
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();            
              fen = ++fen;
          }
                
          else
          
          {
          
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);       
              this.timer3.start();  
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan2);
              getColor(this.bwan3);
              getColor(this.bwan5);
              getColor(this.bwan8);
   
          }
                
          break; 
                
        
        case 5:

          if ( kblist.toString()  == answer7.toString() )
          
          {
           
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();            
              fen = ++fen;
          }
                
          else
          
          {
          
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);       
              this.timer3.start();  
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan4);
              getColor(this.bwan5);
              getColor(this.bwan6);
              getColor(this.bwan7);
   
          }
                
          break; 

    
        case 6:

          if ( kblist.toString()  == answer8.toString() )
          
          {
           
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();            
              fen = ++fen;
          }
                
          else
          
          {
          
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);       
              this.timer3.start();  
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan3);
              getColor(this.bwan5);
              getColor(this.bwan6);
              getColor(this.bwan8);
              getColor(this.bwan9);
   
          }
                
          break; 
                
        case 7:

          if ( kblist.toString()  == answer9.toString() )
          
          {
           
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();            
              fen = ++fen;
          }
                
          else
          
          {
          
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);       
              this.timer3.start();  
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan2);
   
          }
                
          break; 
                
        case 8:

          if ( kblist.toString()  == answer10.toString() )
          
          {
           
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();            
              fen = ++fen;
          }
                
          else
          
          {
          
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);       
              this.timer3.start();  
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan1);
              getColor(this.bwan4);
              getColor(this.bwan5);
              getColor(this.bwan6);
   
          }
                
          break; 
                
        case 9:

          if ( kblist.toString()  == answer11.toString() )
          
          {
           
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();            
              fen = ++fen;
          }
                
          else
          
          {
          
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);       
              this.timer3.start();  
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan7);
   
          }
                
          break; 
                
        case 10:

          if ( kblist.toString()  == answer12.toString() )
          
          {
           
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();
              fen = ++fen;
          }
                
          else
          
          {
          
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);      
              this.timer3.start();
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan1);
              getColor(this.bwan4);
              getColor(this.bwan7);
          }
                
          break;
                
        case 11:

          if ( kblist.toString()  == answer13.toString() )
          
          {
           
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();
              fen = ++fen;
          }
                
          else
          
          {
          
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);      
              this.timer3.start();
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan1);
              getColor(this.bwan4);
              getColor(this.bwan7);
          }
                
          break;
                
        case 12:
          if ( kblist.toString()  == answer14.toString() )
          
          {
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();
              fen = ++fen;
          }
                
          else
          
          {
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);      
              this.timer3.start();
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan4);
              getColor(this.bwan6);
              getColor(this.bwan7);
              getColor(this.bwan9);
          }   
          break;
                
        case 13:
          if ( kblist.toString()  == answer15.toString() )
          
          {
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();
              fen = ++fen;
          }
                
          else
          
          {
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);      
              this.timer3.start();
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan3);
              getColor(this.bwan4);
              getColor(this.bwan6);
              getColor(this.bwan7);
              getColor(this.bwan9);
          }   
          break;
                
        case 14:
          if ( kblist.toString()  == answer16.toString() )
          
          {
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();
              fen = ++fen;
          }
                
          else
          
          {
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);      
              this.timer3.start();
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan3);
              getColor(this.bwan5);
              getColor(this.bwan6);
              getColor(this.bwan8);
              getColor(this.bwan9);
          }   
          break;
                
        case 15:
          if ( kblist.toString()  == answer17.toString() )
          
          {
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();
              fen = ++fen;
          }
                
          else
          
          {
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);      
              this.timer3.start();
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan2);
              getColor(this.bwan5);
          }   
          break;
                
        case 16:
          if ( kblist.toString()  == answer18.toString() )
          
          {
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();
              fen = ++fen;
          }
                
          else
          
          {
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);      
              this.timer3.start();
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan3);
              getColor(this.bwan6);
          }   
          break;
                
        case 17:
          if ( kblist.toString()  == answer19.toString() )
          
          {
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();
              fen = ++fen;
          }
                
          else
          
          {
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);      
              this.timer3.start();
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan2);
              getColor(this.bwan3);
              getColor(this.bwan4);
              getColor(this.bwan5);
          }   
          break;
                
        case 18:
          if ( kblist.toString()  == answer20.toString() )
          
          {
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();
              fen = ++fen;
          }
                
          else
          
          {
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);      
              this.timer3.start();
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan5);
              getColor(this.bwan8);
          }   
          break;
                
        case 19:
          if ( kblist.toString()  == answer21.toString() )
          
          {
              this.game.add.tween(this.right).to({y: 100}, 1, null, true); 
              this.timer3.start();
              fen = ++fen;
          }
                
          else
          
          {
              this.game.add.tween(this.wrong).to({y: 100}, 1, null, true);      
              this.timer3.start();
              
              var temp1 = this.heartG.getTop();
              this.heartG.remove(temp1);
              pLife =  --pLife;
              getColor(this.bwan7);
              getColor(this.bwan9);
          }   
          break;

                
        }

        
        function makeUniqueRandom() {

            index = Math.floor(Math.random() * uniqueRandoms.length);
            var val = uniqueRandoms[index];
            
            npointer = FuniqueRandoms.indexOf(val); 
            
            console.log(npointer);

            // now remove that value from the array
            uniqueRandoms.splice(index, 1);
            
            return val;
            
        }
        
        function getBottom() {
            
            var val1 = this.heartG.getBottom();
            
            return val1;
            
        }

        var temp = makeUniqueRandom();
        
        nextpx = temp;
            
        console.log(index);
        
        
        function dosth () {
            
            this.bwan1.y = 120;
            this.bwan2.y = 120;
            this.bwan3.y = 120;
            this.bwan4.y = 120;
            this.bwan5.y = 120;
            this.bwan6.y = 120;
            this.bwan7.y = 120;
            this.bwan8.y = 120;
            this.bwan9.y = 120;
            
            kblist = [0,0,0,0,0,0,0,0,0];
        
            this.right.y = this.game.height;
            
            this.wrong.y = this.game.height;
            
            nowpx.y = this.game.height;
            
/*            colorBack ();*/
            
            this.bwan1.tint = 0xffffff;
            this.bwan2.tint = 0xffffff;
            this.bwan3.tint = 0xffffff;
            this.bwan4.tint = 0xffffff;
            this.bwan5.tint = 0xffffff;
            this.bwan6.tint = 0xffffff;
            this.bwan7.tint = 0xffffff;
            this.bwan8.tint = 0xffffff;
            this.bwan9.tint = 0xffffff;
            
            this.game.add.tween(nextpx).to({x: 30}, 1000, Phaser.Easing.Bounce.Out, true);
            
            nowpx = nextpx;
            
        }
        
        function tweenTint(obj, startColor, endColor, time) {
            // create an object to tween with our step value at 0
            var colorBlend = {step: 0};

            // create the tween on this object and tween its step property to 100
            var colorTween = game.add.tween(colorBlend).to({step: 100}, time);

            // run the interpolateColor function every time the tween updates, feeding it the
            // updated value of our tween each time, and set the result as our tint
            colorTween.onUpdateCallback(function() {
              obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);   
            });

            // set the object to the start color straight away
            obj.tint = startColor;    

            // start the tween
            colorTween.start();
        }
        
        
        function getColor (xxx) {
            
            tweenTint(xxx, 0xffffff, 0xdc2929, 100);
              
        }
        

        
    }

        
        
    },


    
};


// Create our 'tutor' state that will contain the game
var State0 = function(game) {  };
    
State0.prototype = {
    
    preload: function() { 

        game.stage.backgroundColor = '#000';

    },

    create: function() { 
        
        this.background = this.add.tileSprite(0,0, this.world.width, this.world.height, 'background');
        
        this.title = this.game.add.sprite(this.game.width/2, 56, 'title');  
        this.title.anchor.setTo(0.5, 0.5);
        
        this.tip = this.game.add.sprite(40, 105, 'tip');

        this.Gstart = this.game.add.button(this.game.width/2, 435, 'start', this.startGame, this);
        this.Gstart.anchor.setTo(0.5, 0.5);
        
/*        var textstyle = { font: "26px 微软雅黑", fill: "#05070e", align: "center", wordWrap: true, wordWrapWidth: 200 };
        var percent = 60;
        
        var innertext = '我在' + shijian + '秒成为麻将' + fen + '段高手，击败了全厦门' + percent + '的选手，你快来挑战我吧！' ;
        
        this.chengji = this.game.add.text(70, 126, innertext,textstyle);*/
        
        

    },

    update: function() {
    },

    
    startGame: function() {
        this.game.state.start('firstState');
    },


    
};

// Create our 'result' state that will contain the game
var State2 = function(game) {  };
    
State2.prototype = {
    
    preload: function() { 
        // This function will be executed at the beginning     
        // That's where we load the game's assets  
        
        // Change the background color of the game
        game.stage.backgroundColor = '#000';

  
    },

    create: function() { 
        
                



        // This function is called after the preload function     
        // Here we set up the game, display sprites, etc.
        
        this.background = this.add.tileSprite(0,0, this.world.width, this.world.height, 'background');
        
        this.title = this.game.add.sprite(this.game.width/2, 56, 'endtext');  
        this.title.anchor.setTo(0.5, 0.5);
        
        this.blanktip = this.game.add.sprite(40, 105, 'blanktip');

        this.sharetext = this.game.add.button(this.game.width/2, 435, 'sharetext', this.showshare, this);
        this.sharetext.anchor.setTo(0.5, 0.5);


        
    },

    update: function() {
        // This function is called 60 times per second    
        // It contains the game's logic   
    },
    
    showshare: function() {
        
        var tempvar = document.getElementById("cv");
        
        tempvar.style.display="block";
        
        tempvar.addEventListener('click',function(){
        
            pLife = 3;
            game.state.restart();       
            game.state.start('zeroState');
            
            this.style.display="none";
        
        
        })
        

    },   


    
};


// Create our 'preload' state that will contain the game
var Preload = function(game) {  };


function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.asset = this.add.sprite(this.width/2, this.height/2, 'preloader');
      
    this.asset.scale.x = 1.5;
    this.asset.scale.y = 2.8;
      
    this.asset.anchor.setTo(0.5, 0.5);
    this.load.setPreloadSprite(this.asset);
      
      
    game.load.image('background', 'assets/desk1.jpg'); 
    game.load.image('tip', 'assets/tip.png'); 
    game.load.image('blanktip', 'assets/tip1.png');
    game.load.image('start', 'assets/start.png'); 
    game.load.image('title', 'assets/title.png'); 
      
        game.load.image('yiwan1', 'assets/yiwan.png'); 
        game.load.image('yiwan2', 'assets/erwan.png'); 
        game.load.image('yiwan3', 'assets/sanwan.png'); 
        game.load.image('yiwan4', 'assets/siwan.png'); 
        game.load.image('yiwan5', 'assets/wuwan.png'); 
        game.load.image('yiwan6', 'assets/liuwan.png'); 
        game.load.image('yiwan7', 'assets/qiwan.png'); 
        game.load.image('yiwan8', 'assets/bawan.png'); 
        game.load.image('yiwan9', 'assets/jiuwan.png'); 
        game.load.image('background', 'assets/desk1.jpg'); 
        game.load.image('panel', 'assets/panel.png'); 
        game.load.image('queding', 'assets/queding.png'); 
        game.load.image('right', 'assets/right.png'); 
        game.load.image('wrong', 'assets/wrong.png'); 
        game.load.image('heart', 'assets/heart.png'); 
        game.load.image('shitext', 'assets/shi.png'); 
        game.load.image('mingtext', 'assets/ming.png'); 
        game.load.image('sharetext', 'assets/share1.png'); 
        game.load.image('endtext', 'assets/title1.png'); 
        
        game.load.bitmapFont('flappyfont', 'assets/fonts/font.png', 'assets/fonts/font.fnt');  

  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('zeroState');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};





// Create our 'boot' state that will contain the game
var Boot = function(game) {  };

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');
  },
  create: function() {

    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
      
    this.game.input.maxPointers = 1;
    this.game.state.start('loadState');
  }
};




// Add and start the 'main' state to start the game
game.state.add('resultState' , State2);
game.state.add('firstState' , State1);
game.state.add('zeroState' , State0);
game.state.add('loadState' , Preload);
game.state.add('bootState' , Boot);
game.state.start('bootState');  