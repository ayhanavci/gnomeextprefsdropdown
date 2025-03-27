import GObject from 'gi://GObject';
import St from 'gi://St';
import {Extension, gettext as _} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as PanelMenu from 'resource:///org/gnome/shell/ui/panelMenu.js';

import * as Main from 'resource:///org/gnome/shell/ui/main.js';


const Indicator = GObject.registerClass(
    class Indicator extends PanelMenu.Button {

        _init(extension) {
            super._init(0.0, 'My Shiny Indicator');
            this._extension = extension;
            this.mainIcon = new St.Icon({
                icon_name: 'face-smile-symbolic',
                style_class: 'system-status-icon',
            });
            
            this.add_child(this.mainIcon);            
            this.mainIcon = this.connect('button-press-event', (actor, event) => {
                if (event.get_button() === 1) { //Left click
                    this.menu.close();                    
                    this._extension.openPreferences();
                }
            });
        }
        destroy() {
           
            super.destroy();
        }  

     
    });

export default class IndicatorExampleExtension extends Extension {
    enable() {
        let _extension = this;

        this._indicator = new Indicator(_extension);
        Main.panel.addToStatusArea(this.uuid, this._indicator);
        
    }

    disable() {
        this._indicator.destroy();
        this._indicator = null;
    }
}

