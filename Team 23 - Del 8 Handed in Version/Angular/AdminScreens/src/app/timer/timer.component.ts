import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Timer } from '../model/Users/timer';
import { UserService } from '../shared/User/user.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  timerData: Timer;
  public Timer: FormControl = new FormControl();
  timerForm: FormGroup;
  constructor(
    public service: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.timerForm = new FormGroup({
      timerID: new FormControl(0),
      timerSet: new FormControl(0),
    });
  }

  validation_message = {
    timerSet: [
      { type: 'required', message: 'Please set a time' },
      { type: 'min', message: 'Must be more than 10' },
    ],
  };

  ngOnInit(): void {
    this.service.getTimer2().subscribe((res) => {
      this.timerData = res as Timer;
      console.log(this.timerData);
      this.timerForm = this.formBuilder.group({
        timerID: [this.timerData.timerID],
        timerSet: [
          this.timerData.timerSet,
          Validators.compose([Validators.required, Validators.min(11)]),
        ],
      });
    });
  }

  onSubmit() {
    console.log(this.timerForm.value);
    this.service.putTimer(this.timerForm.value).subscribe(
      (res) => {
        this.toastr.success('Timer updated Successfully', 'Success');
      },
      (error) => {
        this.toastr.info('Could not Change Timer', 'Info');
      }
    );
  }
}
