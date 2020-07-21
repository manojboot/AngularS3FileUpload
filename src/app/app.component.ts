import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UploadService } from './services/upload.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  title = 'IntegrationApplication';
  newTask: string;
  appIdSelected: number;
  public rows: Array<{ flag: string, name: string }> = [];
  public name: string;
  public flag: string;
  public appIds = [{ id: 1, appName: 'SCMACK' }, { id: 2, appName: 'SCMASN' }, { id: 3, appName: 'SCMNSD' }, { id: 4, appName: 'SCMSHC' }, { id: 5, appName: 'SCMSHR' }]; public items = [{ id: 1, name: 'Y' }, { id: 2, name: 'N' }];
  public id: number;
  public selectedLevel: string;
  public selectedLevel1: string;
  isDisplay = true;
  modalRef: BsModalRef;
  selectedFiles: FileList;

  constructor(private modalService: BsModalService, private uploadService: UploadService) { }
  addToList() {
    this.appIds.push(
      { id: this.id, appName: this.newTask });
    this.newTask = '';
  }

  submit() {
  //  alert('mike' + " " + this.selectedLevel + " " + this.selectedLevel1);
    this.isDisplay = false;
    this.rows.push({ flag: this.selectedLevel1, name: this.selectedLevel });
    console.log(this.rows);
  }

  selected() {
    console.log(this.selectedLevel)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.uploadService.uploadfile(file);
  }
  selectFile(event) {
    console.log(event);
    this.selectedFiles = event.target.files;
  }
}