cc.Class({
  extends: cc.Component,

  properties: {
    ground: cc.Prefab,
    cactus1: cc.Prefab,
    cactus2: cc.Prefab,
    bush: cc.Prefab,
    gameScore: cc.Label,
    _score: 0,
    // increment: 0,
    // _speed: -300,
  },

  onLoad() {
    let physicsManager = cc.director.getPhysicsManager();
    physicsManager.enabled = true;
  },

  spawnGround() {
    let newGround = cc.instantiate(this.ground);
    newGround.getComponent(cc.PhysicsBoxCollider).friction = 0;
    newGround.setPosition(1908, -254);
    this.node.addChild(newGround);
    console.log('the new ground has been added');
  },
  spawnCactus() {
    console.log('spawn cactus');
    let cactus = [this.cactus1, this.cactus2, this.bush];
    let randomCactus = Math.floor(Math.random() * cactus.length);
    let newCactus = cc.instantiate(cactus[randomCactus]);

    // this.speed += this.increment;
    // newCactus.getComponent(cc.RigidBody).linearVelocity.x = this.speed;
    newCactus.setPosition(1908, -150);
    this.node.addChild(newCactus);
    console.log('the new cactus has been added');
  },
  addScore() {
    this._score += 1;
    this.gameScore.string = `score : ${this._score}`;
  },
});
