import { Component, inject, OnInit, computed, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { CartService } from '../../core/services/cart.service';
import { LanguageService } from '../../core/services/language.service'; // استيراد خدمة اللغة

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent implements OnInit {
[x: string]: any;

  // inject الخدمات
  readonly _AuthService = inject(AuthService);
  private readonly _CartService = inject(CartService);
  private readonly _LanguageService = inject(LanguageService); // inject خدمة اللغة

  CountNumber: Signal<number> = computed(() => this._CartService.CartNumber());

  ngOnInit(): void {
    this._CartService.getProductsCart().subscribe({
      next: (res) => {
        console.log(res);
        this._CartService.CartNumber.set(res.numOfCartItems);
      }
    });
  }

  // دالة لتغيير اللغة
  changeLanguage(lang: string): void {
    this._LanguageService['setLang'](lang); // استدعاء خدمة تغيير اللغة
  }
}
