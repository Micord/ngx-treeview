import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from '../lib/directives/dropdown.directive';
import { DropdownMenuDirective } from '../lib/directives/dropdown-menu.directive';
import { DropdownToggleDirective } from '../lib/directives/dropdown-toggle.directive';
import { DropdownTreeviewComponent } from '../lib/components/dropdown-treeview/dropdown-treeview.component';
import { TreeviewComponent } from '../lib/components/treeview/treeview.component';
import { TreeviewItemComponent } from '../lib/components/treeview-item/treeview-item.component';
import { TreeviewPipe } from './pipes/treeview.pipe';
import { TreeviewI18n, DefaultTreeviewI18n } from '../lib/models/treeview-i18n';
import { TreeviewConfig } from '../lib/models/treeview-config';
import { TreeviewEventParser, DefaultTreeviewEventParser } from '../lib/helpers/treeview-event-parser';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        TreeviewComponent,
        TreeviewItemComponent,
        TreeviewPipe,
        DropdownDirective,
        DropdownMenuDirective,
        DropdownToggleDirective,
        DropdownTreeviewComponent
    ], exports: [
        TreeviewComponent,
        TreeviewPipe,
        DropdownDirective,
        DropdownMenuDirective,
        DropdownToggleDirective,
        DropdownTreeviewComponent
    ]
})
export class TreeviewModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TreeviewModule,
            providers: [
                TreeviewConfig,
                { provide: TreeviewI18n, useClass: DefaultTreeviewI18n },
                { provide: TreeviewEventParser, useClass: DefaultTreeviewEventParser }
            ]
        };
    }
}
