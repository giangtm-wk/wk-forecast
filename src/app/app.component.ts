import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { TuiThemeColorService } from '@taiga-ui/cdk';
import { TuiRoot } from "@taiga-ui/core";
import { TuiAvatar, TuiFade, } from '@taiga-ui/kit';
import { TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TuiRoot,
    FormsModule,
    TuiAvatar,
    TuiFade,
    TuiNavigation,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private readonly theme = inject(TuiThemeColorService);
  private router = inject(Router);

  title = 'wk-forecast';
  protected expanded = signal(false);

  ngOnInit(): void {
    this.theme.color = 'purple';
  }

  protected handleToggle(): void {
    this.expanded.update((e) => !e);
  }

  protected navigate(route: string): void {
    void this.router.navigate([route]);
  }
}
