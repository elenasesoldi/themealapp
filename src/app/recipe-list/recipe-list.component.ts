import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  public name: string;
  public recipeList: Recipe[];
  public selectedId: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params.name;
      if (this.name.length) {
        this.recipeList = [];
        this.recipeService.getListByName(this.name).subscribe(
          data => {
            for (const m of data.meals) {
              this.recipeList.push(m);
            }
            console.log(this.recipeList);
          },
          error => console.error(error)
        );
      }
    });
  }

  public onSelect(recipe: Recipe): void {
    const selected = document.getElementById('recipe' + recipe.idMeal);
    const selectedImg = selected.children[0] as HTMLElement;
    selected.style.background = 'rgba(255,255,255,0.75)';
    selectedImg.style.opacity = '0.75';

    setTimeout(() => {
      selected.style.background = 'rgba(255,255,255,0.5)';
      selectedImg.style.opacity = '1';
      this.router.navigate(['/recipe',  recipe.idMeal]);
    }, 500);
  }
}
