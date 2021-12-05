import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DataGridComponent} from './data-grid.component';
import {DataGridRowComponent} from './data-grid-row/data-grid-row.component';
import {FieldTypes} from './data-grid-config';
import {ModalConfirmComponent} from '../modal/confirm/modal-confirm.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {Subject} from 'rxjs';
import {FormsModule} from '@angular/forms';

describe('data grid component', () => {
  let fixture: ComponentFixture<DataGridComponent>;
  let element: DebugElement;
  let instance: DataGridComponent;
  let itemsMock;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        imports: [
          NgbModule,
          FormsModule
        ],
        declarations: [
          DataGridComponent,
          DataGridRowComponent,
          ModalConfirmComponent
        ]
      });

    fixture = TestBed.createComponent(DataGridComponent);
    element = fixture.debugElement;
    instance = fixture.componentInstance;
    itemsMock = [
      {id: 0, title: 'strawberry', img: '', price: 2},
      {id: 1, title: 'tomato', img: '', price: 1}
    ];
    instance.data = itemsMock;
    instance.itemAction = new Subject();

    instance.config = [
      {key: 'title'}
    ]

    fixture.detectChanges();
  });

  describe('rows', () => {

    it('should be 2', () => {
      const rows = element.queryAll(By.directive(DataGridRowComponent));
      expect(rows.length).toBe(2);
    });

    it('should contains proper text', () => {
      const rows = element.queryAll(By.directive(DataGridRowComponent));
      expect(rows[0].nativeElement.innerText).toContain('strawberry');
      expect(rows[1].nativeElement.innerText).toContain('tomato');
    });

    it('should display delete button when user is logged in', () => {
      instance.config.push({type: FieldTypes.BUTTON, header: 'remove'})
      const rows = element.queryAll(By.directive(DataGridRowComponent));
      fixture.detectChanges();
      const btn = rows[0].query(By.css('button'));
      expect(btn).toBeTruthy();
    });

  });

  describe('headers', () => {

    it('should be consistent with config', () => {
      const headers = element.queryAll(By.css('th'));
      expect(instance.config.length + 1).toBe(headers.length);
    });

    it('should be consistent with config after adding new row', () => {
      instance.config.push({key: 'price', type: FieldTypes.INPUT})
      fixture.detectChanges();
      const headers = element.queryAll(By.css('th'));
      expect(instance.config.length + 1).toBe(headers.length);
    });

  });

});
