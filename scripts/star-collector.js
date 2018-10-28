var config = {
    parent: 'phaser-root',
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var players;
var stars;
var platforms;
var bombs;
var controlPads;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'images/star-collector/sky.png');
    this.load.image('ground', 'images/star-collector/platform.png');
    this.load.image('star', 'images/star-collector/star.png');
    this.load.image('bomb', 'images/star-collector/bomb.png');
    this.load.spritesheet('dude', 
        'images/star-collector/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

function create ()
{
    this.add.image(400, 300, 'sky');

    platforms = initPlatforms(this);

    controlPads = setControlPads(this);
    initPlayers(this);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    this.physics.add.collider(players, platforms);
    this.physics.add.collider(stars, platforms);
    this.physics.add.overlap(players, stars, collectStar, null, this);

    
    bombs = this.physics.add.group();
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(players, bombs, hitBomb, null, this);

    this.physics.add.collider(players, players, playerCollision, null, this);
}

function update ()
{
    players.children.iterate(function (player) {
        if (!player.body.touching.up) {
            player.clearTint();
        }
        
        var controls = player.controlPad;
        if (controls.left.isDown)
        {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (controls.right.isDown)
        {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (controls.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-430);
        }
    });
}

function initPlatforms (game) {
    var platforms;
    platforms = game.physics.add.staticGroup();
    platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');
    
    return platforms;
}

function setControlPads (game) {
    return {
        arrows: game.input.keyboard.createCursorKeys(),
        wasd: {
            up: game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            down: game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            left: game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            right: game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        }
    };
}

function initPlayers (game)
{
    var player1 = game.physics.add.sprite(100, 450, 'dude');
    player1.scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
    player1.score = 0;
    player1.controlPad = controlPads.arrows;

    // var player2 = game.physics.add.sprite(400, 450, 'dude');
    // player2.scoreText = game.add.text(500, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
    // player2.score = 0;
    // player2.controlPad = controlPads.wasd;

    players = game.physics.add.group();
    players.add(player1);
    // players.add(player2);

    players.children.iterate(function (player) {
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);
        player.body.setGravityY(100);
    });
}

function collectStar (player, star)
{
    star.disableBody(true, true);
    player.score += 10;
    player.scoreText.setText('Score: ' + player.score);

    if (stars.countActive(true) === 0) {
        stars.children.iterate(function (child) {
            child.enableBody(true, child.x, 0, true, true);
        });
    }
    spawnBomb();
}

function spawnBomb () {
    var x = Phaser.Math.Between(0, 800);
    var bomb = bombs.create(x, 16, 'bomb');
    bomb.setBounce(1);
    bomb.setCollideWorldBounds(true);
    bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    bomb.allowGravity = false;
}

function hitBomb (player, bomb)
{
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    gameOver = true;
}

function playerCollision (p1, p2) {
    if (p1.y < p2.y && p2.body.touching.up) {
        p2.setTint(0xff0000);
        p2.score -= 1;
        p2.scoreText.setText('Score: ' + p2.score);
    }
    else if (p2.y < p1.y && p1.body.touching.up) {
        p1.setTint(0xff0000);
        p1.score -= 1;
        p1.scoreText.setText('Score: ' + p1.score);
    }
}