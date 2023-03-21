import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SSkillsService } from 'src/app/service/s-skills.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  nombreS: string = '';
  porcentajeS: number;

  constructor(private sSkills: SSkillsService, private router: Router) { }

  ngOnInit(): void {}

  onCreate(): void {
    const skill = new Skills(this.nombreS, this.porcentajeS);
    this.sSkills.save(skill).subscribe(
      data => {
        alert('Skill añadida');
        this.router.navigate(['']);
      },
      err => {
        alert('Falló al añadir Skill');
        this.router.navigate(['']);
      }
    )
  };
}