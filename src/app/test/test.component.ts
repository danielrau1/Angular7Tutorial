import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public name = 'Daniel'; // [1.1]

  public siteUrl = window.location.href; // [1.3]

  public isDisabled = true; // [1.4]
  public myId = 'testId'; // [1.4]

  public successClass = 'text-success'; // [1.5a]
public hasError = true; // [1.5b]
public isSpecial = true; // [1.5c]
public messageClasses = { // [1.5c]
  'text-success': !this.hasError,
  'text-danger' : this.hasError,
  'text-special' : this.isSpecial
};

public highlightColor = 'orange' ; // [1.6c]

  public titleStyles = { // [1.6d]
    color: 'blue',
    fontStyle: 'italic',
  };

  public greeting = ''; // [1.7a]
  public greeting2 = ''; // [1.7b]

  public name2 = ''; // [1.9]

displayName = false ; // [1.10b]

  public color = 'blue' ; // [1.11a]

  public colors = ['red', 'blue', 'green', 'yellow']; // [1.12a]

 @Input() public parentData; // [2.1c]
  /*
  Can also choose a name different than the one from the parentData
  @Input('parentData') public name;
   */


@Output() public childEvent = new EventEmitter(); // [2.2a]

// [2.3a]
public name4 = '[2.3] Pipes';
public message = '[2.3] pipes message';
public person = {
  firstName : 'John',
  lastName : 'Doe'
};







  constructor() { }

  ngOnInit() {
  }

  // [1.2]
  greetUser() {
    return 'Hello ' + this.name;
  }

  // [1.7]
  onClick(event) {
    console.log(event);
    this.greeting = '[1.7a] event binding'; // [1.7a]
  }

  // [1.8]
  logMessage(value) {
    console.log(value);
  }

  // [2.2c]
fireEvent() {
  this.childEvent.emit('[2.2] child to Parent');
}



}
