import { ExtensionPreferences, gettext as _, } from "resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js";
import * as SettingsPageHandler from "./prefssettingspage.js";

//glib-compile-schemas schemas/
export default class TestPreferences extends ExtensionPreferences {
  constructor(metadata) {
    super(metadata);
    console.info(`constructing ${this.metadata.name}`);    
  }
  fillPreferencesWindow(window) {
    this._window = window;            
    console.error(`Prefs Open`);
    //Settings
    this._settingsPageHandler = new SettingsPageHandler.SettingsPageHandler(this)
    this._settingsPageHandler.createPage();       

    window.connect("close-request", () => {      
      console.error(`Prefs Close`);
      this._settingsPageHandler.clear();     
      this._settingsPageHandler = null;      
    });
  }      
}
