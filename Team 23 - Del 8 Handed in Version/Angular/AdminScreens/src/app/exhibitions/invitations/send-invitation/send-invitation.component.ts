import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-send-invitation',
  templateUrl: './send-invitation.component.html',
  styleUrls: ['./send-invitation.component.scss']
})
export class SendInvitationComponent implements OnInit {

  constructor(private route: Router, private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSend(invitationModal) {
    this.modalService.open(invitationModal, { centered: true });

  }

  confirmSend(invitationModal){
    this.route.navigate(['/exhibitions']);
    this.modalService.dismissAll(invitationModal);
    this.toastr.success('Invitation Successfully sent', 'Success')
    this.toastr.info('Invitation Could Not be Sent', 'Info')
  }

}
