import { FeatherModule } from "angular-feather";
import { NgModule } from "@angular/core";
import { Phone } from "angular-feather/icons";

const icons = {
  Phone
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]
})
export class FiconsModule {}
