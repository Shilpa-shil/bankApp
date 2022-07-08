import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  @Input() item:string|undefined

  @Output() onCancel=new EventEmitter()
  //creating ondelete event - since it is occuring in parent so put it in @Output
  @Output() onDelete=new EventEmitter()

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  cancel(){
    this.onCancel.emit()
  }

  delete(){
    //emit the event onDelete with account to be deleted as the argument
    this.onDelete.emit(this.item)
  }

}
