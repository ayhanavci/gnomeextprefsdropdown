import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

import * as TestItemSubclass from './testitemsubclass.js'
import * as ArrayStore from './arraystore.js'

let my_prefs;
let _settingsPage;
export const SettingsPageHandler = class SettingsPageHandler {
    constructor(_my_prefs) {    
        my_prefs = _my_prefs;
        this._window = _my_prefs._window;
        _settingsPage = this;
    }
    clear() {
        this._drop_down = null;
        this._custom_model = null;
    }
    createPage() {
        this._settingsPage = new Adw.PreferencesPage();

        this._window.add(this._settingsPage);
        this._testListGroup = new Adw.PreferencesGroup();
        console.error(`PREFS`);
        
        //Same model is used for both
        this._custom_model = new ArrayStore.ArrayStore();
           
        //Same items are used for them as well.
        let new_item = new TestItemSubclass.TestItemSubclass();        
        new_item.display_property = "ITEM 1";
        this._custom_model.insertItem(new_item);

        new_item = new TestItemSubclass.TestItemSubclass();          
        new_item.display_property = "ITEM 2";
        this._custom_model.insertItem(new_item);

        new_item = new TestItemSubclass.TestItemSubclass();              
        new_item.display_property = "ITEM 3";
        this._custom_model.insertItem(new_item);

        this.createGtkDropdown();
        this.createAdwComborow();

        this._settingsPage.add(this._testListGroup);
    }
    createGtkDropdown() {
        this._drop_down = new Gtk.DropDown();        
        
        this._drop_down.set_model(this._custom_model);
        this._drop_down.set_expression(Gtk.PropertyExpression.new(TestItemSubclass.TestItemSubclass, null, 'display-property'));                
        this._testListGroup.add(this._drop_down);     

        //just to look less clumped
        this._drop_down.set_margin_top(10); 
        this._drop_down.set_margin_bottom(10);        
    }
    createAdwComborow() {        
        this._comborow = new Adw.ComboRow();        
        
        this._comborow.set_model(this._custom_model);
        this._comborow.set_expression(Gtk.PropertyExpression.new(TestItemSubclass.TestItemSubclass, null, 'display-property'));
       
        this._testListGroup.add(this._comborow);   
          
        //just to look less clumped
        this._comborow.set_margin_top(10); 
        this._comborow.set_margin_bottom(10);        
    }
  

}

