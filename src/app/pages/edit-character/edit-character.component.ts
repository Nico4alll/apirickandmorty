import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickMortydbService } from 'src/app/services/rickmortydb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent implements OnInit {
  character: any = {};

  constructor(
    private route: ActivatedRoute,
    private rickMortydbService: RickMortydbService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.rickMortydbService.getCharacterById(Number(id)).subscribe((data) => {
        this.character = data;
      });
    }
  }

  saveEdit(): void {
    this.rickMortydbService.updateCharacter(this.character.id, this.character).subscribe(() => {
      console.log('Personaje actualizado');
      this.router.navigate(['/characters']);
    });
  }
}