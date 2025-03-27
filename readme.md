## Gtk.Dropdown & Adw.Comborow

This is a very basic sample for using a dropdown on your Gnome Shell extension Preferences page. It uses a model and an item class to populate the controls. Both of these controls are populated exactly the same way but they have a different look and feel.

  * ```TestItemSubclass``` is whatever object you want to populate your controls with. It has a ```display-property``` which is how you want it to be displayed on the UI. You can add your custom properties so that you can retrieve with ```dropdown.get_selected_item();```

  * ```ArrayStore``` is the class, which you give to the dropdown / comborow as a model. You can push ```TestItemSubclass``` objects to it during the runtime to modify the dropdown / comborow.