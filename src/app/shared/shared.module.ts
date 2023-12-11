import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HeaderComponent } from './components/header/header.component';
// import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';
import { CusAccordionComponent } from './components/cus-accordion/cus-accordion.component';
import { TimeAgoPipe } from './pipe/time-ago.pipe';
import { TreatImgUrlPipe } from './pipe/treat-img-url.pipe';
import { DropdownDirective } from './directives/dropdown.directive';
import { TogglePassDirective } from './directives/toggle-pass.directive';
import { AllowNumDirective } from './directives/allow-num.directive';
import { ModalModule } from './modules/modal/modal.module';
import { SizeConvPipe } from './pipe/size-conv.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { SafeUrlPipe } from './pipe/safe-url.pipe';
import { LoadingBtnComponent } from './components/loading-btn/loading-btn.component';
import { TextTransformPipe } from './pipe/text-transform.pipe';
import { BankPipe } from './pipe/bank.pipe';
import { TimerComponent } from './components/timer/timer.component';
import { SummaryPipe } from './pipe/summary.pipe';
import { TruncateAmountPipe } from './pipe/truncate-amount.pipe';
import { DefaultBankDirective } from './directives/default-bank.directive';
import { CusRouterLinkDirective } from './directives/cus-router-link.directive';
// import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { PhoneCodePipe } from './pipe/phone-code.pipe';
import { SvgLoaderDirective } from './directives/svg-loader.directive';
import { InnerContPhoneComponent } from './components/inner-cont-phone/inner-cont-phone.component';
import { AltImgLoaderDirective } from './directives/alt-img-loader.directive';
import { PublicIdPipe } from './pipe/public-id.pipe';
import { FlexSliderComponent } from './components/flex-slider/flex-slider.component';
import { SvgIconsComponent } from './components/svg-icons/svg-icons.component';
import { GroupAccordionComponent } from './components/group-accordion/group-accordion.component';
import { CleanUrlPipe } from './pipe/clean-url.pipe';
import { StripHtmlPipe } from './pipe/strip-html.pipe';
import { CloudinaryModule as clModule } from '@cloudinary/ng';
import { CloudTransPipe } from './pipe/cloud-trans.pipe';
import { StripSpaceDirective } from './directives/strip-space.directive';
import { SubmitBtnComponent } from './components/submit-btn/submit-btn.component';
import { CustomScrollComponent } from './components/custom-scroll/custom-scroll.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { DateFormatPipe } from './pipe/date-format.pipe';

@NgModule({
  declarations: [
    // HeaderComponent,
    // FooterComponent,
    DropdownComponent,
    BannerCarouselComponent,
    CusAccordionComponent,
    TimeAgoPipe,
    TreatImgUrlPipe,
    DropdownDirective,
    TogglePassDirective,
    AllowNumDirective,
    SizeConvPipe,
    PaginationComponent,
    SafeHtmlPipe,
    SafeUrlPipe,
    LoadingBtnComponent,
    TextTransformPipe,
    BankPipe,
    TimerComponent,
    SummaryPipe,
    TruncateAmountPipe,
    DefaultBankDirective,
    CusRouterLinkDirective,
    // AuthLayoutComponent,
    PhoneCodePipe,
    SvgLoaderDirective,
    InnerContPhoneComponent,
    AltImgLoaderDirective,
    PublicIdPipe,
    FlexSliderComponent,
    SvgIconsComponent,
    GroupAccordionComponent,
    CleanUrlPipe,
    StripHtmlPipe,
    CloudTransPipe,
    StripSpaceDirective,
    SubmitBtnComponent,
    CustomScrollComponent,
    CustomSelectComponent,
    DateFormatPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    clModule,
  ],
  exports: [
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    // HeaderComponent,
    // FooterComponent,
    DropdownComponent,
    BannerCarouselComponent,
    CusAccordionComponent,
    TimeAgoPipe,
    DropdownDirective,
    TogglePassDirective,
    AllowNumDirective,
    SizeConvPipe,
    PaginationComponent,
    TreatImgUrlPipe,
    SafeHtmlPipe,
    SafeUrlPipe,
    LoadingBtnComponent,
    TextTransformPipe,
    BankPipe,
    TimerComponent,
    SummaryPipe,
    TruncateAmountPipe,
    DefaultBankDirective,
    CusRouterLinkDirective,
    // AuthLayoutComponent,
    PhoneCodePipe,
    SvgLoaderDirective,
    InnerContPhoneComponent,
    AltImgLoaderDirective,
    PublicIdPipe,
    FlexSliderComponent,
    SvgIconsComponent,
    GroupAccordionComponent,
    CleanUrlPipe,
    StripHtmlPipe,
    clModule,
    CloudTransPipe,
    StripSpaceDirective,
    SubmitBtnComponent,
    CustomScrollComponent,
    CustomSelectComponent,
    DateFormatPipe
  ],
})
export class SharedModule {}
