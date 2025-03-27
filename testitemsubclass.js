import GObject from 'gi://GObject';

export const TestItemSubclass = GObject.registerClass({
    GTypeName: 'TestItemSubclass',
    Properties: {
        'display-property': GObject.ParamSpec.string(
            'display-property',
            'Display Property',
            'Dropdown display name for the test item',
            GObject.ParamFlags.READWRITE,
            "TEST ITEM"
        ),
    },
    Signals: {
        'display-signal': {},
    },
}, class TestItemSubclass extends GObject.Object {
    constructor(constructProperties = {}) {
        super(constructProperties);
    }

    get display_property() {
        if (this._display_property === undefined)
            this._display_property = null;

        return this._display_property;
    }

    set display_property(value) {
        if (this.display_property === value)
            return;

        this._display_property = value;
        this.notify('display-property');
    }
});