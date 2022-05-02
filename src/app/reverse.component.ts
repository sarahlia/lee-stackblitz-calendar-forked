import { Component } from '@angular/core';

@Component({
  selector: 'app-reverse',
  template: `
    <h2>Reverse</h2>
    The reverse of string is {{ "string" | reverse}}
    <p>Tony asked me not to say his name backwards but I replied, {{'tony' | reverse}}</p>
  `,
})
export class ReverseComponent {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
