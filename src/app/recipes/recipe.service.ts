import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Acarajé', 
            'Acarajé da Bahia', 
            'https://truffle-assets.imgix.net/dbd3b840-acaraje_s_thumb.jpg',
            [
                new Ingredient('Vatapá', 1),
                new Ingredient('Camarão', 7),
                new Ingredient('Caruru', 1)
            ]
        ),
        new Recipe(
            'Moqueca', 
            'Moqueca de Surubim', 
            'http://s2.glbimg.com/VCOWSSU3Ea6OlBbsKZ52REHzfps=/smart/e.glbimg.com/og/ed/f/original/2017/04/12/receita-moqueca-de-peixe.jpg',
            [
                new Ingredient('Surubim', 1),
                new Ingredient('Camarão', 7),
                new Ingredient('Pimentão', 1),
                new Ingredient('Cebola', 1)
            ]
        )
    ];    

    getServices() {
        // slice um novo array como uma copia de recipes
        return this.recipes.slice();
    }
}