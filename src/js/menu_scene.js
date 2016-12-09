var MenuScene = {

    create: function () {
          this.game.world.setBounds(0,0,800,600);
          this.game.stage.backgroundColor = "#000000";
        var logo = this.game.add.sprite(this.game.world.centerX, 
                                        this.game.world.centerY, //Era para que quede mas estetico pero vamos que queda
                                        'logo');
        logo.anchor.setTo(0.5, 0.5);
        var buttonStart = this.game.add.button(this.game.world.centerX, 
                                               this.game.world.centerY+150, 
                                               'button', 
                                               this.actionOnClick, 
                                               this, 2, 1, 0);
        buttonStart.anchor.set(0.5);
        var textStart = this.game.add.text(0, 0, "Start");
        textStart.font = 'Sniglet';
        textStart.anchor.set(0.5);
        buttonStart.addChild(textStart);
    },
    
    actionOnClick: function(){
        this.game.state.start('preloader');
    } 
};

module.exports = MenuScene;