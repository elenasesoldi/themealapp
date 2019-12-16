import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public search: string;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private recipeService: RecipeService) {
    this.search = '';
  }

  public show(): void {
    this.router.navigate(['/recipes',  this.search]);
  }

  public findRandom(): void {
    this.recipeService.getRandomRecipe().subscribe(
      data => {
        const id = data.meals[0].idMeal;
        this.router.navigate(['/recipe',  id]);
      },
      error => console.error(error)
    );
  }
}
