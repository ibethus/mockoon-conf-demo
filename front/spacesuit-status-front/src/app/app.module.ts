import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { MissionModule } from './mission/mission.module';

@NgModule({
  imports: [BrowserModule, MatButtonModule, MatIconModule, MissionModule],
  declarations: [],
  bootstrap: [],
  providers: [],
})
export class AppModule {}
