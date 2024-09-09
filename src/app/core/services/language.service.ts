import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang: string = 'en'; 
  constructor() {
    
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.currentLang = savedLang;
      this.setLang(this.currentLang);
    }
  }

  setLang(lang: string): void {
    this.currentLang = lang;
    localStorage.setItem('lang', lang); 
    document.documentElement.lang = lang; 
    
   
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl'; 
    } else {
      document.documentElement.dir = 'ltr'; 
    }
  }

  getCurrentLang(): string {
    return this.currentLang;
  }
}
