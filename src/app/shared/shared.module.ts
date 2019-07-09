import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CommonMaterialModule } from './common-material/common-material.module';
import { SafePipe } from './safe.pipe';
import { UploadModule } from './upload/upload.module';

@NgModule({
  declarations: [ HeaderComponent, FooterComponent, SideNavComponent , SafePipe],
  imports: [
    CommonModule,
    CommonMaterialModule,
    RouterModule,
    UploadModule
  ],
  exports: [HeaderComponent, FooterComponent, SideNavComponent, SafePipe]
})
export class SharedModule { }
