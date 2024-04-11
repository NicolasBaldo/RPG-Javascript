// Définition de la classe Character
class Character {
    // Constructeur de la classe Character
    constructor(hp, dmg, mana) {
      this.hp = hp; // Points de vie du personnage
      this.dmg = dmg; // Points de dégâts du personnage
      this.mana = mana; // Points de mana du personnage
      this.status = "playing"; // Statut du personnage (en jeu, gagnant ou perdant)
    }
  
    // Méthode pour faire subir des dégâts au personnage
    takeDamage(damage) {
      this.hp -= damage; // Réduction des points de vie
      if (this.hp <= 0) {
        this.hp = 0;
        this.status = "loser"; // Si les points de vie tombent à 0, le personnage est éliminé
      }
    }
  
    // Méthode pour infliger des dégâts à un autre personnage
    dealDamage(victim) {
      victim.takeDamage(this.dmg); // Appel de la méthode takeDamage de la victime
      console.log(`${this.constructor.name} is attacking ${victim.constructor.name}. He deals him ${this.dmg} damages. ${victim.constructor.name} got ${victim.hp} lifepoints left.`);
    }
  }
  
  // Définition des sous-classes de Character
  
  // Classe Fighter
  class Fighter extends Character {
    constructor() {
      super(12, 4, 40); // Appel du constructeur de la classe mère avec des valeurs spécifiques
    }
  
    // Méthode spéciale pour le Fighter : Dark Vision
    darkVision(victim) {
      if (this.mana >= 20) {
        victim.takeDamage(5);
        this.mana -= 20;
        console.log(`${this.constructor.name} is attacking ${victim.constructor.name} with Dark Vision. He deals him 5 damages. ${victim.constructor.name} got ${victim.hp} lifepoints left.`);
      } else {
        console.log("Not enough mana to perform Dark Vision.");
      }
    }
  }
  
  // Classe Paladin
  class Paladin extends Character {
    constructor() {
      super(16, 3, 160);
    }
  
    // Méthode spéciale pour le Paladin : Healing Lightning
    healingLightning(victim) {
      if (this.mana >= 40) {
        victim.takeDamage(4);
        this.hp += 5;
        this.mana -= 40;
        console.log(`${this.constructor.name} is attacking ${victim.constructor.name} with Healing Lightning. He deals him 4 damages and heals himself by 5 lifepoints. ${victim.constructor.name} got ${victim.hp} lifepoints left.`);
      } else {
        console.log("Not enough mana to perform Healing Lightning.");
      }
    }
  }
  
  // Classe Monk
  class Monk extends Character {
    constructor() {
      super(8, 2, 200);
    }
  
    // Méthode spéciale pour le Monk : Heal
    heal() {
      if (this.mana >= 25) {
        this.hp += 8;
        this.mana -= 25;
        console.log(`${this.constructor.name} is healing himself. He gains 8 lifepoints.`);
      } else {
        console.log("Not enough mana to perform healing.");
      }
    }
  }
  
  // Classe Berzerker
  class Berzerker extends Character {
    constructor() {
      super(8, 4, 0);
    }
  
    // Méthode spéciale pour le Berzerker : Rage
    rage() {
      this.dmg += 1;
      this.hp -= 1;
      console.log(`${this.constructor.name} is entering Rage mode. His damage increases by 1 but he loses 1 lifepoint.`);
    }
  }
  
  // Classe Assassin
  class Assassin extends Character {
    constructor() {
      super(6, 6, 20);
      this.shadowHitAvailable = true;
    }
  
    // Méthode spéciale pour l'Assassin : Shadow Hit
    shadowHit(victim) {
      if (this.mana >= 20 && this.shadowHitAvailable) {
        victim.takeDamage(7);
        this.mana -= 20;
        this.shadowHitAvailable = false;
        console.log(`${this.constructor.name} is attacking ${victim.constructor.name} with Shadow Hit. He deals him 7 damages.`);
      } else {
        console.log("Not enough mana to perform Shadow Hit or it's on cooldown.");
      }
    }
  }
  // Classe Wizard
  class Wizard extends Character {
    constructor() {
        super(10, 2, 200); // Appel du constructeur de la classe mère avec des valeurs spécifiques
        this.fireballAvailable = true;
      }

    // Méthode spéciale pour le Wizard : Fireball
    fireball(victim) {
        if (this.mana >= 25) {
            victim.takeDamage(7);
            this.mana -= 25;
            this.fireballAvailable = false;
            console.log(`${this.constructor.name} is attacking ${victim.constructor.name} with Fireball. He deals him 7 damage.`);
        } else {
            console.log("Not enough mana to perform Fireball.");
        }
    }
}
      class DiscJokey extends Character{
         constructor()  {
          super(20, 9 , 500);// Appel du constructeur de la classe mère avec des valeurs spécifiques
          this.lancerdedisqueAvailable = true;
         }

      // Méthode spéciale pour le DiscJokey : Lancerdedisque
       lancerdedisque(victim) {
          if (this.mana >= 5) {
            victim.takeDamage(9); 
            this.mana -= 15; 
            this.fireballAvailable = false; 
            console.log(`${this.constructor.name} is attacking ${victim.constructor.name} with Lancerdedisque. he deals him 9 damage.`);
            } else {
              console.log("Not enough mana to perform Lancerdedisque");
            }
        }
    }
  



  // Instanciation des personnages
  const grace = new Fighter();
  const ulder = new Paladin();
  const moana = new Monk();
  const draven = new Berzerker();
  const carl = new Assassin();
  const dooku = new Wizard();
  const zadig = new DiscJokey();


  // Définition de la classe Game
  class Game {
    constructor() {
      this.turnLeft = 10; // Nombre de tours restants
      this.characters = [grace, ulder, moana, draven, carl, dooku, zadig]; // Liste des personnages du jeu
    }
  
    // Méthode pour commencer un tour
    startTurn() {
      console.log(`It's turn ${11 - this.turnLeft}`);
      this.characters.forEach(character => {
        console.log(`It's time for ${character.constructor.name} to play.`);
        // Logique pour choisir l'action du personnage
        // Exemple d'utilisation : character.attack(target);
      });
    }
  
    // Méthode pour passer au tour suivant
    skipTurn() {
      this.turnLeft--;
      if (this.turnLeft === 0) {
        this.endGame(); // Si tous les tours sont écoulés, la partie se termine
      }
    }
  
    // Méthode pour terminer la partie
    endGame() {
      const winners = this.characters.filter(character => character.status === "playing"); // Filtrer les personnages encore en jeu
      if (winners.length === 1) {
        winners[0].status = "winner"; // S'il ne reste qu'un gagnant, il remporte la partie
        console.log(`${winners[0].constructor.name} is the winner!`);
      } else {
        console.log("It's a draw!"); // Sinon, c'est un match nul
      }
    }
  
    // Méthode pour afficher les statistiques des personnages
    watchStats() {
      this.characters.forEach(character => {
        console.log(`${character.constructor.name}: HP ${character.hp}, Mana ${character.mana}, Status ${character.status}`);
      });
    }
  
    // Méthode pour commencer le jeu
    startGame() {
      console.log("Starting the game!");
      while (this.turnLeft > 0) {
        this.startTurn();
        this.skipTurn();
      }
    }
  }
  
  // Instanciation du jeu et démarrage
  const game = new Game();
  game.startGame();
  