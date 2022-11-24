import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';

class ButtonComponent {
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: ButtonComponent, selector: "lib-button", ngImport: i0, template: "<p>button works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', template: "<p>button works!</p>\n" }]
        }] });

class ButtonModule {
}
ButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: ButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.1", ngImport: i0, type: ButtonModule, declarations: [ButtonComponent], exports: [ButtonComponent] });
ButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: ButtonModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: ButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [ButtonComponent],
                    exports: [ButtonComponent],
                }]
        }] });

/*
 * Public API Surface of ui-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ButtonModule };
//# sourceMappingURL=ui-lib.mjs.map
//# sourceMappingURL=ui-lib.mjs.map
