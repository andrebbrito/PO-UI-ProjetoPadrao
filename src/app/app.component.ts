import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private ProAppConfigService: ProAppConfigService){
    if (!this.ProAppConfigService.insideProtheus){
      this.ProAppConfigService.loadAppConfig();
    }
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Exit', action: this.closeApp.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

  private closeApp() {
    if (!this.ProAppConfigService.insideProtheus){
      this.ProAppConfigService.callAppClose();
    } else {
      alert('O App não está sendo executado dentro do Protheus');
    }
  }

}
