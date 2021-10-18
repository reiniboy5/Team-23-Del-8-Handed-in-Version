import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import * as moment from 'moment';
import { ExhibitionService } from 'src/app/shared/Exhibitions/exhibition.service';
import { Exhibition } from 'src/app/model/Exhibitions/exhibition';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-exhibition-schedule',
  templateUrl: './exhibition-schedule.component.html',
  styleUrls: ['./exhibition-schedule.component.scss'],
})
export class ExhibitionScheduleComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  today: Date = new Date();
  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  aName: any;

  exhibitionsList: Exhibition[];
  ngOnInit() {
    this.service.getExhibitions();
    this.getExhibitions();
    console.log('Here is Result', this.exhibitionsList);
  }

  getExhibitions() {
    this.service.getExhibition2().subscribe((res) => {
      this.exhibitionsList = res as Exhibition[];
      console.log('ksadkfn', res);

      this.events.forEach((value, i) => {
        for (i = 0; i < this.exhibitionsList.length; i++) {
          this.events.push({
            title: res[i].exhibitionName,
            start: moment(
              this.exhibitionsList[i].exhibitionStartDateTime
            ).toDate(),
            end: moment(this.exhibitionsList[i].exhibitionEndDateTime).toDate(),
          });
        }
      });
    });
  }

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: new Date(),
      end: new Date(),
      title: 'Today',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    // {
    //   start: startOfDay(new Date()),
    //   title: 'An event with no end date',
    //   color: colors.yellow,
    //   actions: this.actions,
    // },
    // {
    //   start: startOfDay(new Date()),
    //   title: 'DISPLAY ALL DAYES!!!',
    //   color: colors.yellow,
    //   actions: this.actions,
    // },
    // {
    //   start: this.today,
    //   end: addDays(endOfMonth(new Date()), 3),
    //   title: 'This is Reinahdt Testing DAte',
    //   color: colors.blue,
    //   allDay: true,
    // },
  ];

  activeDayIsOpen: boolean = false;

  constructor(private modal: NgbModal, public service: ExhibitionService) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
