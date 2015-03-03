CKEDITOR.plugins.add('spoiler', {
    requires: 'widget',

    lang: ['en', 'de'],

    icons: 'spoiler',

    hidpi: true,

    init: function (editor) {
        editor.addContentsCss(this.path + 'css/spoiler.css');

        editor.widgets.add('spoiler', {

            button: editor.lang.spoiler.button,

            template: (
                editor.config.spoiler_template ||
                '<div class="spoiler">' +
                    '<h6 class="spoiler-title">{defaultTitle}</h6>' +
                    '<div class="spoiler-content"><p>{defaultContent}</p></div>' +
                '</div>'
            )
            .replace(/\{([a-z]+)\}/ig, function (match, name) {
                return editor.lang.spoiler[name];
            }),

            editables: {
                title: {
                    selector: '.spoiler-title'
                },
                content: {
                    selector: '.spoiler-content'
                }
            },

            allowedContent:
                'div(!spoiler,spoiler-open); *(!spoiler-title); *(!spoiler-content)',

            requiredContent: 'div(spoiler)',

            upcast: function (element) {
                return element.name === 'div' && element.hasClass('spoiler');
            },

            init: function () {
                this.wrapper.addClass('spoiler-open');
            }
        } );
    }
} );
