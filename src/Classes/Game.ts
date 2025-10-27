//  classe Game 
export class Game {

    // attribut privé pour stocker le contexte 2D 
    private context: CanvasRenderingContext2D;

    //  taille du canvas
    public readonly CANVAS_WIDTH: number = 900;
    public readonly CANVAS_HEIGHT: number = 600;

    // Constructeur  nouvel objet Game
    constructor() {

        // création élément <canvas> du document HTML
        const canvas: HTMLCanvasElement = document.querySelector("canvas");

        // contexte 2D du canvas 
        this.context = canvas.getContext("2d");

        // hauteur et  largeur du canvas
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
        
    }
// méthode start  pour démarrer le jeu
  public start(): void {

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

}
