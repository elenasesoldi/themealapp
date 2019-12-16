import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  private recipeId: string;
  public recipe: Recipe;
  public ingredients: Array<{ strIngredient: string, strMeasure: string}>;
  public notFound: string;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) {
                this.notFound = '';
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recipeId = params.id;
      this.recipeService.getRecipeById(this.recipeId).subscribe(
        data => {
          this.ingredients = [];
          try {
            this.recipe = data.meals[0];
            this.ingredients.push({strIngredient: this.recipe.strIngredient1, strMeasure: this.recipe.strMeasure1});
            this.ingredients.push({strIngredient: this.recipe.strIngredient2, strMeasure: this.recipe.strMeasure2});
            this.ingredients.push({strIngredient: this.recipe.strIngredient3, strMeasure: this.recipe.strMeasure3});
            this.ingredients.push({strIngredient: this.recipe.strIngredient4, strMeasure: this.recipe.strMeasure4});
            this.ingredients.push({strIngredient: this.recipe.strIngredient5, strMeasure: this.recipe.strMeasure5});
            this.ingredients.push({strIngredient: this.recipe.strIngredient6, strMeasure: this.recipe.strMeasure6});
            this.ingredients.push({strIngredient: this.recipe.strIngredient7, strMeasure: this.recipe.strMeasure7});
            this.ingredients.push({strIngredient: this.recipe.strIngredient8, strMeasure: this.recipe.strMeasure8});
            this.ingredients.push({strIngredient: this.recipe.strIngredient9, strMeasure: this.recipe.strMeasure9});
            this.ingredients.push({strIngredient: this.recipe.strIngredient10, strMeasure: this.recipe.strMeasure10});
            this.ingredients.push({strIngredient: this.recipe.strIngredient11, strMeasure: this.recipe.strMeasure11});
            this.ingredients.push({strIngredient: this.recipe.strIngredient12, strMeasure: this.recipe.strMeasure12});
            this.ingredients.push({strIngredient: this.recipe.strIngredient13, strMeasure: this.recipe.strMeasure13});
            this.ingredients.push({strIngredient: this.recipe.strIngredient14, strMeasure: this.recipe.strMeasure14});
            this.ingredients.push({strIngredient: this.recipe.strIngredient15, strMeasure: this.recipe.strMeasure15});
            this.ingredients.push({strIngredient: this.recipe.strIngredient16, strMeasure: this.recipe.strMeasure16});
            this.ingredients.push({strIngredient: this.recipe.strIngredient17, strMeasure: this.recipe.strMeasure17});
            this.ingredients.push({strIngredient: this.recipe.strIngredient18, strMeasure: this.recipe.strMeasure18});
            this.ingredients.push({strIngredient: this.recipe.strIngredient19, strMeasure: this.recipe.strMeasure19});
            this.ingredients.push({strIngredient: this.recipe.strIngredient20, strMeasure: this.recipe.strMeasure20});
          } catch (error) {}

          console.log(this.recipe);

        },
        error => console.error(error)
      );
    });
  }

}
