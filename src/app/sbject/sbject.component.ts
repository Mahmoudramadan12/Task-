import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Service } from '../hero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sbject',
  templateUrl: './sbject.component.html',
  styleUrl: './sbject.component.scss',
})
export class SbjectComponent implements OnInit, OnDestroy {
  users: any[] = [];
  subscription!: Subscription;

  constructor(private service: Service) {}
  ngOnInit(): void {
    this.getUsers();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  getUsers() {
    this.subscription = this.service.getusers().subscribe((res: any) => {
      console.log(res);
      this.users = res;
    });
  }
}
