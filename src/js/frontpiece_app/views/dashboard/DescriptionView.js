var View = require('frontpiece.view')

var DescriptionView = View.extend({
    initialize: function (options) {
        var view = this
        this.$error   = $(options.error)
        this.$success = $(options.success)

        this.success = {}
        ;['balls', 'period', 'height'].forEach(function (field) {
            var fragment = this.success[field] = options[field]
        })

        this.model = options.model
        this.model.on('invalid', function (o, error) {
            view.render(error)
        })
        this.model.on('valid', function () {
            view.render()
        })
        if (!this.model.isValid()) {
            this.render(siteswapOptions.validationError)
        } else {
            this.render()
        }
    },
    render: function (error, success) {
        if (error) {
            this.$error.text(error)
            this.$error.removeClass('js-hide')
            this.$success.addClass('js-hide')
        } else {
            this.$success.removeClass('js-hide')
            this.$error.addClass('js-hide')
        }
    }
})

module.exports = DescriptionView