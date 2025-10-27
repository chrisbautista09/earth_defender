//  classe Game 
var Game = /** @class */ (function () {
    // Constructeur  nouvel objet Game
    function Game() {
        //  taille du canvas
        this.CANVAS_WIDTH = 900;
        this.CANVAS_HEIGHT = 600;
        // création élément <canvas> du document HTML
        var canvas = document.querySelector("canvas");
        // contexte 2D du canvas 
        this.context = canvas.getContext("2d");
        // hauteur et  largeur du canvas
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
    }
    // méthode start  pour démarrer le jeu
    Game.prototype.start = function () {
        // Efface tout le contenu du canvas
        // clearRect(x, y, largeur, hauteur) supprime tout dessin présent dans la zone indiquée
        this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        //  Définit la couleur de remplissage utilisée pour les prochains dessins
        // Ici, "#141414" correspond à un gris très foncé (presque noir)
        this.context.fillStyle = "#141414";
        // Dessine un rectangle rempli sur toute la surface du canvas
        // Cela permet de “réinitialiser” l’écran avec un fond uniforme avant de redessiner les éléments du jeu
        this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
    };
    ;
    return Game;
}());
export { Game };
