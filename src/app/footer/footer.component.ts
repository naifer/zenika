import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  protected fullYear = new Date().getUTCFullYear();

  private apiService = inject(ApiService);

  private document = inject(DOCUMENT);

  protected __kaboom__() {
    this.apiService.__kaboom__().subscribe(() => this.document.location.reload());
  }
}
