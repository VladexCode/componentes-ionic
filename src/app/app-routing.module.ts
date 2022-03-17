import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'alert',
    loadChildren: () =>
      import('./page/alert/alert.module').then((m) => m.AlertPageModule),
  },
  {
    path: 'action-sheet',
    loadChildren: () =>
      import('./page/action-sheet/action-sheet.module').then(
        (m) => m.ActionSheetPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./page/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'avatar',
    loadChildren: () =>
      import('./page/avatar/avatar.module').then((m) => m.AvatarPageModule),
  },
  {
    path: 'button',
    loadChildren: () =>
      import('./page/button/button.module').then((m) => m.ButtonPageModule),
  },
  {
    path: 'card',
    loadChildren: () =>
      import('./page/card/card.module').then((m) => m.CardPageModule),
  },
  {
    path: 'check',
    loadChildren: () =>
      import('./page/check/check.module').then((m) => m.CheckPageModule),
  },
  {
    path: 'date-time',
    loadChildren: () =>
      import('./page/date-time/date-time.module').then(
        (m) => m.DateTimePageModule
      ),
  },
  {
    path: 'fab',
    loadChildren: () =>
      import('./page/fab/fab.module').then((m) => m.FabPageModule),
  },
  {
    path: 'grid',
    loadChildren: () =>
      import('./page/grid/grid.module').then((m) => m.GridPageModule),
  },
  {
    path: 'infinite',
    loadChildren: () =>
      import('./page/infinite/infinite.module').then(
        (m) => m.InfinitePageModule
      ),
  },
  {
    path: 'input',
    loadChildren: () =>
      import('./page/input/input.module').then((m) => m.InputPageModule),
  },
  {
    path: 'list-reorder',
    loadChildren: () =>
      import('./page/list-reorder/list-reorder.module').then(
        (m) => m.ListReorderPageModule
      ),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./page/list/list.module').then((m) => m.ListPageModule),
  },
  {
    path: 'loading',
    loadChildren: () =>
      import('./page/loading/loading.module').then((m) => m.LoadingPageModule),
  },
  {
    path: 'modal-info',
    loadChildren: () =>
      import('./page/modal-info/modal-info.module').then(
        (m) => m.ModalInfoPageModule
      ),
  },
  {
    path: 'modal',
    loadChildren: () =>
      import('./page/modal/modal.module').then((m) => m.ModalPageModule),
  },
  {
    path: 'popover',
    loadChildren: () =>
      import('./page/popover/popover.module').then((m) => m.PopoverPageModule),
  },
  {
    path: 'progress',
    loadChildren: () =>
      import('./page/progress/progress.module').then(
        (m) => m.ProgressPageModule
      ),
  },
  {
    path: 'refresher',
    loadChildren: () =>
      import('./page/refresher/refresher.module').then(
        (m) => m.RefresherPageModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./page/search/search.module').then((m) => m.SearchPageModule),
  },
  {
    path: 'segment',
    loadChildren: () =>
      import('./page/segment/segment.module').then((m) => m.SegmentPageModule),
  },
  {
    path: 'slides',
    loadChildren: () =>
      import('./page/slides/slides.module').then((m) => m.SlidesPageModule),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./page/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'toast',
    loadChildren: () =>
      import('./page/toast/toast.module').then((m) => m.ToastPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
