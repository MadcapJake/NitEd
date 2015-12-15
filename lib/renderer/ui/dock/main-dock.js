(function () {

EditorUI.MainDock = Polymer({
    is: 'main-dock',

    properties: {
    },

    attached: function () {
        this.async(function() {
            this.lightDomReady();
        });
    },

    lightDomReady: function () {
        EditorUI.DockUtils.root = this.$.root;
        Editor.loadLayout( Polymer.dom(EditorUI.DockUtils.root).parentNode, function ( needReset ) {
            if ( needReset ) {
                EditorUI.DockUtils.reset();
            }
        });
    },
});

})();
