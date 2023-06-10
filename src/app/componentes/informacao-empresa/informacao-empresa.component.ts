import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-informacao-empresa',
  templateUrl: './informacao-empresa.component.html',
  styleUrls: ['./informacao-empresa.component.css']
})
export class InformacaoEmpresaComponent implements OnInit{
  @Input() public emp:any;
  @Output() public onAlert = new EventEmitter();

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public alertEvent(e: object) {
    this.onAlert.emit(e);
  }
}
