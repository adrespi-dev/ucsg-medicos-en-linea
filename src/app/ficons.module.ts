import { FeatherModule } from "angular-feather";
import { NgModule } from "@angular/core";
import { Phone, Heart, ArrowLeft } from "angular-feather/icons";

const icons = {
  Phone,
  Heart,
  ArrowLeft
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class FiconsModule {}
