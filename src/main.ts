import { bootstrapApplication } from '@angular/platform-browser';
import { TriStateCheckboxFilledDemo } from './app/tri-state-checkbox-filled-demo';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(TriStateCheckboxFilledDemo, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));