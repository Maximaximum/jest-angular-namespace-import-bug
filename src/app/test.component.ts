import { Component } from '@angular/core';
import * as Apollo from 'apollo-angular';

@Component({
  selector: 'app-test',
  template: 'template',
})
export class TestComponent {
  constructor(private apollo: Apollo.Apollo) {}
}
