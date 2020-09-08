import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('Moskva', Validators.required),
      }),
      skills: new FormArray([])
    })
  }

  sumbit() {
    if (this.form.valid) {
      console.log('Form Submited', this.form);
      const formData = {...this.form.value};
      console.log('Form Data', formData)
    }
  }

  setCapital() {
    const cityMap = {
      ru: 'Moskva',
      ua: 'Kiev',
      by: 'Минск',
    };

    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];

    this.form.patchValue({
      address: {
        city
      }
    })
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.form.get('skills')).push(control)
  }
}
